import React, { Component } from 'react';
import InputToDoItem from './InputToDoItem';
import '../styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(item) {
  	// Pass in item from user input and set completed status to false
    const itemToAdd = {item: item, status: false};
    // Set variable to current todo list. Could also use prevState here. I think...
    const currentToDoList = this.state.toDoList;
    // Use concat here instead of push because need we don't want to mutate the array. Concat returns new array.
    const addItemToList = currentToDoList.concat(itemToAdd);
    this.setState({
        toDoList: addItemToList
    })
  }

  render() {
  	// Create new array with user input as array to render to DOM.
    const arrToDisplay = this.state.toDoList.map((toDoItem, i) => {
    	return toDoItem.item;
    })
    return (
      <div>
        <InputToDoItem 
          handleSubmit={this.handleSubmit}/>
        <ul className='list-group'>
          {arrToDisplay}
        </ul>
      </div>
    );
  }
}

export default App;
