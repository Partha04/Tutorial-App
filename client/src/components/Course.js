import React, { useEffect, useState } from "react";
import Listitem from "./smallComponents/Listiitem";
import Tab from "./smallComponents/Tab";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

const Course = () => {
  const location = useLocation();
  const course = location.state.course;
  console.log(course);
  const courseid = course.courseid;
  const [data, setdata] = useState([]);
  const [topicdata, settopicdata] = useState([]);

  useEffect(() => {
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
  }, []);

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
        setlessioname(lessionname);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="row p-1 mx-0 my-2 h-100">
      <div className="col-md-2 h-100 border rounded p-1 bg-primary">
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
              <Link to="/mycourse">Mycourse</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {lessionname}
            </li>
          </ol>
        </nav>

        {topicdata.length===0? (
          <div>
            {" "}
            <img className="col-md-10" src={course.imgurl} alt="a"/>
            <h3 className="col-md-10" >{course.coursedescription}</h3>
          </div>
        ) : (
          topicdata.map((content, index) => {
            return <Tab key={index} content={content} />;
          })
        )}
      </div>
    </div>
  );
};

export default Course;
