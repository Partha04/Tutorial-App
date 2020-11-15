import React, { useEffect, useState } from "react";
import MyCourseCard from "./smallComponents/MyCourseCard";
import AddCard from "./smallComponents/Addcard";
import axios from 'axios';


const MyCourse = () => {

  const [Data, setData] = useState([]);


useEffect(
  ()=>{  
    
    var config = {
    method: 'get',
    url: 'http://localhost:5000/usercourse',
    headers: {
      'Authorization': 'Bearer '+sessionStorage.getItem("token")
    }
    };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
},[])

  return (
    <div className="sliderComponent row mx-auto p-4">
      {Data.map((data,index) => {
        return <MyCourseCard key={index} course={data} />
      }
      )}
      <AddCard />
    </div>
  );
};

export default MyCourse;
