import React, { useEffect, useState } from "react";
import axios from 'axios'
const Tab = ({content}) => {
  const [Collapse, setCollapse] = useState(
    "table table-striped w-100 h-0 mx-auto coll"
  );

  const toggleColapse = () => {
      if(Collapse==="table table-striped w-100 h-0 mx-auto coll")
      {
          setCollapse("table table-striped w-100 mx-auto exp")
      }
      else{
          setCollapse("table table-striped w-100 h-0 mx-auto coll")
        }
  };
  const[learndata,setlearndata]=useState([])
  const[practicedata,setpracticedata]=useState([])
    console.log(content.topicid);
  useEffect(()=>{

    
var config1 = {
  method: 'get',
  url: 'http://localhost:5000/learn/'+content.topicid,
  headers: {
    'Authorization': 'Bearer '+sessionStorage.getItem('token')
   }
};

axios(config1)
.then(function (response) {
  setlearndata(response.data)
})
.catch(function (error) {
  console.log(error);
});
var config2 = {
  method: 'get',
  url: 'http://localhost:5000/practice/'+content.topicid,
  headers: {
    'Authorization': 'Bearer '+sessionStorage.getItem('token')
   }
};

axios(config2)
.then(function (response) {
  setpracticedata(response.data)
})
.catch(function (error) {
  console.log(error);
});


  },[])










  return (
    <div>
      <div className="tutorial border rounded bg-light w-75 my-1 p-2 mx-auto">
        <div className="mx-1 d-flex justify-content-between align-items-center">
          <h6>{content.topicname}</h6>
          <button className="btn bg-transparent  p-1 m-0" onClick={toggleColapse} >
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-card-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path fill-rule="evenodd" d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
  <circle cx="3.5" cy="5.5" r=".5"/>
  <circle cx="3.5" cy="8" r=".5"/>
  <circle cx="3.5" cy="10.5" r=".5"/>
</svg>
          </button>
        </div>


        <table className={Collapse}>

          <thead className="bg-secondary text-white">
            <tr>
              <td className="w-50">Learn</td>
              <td className="w-25">Type</td>
              <td className="w-25">Completed</td>
            </tr>
          </thead>

          <tbody>
          
         {learndata.map((d)=>{ return  <tr>
              <td className="w-50"><a href={d.link} target="_blank">{d.link}</a></td>
              <td className="w-25">{d.type}</td>
              <td className="w-25">
                <input className="checkbox"  value={d.completed} type="checkbox" name="" id="" />
              </td>
            </tr>

          })}

            </tbody>
        </table>
        <table className={Collapse}>

          <thead className="bg-success text-white">
            <tr>
              <td className="w-50">Practice</td>
              <td className="w-25">Source</td>
              <td className="w-25">Completed</td>
            </tr>

          </thead>
          <tbody>
            {practicedata.map((d)=>{

             return <tr>
              <td className="w-50"> <a href={d.link} target="_blank">{d.link}</a></td>
            <td className="w-25">{d.source}</td>
              <td className="w-25">
                <input className="checkbox " type="checkbox" name="" id="" />
              </td>
            </tr>
            })}
            </tbody>
        </table>
    
    
      </div>
    
    </div>
  );
};

export default Tab;
