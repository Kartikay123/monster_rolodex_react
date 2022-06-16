import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component
{
  constructor(){
    super();
    this.state={
      name:{firstname:'k1',
      secondname: 'Ram'
    },
      company:'IBM'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello kartik and {this.state.name.firstname}.You Both work at {this.state.company};

          </p>
         <button onClick={()=>
         {this.setState(
           ()=>{
             return {
              name:{firstname:'change',secondname:'no'},
             };
             // 2 bar () {}karo setback callback ke liye
           },()=>{
             console.log(this.state);
             //modified value print hogi name ki console me 
           }
            
         );
         }}>         
           Click Here
         </button>
        </header>
      </div>
    )
  }
}

export default App;
