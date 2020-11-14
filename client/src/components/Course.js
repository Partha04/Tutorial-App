import React, { useState } from "react";
import Listitem from "./smallComponents/Listiitem";
import Tab from "./smallComponents/Tab";

const Course = ({ coursecontent }) => {
  const [detail, setDetail] = useState(coursecontent.content[0]);
  console.log(detail);
  return (
    <div className="row p-1 mx-0 my-2 h-100">
      <div className="col-md-2 h-100 border rounded p-1 bg-primary">
        <h5 className="text-white mx-3 my-1">{}</h5>
        <ul className="list-group mx-auto ">
          {coursecontent.content.map((content, index) => {
            return (
              <Listitem
                key={index}
                content={content}
                index={index}
                setDetail={setDetail}
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
              {detail.name}
            </li>
          </ol>
        </nav>
        <Tab detail={detail}/>
      </div>
    </div>
  );
};

export default Course;
