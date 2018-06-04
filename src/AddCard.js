import React, {Component} from 'react';

class AddCard extends Component {
  constructor(props) {
    super()
    this.state = {
      userInputTitle: '',
      userInputBody: ''
    }
    this.addTitle = this.addTitle.bind(this);
    this.addBody = this.addBody.bind(this);
  }

  addTitle(event) {
    this.setState({
      userInputTitle: event.target.value,
    })
  }

  addBody(event) {
    this.setState({
      userInputBody: event.target.value
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
        <button
          onClick={() => this.props.appendToPage(this.state.userInputBody)}
        > Submit Idea </button> 

      </form> 
    )
  }

}

export default AddCard;