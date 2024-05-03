import React from 'react';

const Commondfile = (props) => {
  return (
    <>
      {/*-------------------------------- HOME PAGE Ring images -------------------------*/}
      {/*-------------------------------- HOME PAGE Ring images -------------------------*/}
      <div className="Ring-image-in-font-page">
        <div  style={props.style} >
          <div className="div-of-ring" >
            <h3  style={props.styledata}>{props.name}</h3>
            <span style={props.stylespna}>{props.description}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Commondfile;
