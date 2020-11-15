import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  let history = useHistory();
  const login = () => {
    if (Email === "" || Password === "") {
      toast.warning("Fill All The Fields");
    } else {
      axios
        .post("http://localhost:5000/login", {
          email: Email,
          password: Password,
        })
        .then((response) => {
          console.log(response);
          if (response.data.token) {
            sessionStorage.setItem("token", response.data.token);
            toast.success("Logged In");
            history.push("/tutorials");
          } else {
            toast.error("Wrong Credentials");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="login d-flex justify-content-center align-items-baseline m-2">
      <div className="form-group col-md-4  card p-3">
        <h4 className="text-center">Login</h4>
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          className="btn btn-info m-3"
          type="submit"
          value="Login"
          onClick={login}
        />
      </div>
    </div>
  );
}
