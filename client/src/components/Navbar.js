import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {




  return (<nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
    <a className="navbar-brand m-1" href="/">Editorial</a>
    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mx-auto position-sticky" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <NavLink className="nav-link" activeStyle={{
            borderBottom:"1px solid green"
           
          }} to="/tutorials">Tutorials</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" 
          activeStyle={{
            borderBottom:"1px solid green"
            
          }} to="/dashboard">Dashboard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"
          activeStyle={{
            borderBottom:"1px solid green"
           
          }} 
          to="/mycourse">My Courses</NavLink>
        </li>

      </ul>
    </div>
  </nav>
  );
};

export default Navbar;
