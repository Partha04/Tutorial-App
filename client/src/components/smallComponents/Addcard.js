import React from 'react'
import { useHistory } from 'react-router';

const AddCard =()=>{
  const history = useHistory();
  const gotoTutorial=()=>{
    history.push("/course")
  }
  return(
      <div className="AddCard col-md-3 my-3 h-100">
        <div className="card h-auto" >
          <button className="btn btn-outline-success d-flex align-items-center justify-content-center" onClick={gotoTutorial}>
            <h3>Add Tutorial</h3>
            <h1>+</h1>
          </button>
        </div>
      </div>
    )
}

export default AddCard;