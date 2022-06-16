import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component
{
  constructor(){
    super();
    this.state={
        monster:[
            {
                name: 'hero',
                id:1
            },
            {
                name: 'villian',
                id:2,
            },
            {
                name: 'Don',
                id:3
            },
            {
                name: 'Jacky',
                id:4
            }

        ],
    };
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

export default App;
