import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">UserApp</h2>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          User List
        </NavLink>

        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Add User
        </NavLink>
        <NavLink
          to="/edit/:id"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          {" "}
          Edit
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/delete/:id"
        >
          {" "}
          Delete
        </NavLink>
      </div>
    </nav>
  );
}
