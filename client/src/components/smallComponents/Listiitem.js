import React from 'react';
const Listiitem = ({lessionname,lessionid,gettopics}) => {
  
    return (
        <div>
             <li className="list-group-item p-2 my-1 ">
             <button
              className=" btn bg-transparent text-secondary px-3 py-2 text-capitalize mx-auto"
              onClick={()=>{gettopics(lessionid,lessionname)}}
              >
              {lessionname}
            </button>
          </li>
        </div>
    );
}

export default Listiitem;
