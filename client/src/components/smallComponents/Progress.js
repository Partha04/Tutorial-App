import React from 'react';

const Progress = () => {
    return (
        <div className="Progress row align-items-center p-3 m-3 border border-dark rounded">
         <div className="col-md-2">
         <div className="row">Course Name</div>   
         <div className="row"><p>Start date :02/02/2020</p></div>   
        </div>   
        
        <div class="col-md-10 p-0 m-0  d-flex align-items-center h-100 rounded" style={{"width":"100%","height":"20px","border":"1px solid black"}}>
            <div className="bar text-center bg-success rounded" style={{"width":"50%"}}>
                50%
            </div>
        </div>

        </div>
    );
}

export default Progress;

