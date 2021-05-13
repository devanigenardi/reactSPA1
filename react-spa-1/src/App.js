import React from 'react';
import './App.css';
import data from './sample/data.json';
console.log(data)

class App extends React.Component {

  state = {
    data: data
  }

  render () {
    return (
      <div>
        { this.state.data.map((e) => 
          <div key={e.name}>
            <h1>{e.name}</h1>
            <p>{e.age}</p>
            <a href={e.url}>{e.phone}</a> 
          </div>)
        } 
      </div>
    )
  }
}

export default App;
