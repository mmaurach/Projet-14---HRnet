import { Link } from "react-router-dom";
import { useState } from "react";

import "./home.scss";

function Home() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
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
          <label htmlFor="date-of-birth">Date of Birth</label>
          <input
            type="text"
            id="date-of-birth"
            name="dateOfBirth"
            value={form.dateOfBirth}
            onChange={handleChange}
          />
          <label htmlFor="start-date">Start Date</label>
          <input
            type="text"
            id="start-date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
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

            <label htmlFor="state">State</label>
            <select id="state"></select>

            <label htmlFor="zip-code">Zip Code</label>
            <input
              type="text"
              id="zip-code"
              name="zipCode"
              value={form.zipCode}
              onChange={handleChange}
            />
          </fieldset>
          <label htmlFor="department">Department</label>
          <select
            id="department"
            name="department"
            value={form.department}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Legal">Legal</option>
          </select>
        </form>

        <button>Save</button>
      </div>
    </div>
  );
}

export default Home;
