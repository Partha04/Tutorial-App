import React, { useState,useEffect } from "react";
import AllCourseCard from "./smallComponents/AllCourseCard";
import axios from 'axios'

const AllCourse = () => {

const [Data, setData] = useState([]);


useEffect(() => {
var config = {
  method: 'get',
  url: 'http://localhost:5000/course',
  headers: { 
    'Authorization': "Bearer "+sessionStorage.getItem("token")
  }
};

 axios(config)
.then(function (response) {
  console.log(response)
  setData(response.data);
  console.log(Data);
})
.catch(function (error) {
  console.log(error);
});

  
  
}, []);


  return (
    <div className="sliderComponent row mx-auto p-4">

{
  Data.map((d,index)=>{
    
    return <AllCourseCard key={index} course={d}/>;
    
  })
}


    </div>
  );
};

export default AllCourse;
