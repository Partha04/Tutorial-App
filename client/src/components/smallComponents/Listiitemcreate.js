import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


const Listitemcreate = ({lessionname,lessionid,gettopics,showdata}) => {
  
  const deleteLession=()=>{
    var config = {
        method: "delete",
        url: "http://localhost:5000/lession/" + lessionid,
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      };
  
      axios(config)
        .then(function (response) {
          toast("Lession deleted");
          showdata();
        })
        .catch(function (error) {
          console.log(error);
        });
  }


    return (
        <div>
             <li className="list-group-item my-1 mx-3 p-0 d-flex justify-content-between">
             <button
              className=" btn bg-transparent  text-secondary"
              onClick={()=>{gettopics(lessionid,lessionname)}}
              >
              {lessionname}
            </button>
            <button className="btn btn-danger" onClick={deleteLession}>
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-octagon-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>
            </button>
          </li>
        </div>
    );
}

export default Listitemcreate;
