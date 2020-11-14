import React from "react";
import MyCourseCard from "./smallComponents/MyCourseCard";
import Courses from './data/data.json'
import AddCard from "./smallComponents/Addcard";
const MyCourse = ({setcoursecontent}) => {

  const Data=Courses.data;
  return (
    <div className="sliderComponent row mx-auto p-4">
      {Data.map(data=>{ 
        return  <MyCourseCard course={data} setcoursecontent={setcoursecontent}/>
      }
      )}
      <AddCard/>
    </div>
  );
};

export default MyCourse;
