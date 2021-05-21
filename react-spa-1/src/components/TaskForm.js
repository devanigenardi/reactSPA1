import React, { Component } from 'react';
import './TaskForm.css'

 class TaskForm extends Component {

    onSubmit = e => {
        console.log(e);
        e.preventDefault();
    }

    onChange = e => {
        console.log(e.target.value)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="form">
                <input type="text" placeholder="lorem" onChange={this.onChange} />
                <br />
                <textarea placeholder="lorem ipsum" onChange={this.onChange} />
                <br />
                <button type="submit">Send the task</button>
                <br /><br />
            </form>
        )
    }
}

export default TaskForm;
