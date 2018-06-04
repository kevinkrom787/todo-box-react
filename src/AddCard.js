import React, {Component} from 'react';

class AddCard extends Component {
  constructor() {
    super()
    this.state = {
      userInputTitle: '',
      userInputBody: ''
    }
    this.addTitle = this.addTitle.bind(this);
  }

  addTitle(event) {
    this.setState({
      userInputTitle: event.target.value,
    })
  }

  addBody(event) {
    this.setState({
      userInputBody: event.target.vale
    })
  }



  render() {
    return(
      <form className="submitForm" onClick={(event) => event.preventDefault()}>
        <input
        className="titleInput"
        name='title'
        placeholder="Title"
        type="text"
        value={this.state.userInputTitle}
        onChange={this.addTitle}
        />
        <input 
        className='bodyInput'
        placeholder='Body'
        type='text'
        value={this.state.userInputBody}
        onChange={this.addBody}
        />
        <button> Submit Idea </button> 

      </form> 
    )
  }

}

export default AddCard;