import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component
{
  constructor(){
    super();
    this.state={
        monster:[],
        
    };
  }

  //fetching dtata from api call
  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      .then((tree)=> this.setState(()=>{
          return {monster:tree}
      },
      ()=>
      {
        console.log(this.state);
      }))

  }
  render() {
    return (
      <div className="App">
      {this.state.monster.map((monsters)=>{
          return <h1 key={monsters.id}>{monsters.name}</h1>
      })}
      {/* // keys are used for uniqueness */}
    
      </div>
    )
  }
}
// order of  running is -----constructor-> render->componentDidmount->render
export default App;
