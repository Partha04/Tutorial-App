import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AllCourseCard = ({course}) => {

    const addTOMYcourses=()=>{
        var data = {
            "courseid":course.courseid
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
              console.log(JSON.stringify(response.data));
              toast(response.data.msg);
            })
            .catch(function (error) {
              console.log(error);
            });
    }

    return (
        <div className="allcoursecard col-md-3 my-3">
            <div className="card h-100">
                <span className="badge position-fixed badge-success p-2 m-1"> {course.courseid}</span>
                <img className="card-img-top w-100 allcoursecardimg" style={{"height":"60%"}} src={course.imgurl} alt="a"/>
                <div className="card-body my-0">
                <h5 className="card-title">{course.coursename}
                 </h5>
                 <p className="card-subtitle text-secondary"> {course.publisher}</p>   
                <p className="card-text">{course.coursedescription}</p>
                <button className="btn btn-outline-success w-100 " onClick={addTOMYcourses}>Add to My Courses</button>
                </div>
            </div>
        </div>
    );
}

export default AllCourseCard;
