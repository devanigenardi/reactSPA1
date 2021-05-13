import React from 'react';
import './App.css';

class Cards extends React.Component {

  state = {
    'show': true
  }

  toggleState = () => this.setState({show: !this.state.show})

  render(){
    if(this.state.show === true){
      return (
        <div id="hello">
          <h2>{this.props.userHeadline}</h2>
          <p>{this.props.userInfo}</p>
          <button onClick={this.toggleState}>Hide content</button>
        </div>
      )
    } else {
      return (
        <h1>No hay elementos <button onClick={this.toggleState}>Show content</button></h1>
      )
    }
  }
}

function App() {
  return (
    <div id="card">
      <Cards userHeadline="User 1" userInfo="lorem 1"/>
      <Cards userHeadline="User 2" userInfo="lorem 2"/>
      <Cards userHeadline="User 3" userInfo="loerm 3"/>
    </div>
  );
}

export default App;
