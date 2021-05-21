import React from 'react';
import './App.css';
import data from './sample/data.json';
import Tasks from './components/tasks';
import TaskForm from './components/TaskForm';

class App extends React.Component {

  state = {
    data: data
  }

  render () {
    return (
      <div>
        <TaskForm />
        <Tasks tasks={this.state.data} />
      </div>
    )
  }
}

export default App;
