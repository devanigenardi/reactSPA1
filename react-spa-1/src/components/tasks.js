import React, { Component }from 'react';

class Tasks extends React.Component {
  
    render () {
      return this.props.tasks.map(e => 
            <div>
                <p key={e.name}> {e.name} - {e.age}  - {e.phone}</p> 
            </div> )
    
        }
    }
  
export default Tasks;