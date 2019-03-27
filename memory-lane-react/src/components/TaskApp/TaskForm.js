import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }

    // grab the data from the input
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        // console.log(event.target.name);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTask(this.state.task)
        // console.log(this.state.task);
    }

    render() {
// console.log(this.state);
        // set variables to arrow functiont to create HTML components
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="task" className="taskInput" value={this.state.taks} onChange={this.handleChange} />
                    <input type="submit" value="Add Task" />
                </form>
            </div>
        )
    }
}
export default TaskForm