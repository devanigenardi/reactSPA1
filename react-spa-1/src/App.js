import React from 'react';
import './App.css';
import data from './sample/data.json';
import Tasks from './components/tasks';

class App extends React.Component {

  state = {
    data: data
  }

  render () {
    return (
      <Tasks tasks={this.state.data} />
    )
  }
}

export default App;
