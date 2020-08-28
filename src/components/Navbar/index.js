import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light justify-content-center nav-footer">
      <div className="w-75 nav-fill">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }>
              <i className="fas fa-home fa-2x"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/calendar"
              className={
                window.location.pathname === "/calendar"
                  ? "nav-link active"
                  : "nav-link"
              }>
              <i className="far fa-calendar-alt fa-2x"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/team"
              className={
                window.location.pathname === "/team"
                  ? "nav-link active"
                  : "nav-link"
              }>
              <i className="fas fa-users fa-2x"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
