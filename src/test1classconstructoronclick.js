import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component
{
  constructor(){
    super();
    this.state={
      name:'Hello Ram'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello kartik and {this.state.name}
          </p>
         <button onClick={()=>
         {this.setState({name:'Hello Ram change'})}}>
           Click Here
         </button>
        </header>
      </div>
    )
  }
}

export default App;
