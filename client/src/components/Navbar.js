import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
          <div className="navbar-brand">
            <h3>Editorial</h3>
          </div>

          <div className="mx-auto">
            <ul className="nav navbar-nav navbar">
              <li className="nav-item">
                <Link className="nav-link" to="/tutorials">
                  Tutorials
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mycourse">
                  My Courses
                </Link>
              </li>
            </ul>
          </div>
        </nav>
  );
};

export default Navbar;
