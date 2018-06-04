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
      userInput: []
    }
    this.appendToPage = this.appendToPage.bind(this);
  }

  setCardState() {
    this.setState({
      userInputTitle: {}
    })
  }

  appendToPage(userInput) {
    
  }
  render(props) {
    return (
      <div className="App">
        <h2> ideaBox </h2> 
        <AddCard 
        appendToPage={this.appendToPage}
        />
        <Search />
        <CardList
        
        />
      </div>
    );
  }
}

export default App;
