import React, { useState } from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddCard = () => {

  const [coursename, setCoursename] = useState("");
  const [coursedescription, setCoursedescription] = useState("");
  const [imgurl, setImgurl] = useState("");

  const history = useHistory();
  const createCourse = () => {

    if (coursename === "" || coursedescription === "" || imgurl === "") {
      toast("Fill All Fields");
      return;
    }
    else {

      var data = {
        "coursename": { coursename },
        "imgurl": { imgurl },
        "coursedescription": { coursedescription }
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
          history.push("/create")
          history.push("/create",{courseid:response.data})
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  return (
    <div className="AddCard col-md-3 my-3">
      <div className="card p-2 h-100 d flex justify-content-around bg-secondary text-white flex-column" >
        <h4 className="card-title text-center">Create A New Course</h4>

        <div class="form-group">
          <label for="coursename"> Course Name</label>
          <input type="text"
            class="form-control" name="" id="coursename" value={coursename} onChange={(e) => { setCoursename(e.target.value) }} />
        </div>
        <div class="form-group">
          <label for="courseimg"> Course Img</label>
          <input type="text"
            class="form-control" name="" id="courseimg" value={imgurl} onChange={(e) => { setImgurl(e.target.value) }} />
        </div>

        <div class="form-group">
          <label for="Cd"> Course Description</label>
          <textarea class="form-control" id="Cd" rows="2" maxLength="60" value={coursedescription} onChange={(e) => { setCoursedescription(e.target.value) }} ></textarea>
        </div>


        <button type="submit" className="btn btn-warning" onClick={createCourse} >Create Course</button>

      </div>
    </div>
  )
}
export default AddCard;