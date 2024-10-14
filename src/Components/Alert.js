import React from "react";

function Alert(props) {
  return (
    
      <div className={`alert alert-${props.type} w-100`} role="alert">
        {props.title}
      </div>
    
  );
}

export default Alert;
