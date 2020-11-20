import React, { useEffect, useState } from "react";
import Listitemcreate from "./smallComponents/Listiitemcreate";
import Tabcreate from "./smallComponents/Tabcreate";
import { useLocation, Link } from "react-router-dom";
import AddLession from './smallComponents/AddLession' 
import Addtopic from './smallComponents/Addtopic'
import axios from "axios";
import { toast } from "react-toastify";


const Create = (props) => {
  const location = useLocation();
  const courseid = location.state.courseid;
  const [data, setdata] = useState([]);
  const [topicdata, settopicdata] = useState([]);
  const showdata=()=>{
    var config = {
        method: "get",
        url: "http://localhost:5000/lession/" + courseid,
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      };
  
      axios(config)
        .then(function (response) {
          setdata(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  useEffect(() => {
    showdata()
  }, []);

  const [lessionid, setlessionid] = useState("");
  const [lessionname, setlessioname] = useState("");
  const gettopics = (lessionid, lessionname) => {
    var config = {
      method: "get",
      url: "http://localhost:5000/topic/" + lessionid,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    };

    axios(config)
      .then(function (response) {
        settopicdata(response.data);
        setlessionid(lessionid);
        setlessioname(lessionname);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const updatetopics = (lessionid) => {
    var config = {
      method: "get",
      url: "http://localhost:5000/topic/" + lessionid,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    };

    axios(config)
      .then(function (response) {
        settopicdata(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  return (
    <div className="row p-1 mx-0 my-2 h-100">
      <div className="col-md-3 h-100 border rounded p-1 bg-secondary ">
        <ul className="list-group mx-auto ">
          {data.map((content, index) => {
            return (
              <Listitemcreate
                key={index}
                lessionname={content.lessionname}
                lessionid={content.lessionid}
                index={content.lessionid}
                gettopics={gettopics}
                showdata={showdata}              />
            );
          })}
        </ul>
          <AddLession courseid={location.state.courseid} showdata={showdata}/>
      </div>

      <div className="col-md-9 h-100">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/mycourse">Mycourse</Link>
            </li >
            <li className="breadcrumb-item active" aria-current="page">
              {lessionname}
            </li>
          </ol>
        </nav>
        {topicdata.map((content, index) => {
          return <Tabcreate key={index} content={content} updatetopics={updatetopics} lessionid={lessionid} />;
        })}

        
        <div>
        {lessionid===""?<div>Select Lession</div>:
        <Addtopic lessionid={lessionid}  updatetopics={updatetopics}/>
         }
        </div>
      </div>
    </div>
  );
};

export default Create;
