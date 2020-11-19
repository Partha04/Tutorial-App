import React,{useState} from 'react';

import axios from 'axios';
import { toast } from 'react-toastify';

export default function AddLession({courseid,showdata}) {

    const [lession, setLession] = useState("");

    const AddLesssion = () => {
      if(lession==="")
      {
        toast.warning("Lession Name Empty!!!");
        return;
      }

      var data = {
        courseid: courseid,
        lessionname: lession,
      };
      console.log(data);
      var config = {
        method: "post",
        url: "http://localhost:5000/lession",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
        data: data,
      };
  
      axios(config)
        .then(function (response) {
          toast.success("Lession Added")
          showdata();
          setLession("");
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    return (
            <div class="form-group bg-primary p-2">
              <input
                type="text"
                class="form-control"
                placeholder="Add lession"

                value={lession}

                onChange={(e) => {setLession(e.target.value)}}
              />
              <button className="btn btn-dark w-100" onClick={AddLesssion}>
                Add lession
              </button>
            </div>
    )
}
