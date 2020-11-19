import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';


const MyCourseCard = ({ course }) => {
  const history = useHistory();

  const [mcourse, setMcourse] = useState([]);

  useEffect(() => {

    var config = {
      method: 'get',
      url: 'http://localhost:5000/course/'+course.courseid,
      headers: {
        'Authorization': 'Bearer '+sessionStorage.getItem("token")
      }
    };

    axios(config)
      .then(function (response) {
        setMcourse(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  const edit=()=>{
    history.push("/create",{courseid:course.courseid})
  }


  const gotoCourse = () => {
    
    history.push("/course",{courseid:course.courseid})
  }
  return (
    <div className="MyCourseCard col-md-3  my-1 p-4">
      <div className="card h-100">
        {
          <button className="btn btn-secondary position-absolute" onClick={edit} style={{top:"0px",right:"0px"}}>Edit</button>
        }
        <img  className="card-img-top w-100" style={{"height":"50%"}}  src={mcourse.imgurl} alt="a" />
        <div className="card-body">
          <h5 className="card-title">{mcourse.coursename}</h5>
          <p className="card-text">{mcourse.coursedescription}</p>
        </div>
        <button className="btn btn-outline-success m-2 text-black-50" onClick={gotoCourse} >Go to course</button>
      </div>
    </div>
  )
}

export default MyCourseCard;