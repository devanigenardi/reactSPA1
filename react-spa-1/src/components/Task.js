import React, { Component } from 'react';

import "./task.css"

class Task extends React.Component {
  
    render () {

        const {task} = this.props;
      
        return <div className="red">
                <p key={task.name}> {task.name} - {task.age}  - {task.phone}</p> 
                <input type="checkbox" />
                <button>X</button>
            </div>
        }
    }
  
export default Task;