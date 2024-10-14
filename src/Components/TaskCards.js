import React from "react";

function TaskCards(props) {
    const handleDelete = (title) => {
        // Filter out the task to be deleted
        const updatedTasks = props.data.filter((task) => task.title !== title);
        props.setData(updatedTasks); // Update the state with the new task array
        props.showAlert('danger','Task Deleted');
    };

    const handleCompleted=(title)=>{
        const updatedTasks=props.data.filter((task)=>task.title!==title);
        props.setData(updatedTasks);
        props.setCompleted([...props.completed,{title}]);
        props.showAlert('success','Task marked as done!');
    }

    return (
        <div className="card text-start w-100 mb-3">
            <div className="row g-3">
                <div className="col">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5> {/* Display the task title */}
                    </div>
                </div>
                <div className="col d-flex justify-content-end">
                    <button type="button" className="btn btn-success m-2" onClick={()=>handleCompleted(props.title)}>
                        Done ☑️
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-danger m-2" 
                        onClick={() => handleDelete(props.title)} // Call handleDelete with the task title
                    >
                        Delete 🚫
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TaskCards;
