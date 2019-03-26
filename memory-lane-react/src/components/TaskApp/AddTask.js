import React from 'react';
import './AddTask.css';

const AddTask = (props) => {
    // set any varrables

    return (
        <div className="addTasks">
            <span className="addItem"><i className="fas fa-angle-down"></i></span>
            <h3 className="addItem">What Needs to be done</h3>
        </div>
    )
}

export default AddTask;