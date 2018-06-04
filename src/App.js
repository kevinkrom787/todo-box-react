import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddCard from './AddCard';
import CardList from './CardList';
import Search from './Search'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInputTitle: '',
      userInputBody: ''
    }
  }

  setCardState() {
    this.setState({
      userInputTitle: {}
    })
  }
  render() {
    return (
      <div className="App">
        <h2> ideaBox </h2> 
        <AddCard />
        <Search />
        <CardList />
      </div>
    );
  }
}

export default App;
