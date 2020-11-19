import React, { useState } from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddCard = () => {

  const [coursename, setCoursename] = useState("");
  const [coursedescription, setCoursedescription] = useState("");
  const [imgurl, setImgurl] = useState("");

  const history = useHistory();


  const addTOMYcourses=(courseid)=>{
    var data = {
        "courseid":courseid
    };
        
        var config = {
          method: 'post',
          url: 'http://localhost:5000/usercourse',
          headers: { 
            'Authorization': 'Bearer '+sessionStorage.getItem("token")
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          toast(response.data.msg);
        })
        .catch(function (error) {
          console.log(error);
        });
}


  const createCourse = () => {

    if (coursename ==="" || coursedescription === "" || imgurl === "") {
      toast.warning("Fill All Fields");
      return;
    }
    else {
      var data = {
        "coursename": coursename,
        "imgurl": imgurl ,
        "coursedescription": coursedescription
      };

      var config = {
        method: 'post',
        url: 'http://localhost:5000/course',
        headers: {
          'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        },
        data: data
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          toast.success("created new course "+coursename)
          addTOMYcourses(response.data.insertId);
          history.push("/create",{courseid:response.data.insertId})
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  return (
    <div className="AddCard col-md-3 my-1 p-4">
      <div className="card p-2 h-100 d flex justify-content-around bg-dark text-white flex-column" >
        <h4 className="card-title text-center">Create A New Course</h4>

        <div class="form-group">
          <input type="text"
            class="form-control" name="" id="coursename" placeholder="Course Name" value={coursename} onChange={(e) => { setCoursename(e.target.value) }} />
        </div>
        <div class="form-group">
          <input type="text"
            class="form-control" name="" id="courseimg" placeholder="Course Image" value={imgurl} onChange={(e) => { setImgurl(e.target.value) }} />
        </div>

        <div class="form-group">
          <textarea class="form-control" id="Cd" placeholder="Course Description" rows="2" maxLength="60" value={coursedescription} onChange={(e) => { setCoursedescription(e.target.value) }} ></textarea>
        </div>


        <button type="submit" className="btn btn-outline-warning" onClick={createCourse} >Create Course</button>

      </div>
    </div>
  )
}
export default AddCard;