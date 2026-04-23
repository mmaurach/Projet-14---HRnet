import { Link } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import states from "../../data/states";
import departments from "../../data/departements";

import "./home.scss";

function Home() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: null,
    startDate: null,
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

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

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>

      <div className="container">
        <a href="/employees">View Current Employees</a>
        <h2>Create Employee</h2>

        <form>
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
        </form>

        <button>Save</button>
      </div>
    </div>
  );
}

export default Home;
