import React, { useEffect, useState } from "react";
import Listitem from "./smallComponents/Listiitem";
import Tab from "./smallComponents/Tab";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Course = () => {
  const location = useLocation();
  const courseid = location.state.courseid;
  const [data, setdata] = useState([]);
  const [topicdata, settopicdata] = useState([]);


  useEffect(
    () => {

      var config = {
        method: 'get',
        url: 'http://localhost:5000/lession/'+courseid,
        headers: {
          'Authorization': 'Bearer '+sessionStorage.getItem('token')
        }
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setdata(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, [])

    const gettopics=(lessionid)=>
    {

      var config = {
        method: 'get',
        url: 'http://localhost:5000/topic/'+lessionid,
        headers: { 
          'Authorization': 'Bearer '+sessionStorage.getItem('token')
        }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        settopicdata(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }



  return (
    <div className="row p-1 mx-0 my-2 h-100">
      <div className="col-md-2 h-100 border rounded p-1 bg-primary">
        <h5 className="text-white mx-3 my-1">{ }</h5>
        <ul className="list-group mx-auto ">
          {data.map((content, index) => {
            return (
              <Listitem
                key={index}
                lessionname={content.lessionname}
                lessionid={content.lessionid}
                index={content.lessionid}
                gettopics={gettopics}
              />
            );
          })}
        </ul>
      </div> 


      <div className="col-md-9 h-100">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="a">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="a">Library</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {/* {detail.name} */}
            </li>
          </ol>
        </nav>
        {
          topicdata.map((content,index)=>{
           return <Tab content={content} key={index}/>
          })
        }
      </div>
    </div>
  );
};

export default Course;
