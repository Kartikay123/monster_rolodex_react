import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchfield: '',

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

    const filterarray = this.state.monster.filter((monsters) => {
      return monsters.name.toLocaleLowerCase().includes(this.state.searchfield);
    })
    return (
      <div className="App">


        <input className='insert' type='search' placeholder='Search-Monsters'
          onChange={(event) => {
            console.log(event.target.value);
             const searchfield = event.target.value.toLocaleLowerCase();
            
            
            this.setState(() => {
              return { searchfield }
            });
          }} />



        {filterarray.map((monsters) => {
          return <h1 key={monsters.id}>{monsters.name}</h1>
        })}
        {/* // keys are used for uniqueness */}

      </div>
    )
  }
}
// order of  running is -----constructor-> render->componentDidmount->render
export default App;
