import React from "react";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import AllCourse from "./components/AllCourses";
import MyCourse from "./components/MyCourses"
import Dashboard from "./components/Dashboard"
import Course from "./components/Course"
import Create from "./components/Create"

import { Route,Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

const Landing = () => {
  return (
    <div className="LandingComponent">
      <Navbar/>
      <ToastContainer autoClose={2000} />

      <Switch>

        <Route exact path="/">
          <Welcome/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        
        <Route path="/tutorials">
          <AllCourse/>
        </Route>
        
        <Route path="/mycourse">
          <MyCourse/>
        </Route>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
        <Route path="/course" >
          <Course/>
        </Route>
        <Route path="/create" >
          <Create/>
        </Route>
      </Switch>
    </div>
  );
};

export default Landing;
