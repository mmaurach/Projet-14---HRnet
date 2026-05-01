import { NavLink } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <img src={logo} alt="HRnet logo" className="header-logo" />
          <h1 className="header-title">HRnet</h1>
        </div>

        <nav className="header-nav">
          <NavLink to="/" className="nav-link">
            Create Employee
          </NavLink>
          <NavLink to="/employees" className="nav-link">
            Current Employees
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
