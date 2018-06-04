import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddCard from './AddCard';

class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">
        <h2> ideaBox </h2> 
        <AddCard />

      </div>
    );
  }
}

export default App;
