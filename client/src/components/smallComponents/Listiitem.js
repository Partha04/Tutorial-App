import React from 'react';
const Listiitem = ({ content, setDetail}) => {
  
    return (
        <div>
             <li className="list-group-item p-2 my-1 ">
             <button
              className=" btn bg-transparent text-secondary px-3 py-2 text-capitalize mx-auto"
              onClick={()=>{setDetail(content)}}            >
              {content.name}
            </button>
          </li>
        </div>
    );
}

export default Listiitem;
