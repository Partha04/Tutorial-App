import React, { useEffect, useState } from "react";
import MyCourseCard from "./smallComponents/MyCourseCard";
import AddCard from "./smallComponents/Addcard";
import axios from 'axios';


const MyCourse = () => {

  const [Data, setData] = useState([]);

  const getMycourse=()=>{
    var config = {
      method: 'get',
      url: 'http://localhost:5000/usercourse',
      headers: {
        'Authorization': 'Bearer '+sessionStorage.getItem("token")
      }
      };
  
    axios(config)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

useEffect(
  ()=>{  
    
getMycourse()
},[])

  return (
    <div className="sliderComponent row mx-auto p-4">
      {Data.map((data,index) => {
        return <MyCourseCard key={index} course={data}  getMycourse={getMycourse}/>
      }
      )}
      <AddCard />
    </div>
  );
};

export default MyCourse;
