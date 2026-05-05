import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import Header from "../../components/Header/Header";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./employee.scss";

import { ModuleRegistry } from "ag-grid-community";
import { ClientSideRowModelModule } from "ag-grid-community";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

function Employee() {
  const employees = useSelector((state) => state.employees.list);
  const [search, setSearch] = useState("");

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString();
  };

  const columnDefs = useMemo(
    () => [
      {
        headerName: "First Name",
        field: "firstName",
      },
      {
        headerName: "Last Name",
        field: "lastName",
      },
      {
        headerName: "Start Date",
        field: "startDate",
        valueFormatter: (params) => formatDate(params.value),
      },
      {
        headerName: "Department",
        field: "department",
      },
      {
        headerName: "Date of Birth",
        field: "dateOfBirth",
        valueFormatter: (params) => formatDate(params.value),
      },
      {
        headerName: "Street",
        field: "street",
      },
      {
        headerName: "City",
        field: "city",
      },
      {
        headerName: "State",
        field: "state",
      },
      {
        headerName: "Zip Code",
        field: "zipCode",
      },
    ],
    [],
  );

  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      minWidth: 120,
      sortable: true,
      filter: true,
      floatingFilter: true,
      resizable: true,
    }),
    [],
  );

  return (
    <>
      <main className="page-container">
        <h2 className="page-title">Employees List</h2>

        <div className="table-toolbar">
          <input
            type="text"
            placeholder="Search an employee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="table-search"
          />
        </div>

        {employees.length === 0 ? (
          <p className="no-data">No employees found</p>
        ) : (
          <div className="ag-theme-alpine table-container">
            <AgGridReact
              rowData={employees || []}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              pagination={true}
              paginationPageSize={10}
              paginationPageSizeSelector={[10, 25, 50]}
              quickFilterText={search}
            />
          </div>
        )}
      </main>
    </>
  );
}

export default Employee;
