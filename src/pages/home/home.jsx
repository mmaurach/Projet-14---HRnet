import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import states from "../../data/states";
import departments from "../../data/departements";
import Modal from "../../components/modal/modal";
import { addEmployee } from "../../store/employeesSlice";

import "./home.scss";

function Home() {
  const initialForm = {
    firstName: "",
    lastName: "",
    dateOfBirth: null,
    startDate: null,
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  };

  const [form, setForm] = useState(initialForm);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleValueChange = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleZipChange = (e) => {
    const value = e.target.value;

    if (/^\d{0,5}$/.test(value)) {
      setForm((prev) => ({
        ...prev,
        zipCode: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      ...form,
      id: crypto.randomUUID(),

      dateOfBirth: form.dateOfBirth ? form.dateOfBirth.toISOString() : null,

      startDate: form.startDate ? form.startDate.toISOString() : null,
    };

    dispatch(addEmployee(newEmployee));

    setIsModalOpen(true);
    setForm(initialForm);
  };

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>

      <div className="container">
        <a href="/employees">View Current Employees</a>
        <h2>Create Employee</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
          />
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
          />
          <label>Date of Birth</label>

          <DatePicker
            selected={form.dateOfBirth}
            onChange={(date) => handleValueChange("dateOfBirth", date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            maxDate={new Date()}
          />

          <label>Date of Start</label>

          <DatePicker
            selected={form.startDate}
            onChange={(date) => handleValueChange("startDate", date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              name="street"
              value={form.street}
              onChange={handleChange}
            />

            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={form.city}
              onChange={handleChange}
            />

            <label>State</label>

            <Select
              options={states}
              onChange={(selected) =>
                setForm({ ...form, state: selected.value })
              }
              placeholder="Select a state"
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={form.zipCode}
              onChange={handleZipChange}
              maxLength={5}
              inputMode="numeric"
            />
          </fieldset>
          <label>Department</label>

          <Select
            options={departments}
            placeholder="Select department"
            value={departments.find((item) => item.value === form.department)}
            onChange={(selected) =>
              setForm((prev) => ({
                ...prev,
                department: selected.value,
              }))
            }
          />
          <button type="submit">Save</button>
        </form>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h3>Employee Created!</h3>
          <p>The employee has been added successfully.</p>
        </Modal>
      </div>
    </div>
  );
}

export default Home;
