import { useCallback, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import Header from "../../components/Header/Header";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./employee.scss";

import { ModuleRegistry, ClientSideRowModelModule } from "ag-grid-community";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

function Employee() {
  const employees = useSelector((state) => state.employees.list);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const gridApiRef = useRef(null);

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString();
  };

  const onGridReady = (params) => {
    gridApiRef.current = params.api;
  };

  const onSearchFilterContentChanged = useCallback((value) => {
    if (gridApiRef.current) {
      gridApiRef.current.setGridOption("quickFilterText", value);
    }
  }, []);

  const columnDefs = useMemo(
    () => [
      {
        headerName: "First Name",
        field: "firstName",
        flex: 1,
      },
      {
        headerName: "Last Name",
        field: "lastName",
        flex: 1,
      },
      {
        headerName: "Start Date",
        field: "startDate",
        flex: 1,
        valueFormatter: (params) => formatDate(params.value),
      },
      {
        headerName: "Department",
        field: "department",
        flex: 1,
      },
      {
        headerName: "Date of Birth",
        field: "dateOfBirth",
        flex: 1,
        valueFormatter: (params) => formatDate(params.value),
      },
      {
        headerName: "Street",
        field: "street",
        flex: 1,
      },
      {
        headerName: "City",
        field: "city",
        flex: 1,
      },
      {
        headerName: "State",
        field: "state",
        flex: 1,
      },
      {
        headerName: "Zip Code",
        field: "zipCode",
        flex: 1,
      },
    ],
    [],
  );

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      floatingFilter: true,
      resizable: true,
      minWidth: 120,
    }),
    [],
  );

  const paginationPageSizeSelector = useMemo(() => {
    return [5, 10, 25, 50];
  }, []);

  const goToPreviousPage = () => {
    if (gridApiRef.current) {
      gridApiRef.current.paginationGoToPreviousPage();

      setCurrentPage(gridApiRef.current.paginationGetCurrentPage() + 1);
    }
  };

  const goToNextPage = () => {
    if (gridApiRef.current) {
      gridApiRef.current.paginationGoToNextPage();

      setCurrentPage(gridApiRef.current.paginationGetCurrentPage() + 1);
    }
  };

  return (
    <>
      <main className="page-container">
        <h2 className="page-title">Employees List</h2>

        <div className="table-toolbar">
          <input
            type="text"
            placeholder="Search an employee..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              onSearchFilterContentChanged(e.target.value);
            }}
            className="table-search"
          />
        </div>

        {employees.length === 0 ? (
          <p className="no-data">No employees found</p>
        ) : (
          <>
            <div className="ag-theme-alpine table-container">
              <AgGridReact
                rowData={employees}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                pagination={true}
                paginationPageSize={10}
                paginationPageSizeSelector={paginationPageSizeSelector}
                suppressPaginationPanel={true}
                onGridReady={onGridReady}
                onPaginationChanged={() => {
                  if (gridApiRef.current) {
                    setCurrentPage(
                      gridApiRef.current.paginationGetCurrentPage() + 1,
                    );
                  }
                }}
              />
            </div>

            <div className="pagination-controls">
              <button onClick={goToPreviousPage}>Previous</button>

              <span>Page {currentPage}</span>

              <button onClick={goToNextPage}>Next</button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default Employee;
