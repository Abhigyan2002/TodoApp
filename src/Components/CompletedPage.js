import React from "react";
import CompletedCards from "./CompletedCards";

function CompletedPage(props) {
  const deleteTasks = () => {
    props.setCompleted([]);
  };

  return (
    <div className="container">
      {props.completed?.length > 0 ? (
        props.completed.map((task) => <CompletedCards title={task.title} />)
      ) : (
        <p>No completed tasks yet.</p>
      )}
      <div className="d-flex justify-content-center">
        <button type="button" class="btn btn-dark" onClick={deleteTasks}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default CompletedPage;
