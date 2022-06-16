import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],

    };
  }

  //fetching dtata from api call
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((tree) => this.setState(() => {
        return { monster: tree }
      },
        () => {
          console.log(this.state);
        }))

  }
  render() {
    return (
      <div className="App">


        <input className='insert' type='search' placeholder='Search-Monsters' 
        onChange={(event) => {
          console.log(event.target.value);
         // const searchstring = event.target.value.toLocaleLowerCase();
          const filterarray = this.state.monster.filter((monsters) => {
            return monsters.name.toLocaleLowerCase().includes(event.target.value);
          })
          this.setState(() => {
            return { monster: filterarray }
          });
        }} />



        {this.state.monster.map((monsters) => {
          return <h1 key={monsters.id}>{monsters.name}</h1>
        })}
        {/* // keys are used for uniqueness */}

      </div>
    )
  }
}
// order of  running is -----constructor-> render->componentDidmount->render
export default App;
