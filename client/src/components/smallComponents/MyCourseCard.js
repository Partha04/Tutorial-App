import React from 'react'
import { useHistory } from 'react-router';

const MyCourseCard =({course,setcoursecontent})=>{
  const history = useHistory();
  const gotoTutorial=()=>{
    setcoursecontent(course);
    history.push("/course")
  }
  return(
      <div className="MyCourseCard col-md-3 my-3">
        <div className="card">
          <img className="card-img-top" src={course.img} alt="a"/>
          <div className="card-body">
            <h5 className="card-title">{course.title}<span className="badge badge-primary ">2</span></h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptate.</p>
          </div>
          <button className="btn btn-outline-success m-2 text-black-50" onClick={gotoTutorial} >Go to course</button>
        </div>
      </div>
    )
}

export default MyCourseCard;