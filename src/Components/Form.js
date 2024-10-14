import React, { useState } from "react";




function Form(props) {

  const [task,setTask]=useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      props.setData([...props.data, {title:task}]); // Append the new task to the array
      setTask(""); // Clear the textarea after adding
    }
  };

  const handleChange=(event)=>{
    setTask(event.target.value);
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label mt-5">
          <h4>Add task</h4>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="1"
          value={task}
          onChange={handleChange}
          style={{resize:'none'}}
        ></textarea>
        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-dark my-3" onClick={()=>addTask(props)}>
            Add
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default Form;
