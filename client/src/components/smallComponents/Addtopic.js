import React,{useState} from 'react';

import axios from 'axios';
import { toast } from 'react-toastify';

const Addtopic = ({ updatetopics,lessionid}) => {
    const [topic, settopic] = useState("");
    const [topicdescription, settopicdescription] = useState("");

    const addtopic = () => {
      if(topic==="")
      {
        toast.warning("topic Name Empty!!!");
        return;
      }

      var data = {
        lessionid: lessionid,
        topicname: topic,
        topicdescription: topicdescription
      };
      console.log(data);
      var config = {
        method: "post",
        url: "http://localhost:5000/topic",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
        data: data,
      };
  
      axios(config)
        .then(function (response) {
          toast.success("topic Added")
          updatetopics(lessionid);
          settopic("");
          settopicdescription("");
        })
        .catch(function (error) {
           console.log(error);
        });
    };
    return (
        <div class="form-group p-1 card bg-dark">
          <input type="text"
            class="form-control my-1" value={topic} onChange={(e)=>{settopic(e.target.value)}} placeholder="Topic Name"/>
            <div class="form-group">
          <textarea class="form-control my-1" id="Cd" placeholder="Topic Description" rows="2" maxLength="1000" value={topicdescription} onChange={(e) => {settopicdescription(e.target.value) }} ></textarea>
        </div>  
            <button className="btn btn-success mx-3" onClick={addtopic}>Add Topic</button>
        </div>
    );
}

export default Addtopic;
