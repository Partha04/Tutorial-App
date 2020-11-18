import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {

    let history = useHistory();
    const [userName, setuserName] = useState("")

    const [Email, setEmail] = useState("")

    const [Password, setPassword] = useState("");

    const register=()=>{

        if(userName===""||Email===""||Password==="")
        {
          toast.warning("Please Add All The Fields");
          return;
        }
        else{

          axios.post("http://localhost:5000/register",
          {
            'username':userName,
            'email':Email,
            'password':Password
          })
          .then(response=>{
            toast.success("Sucessfully registered")
            setTimeout(2000)
            history.push("./login")   
          })
          .catch(err=>{
            console.log(err);
            toast.error("Something went wrong!!")
          })

          setuserName("");
          setEmail("");
          setPassword("");
        }
          
    }



    return (
    <div className="register d-flex justify-content-center align-items-baseline m-2">
      <div className="form-group col-md-4 card p-3">
        <h4 className="text-center">Register</h4>
        <label>User Name</label>
        <input
          type="text"
          className="form-control"

          value={userName}
          onChange={e=>{setuserName(e.target.value)}}
        />
        <label >Email</label>
        <input
          type="email"
          className="form-control"

          value={Email}
          onChange={e=>{setEmail(e.target.value)}}
        />
        <label>Password</label>
        <input
          type="password"
          className="form-control"

          value={Password}
          onChange={e=>{setPassword(e.target.value)}}
        />
        <input className="btn btn-info m-3" type="submit" value="Register" onClick={register} />
      </div>
    </div>
  );
}
