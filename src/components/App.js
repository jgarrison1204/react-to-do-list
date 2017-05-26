import React, { Component } from 'react';
import InputToDoItem from './InputToDoItem';
import ListItem from './ListItem';
import '../styles.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoList: [],
            userinput: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleCompleted = this.handleCompleted.bind(this);
    }

    handleChange(event) {
        this.setState({
            userinput: event.target.value
        })
    }

    handleSubmit(item) {
        // Pass in item from user input and set completed status to false
        const itemToAdd = {item: item, status: false};
        // Set variable to current todo list. Could also use prevState here. I think...
        const currentToDoList = this.state.toDoList;
        // Use concat here instead of push because need we don't want to mutate the array. Concat returns new array.
        const addItemToList = currentToDoList.concat(itemToAdd);
        this.setState({
            toDoList: addItemToList,
            userinput: ''
        })
    }
  
    handleCompleted(item) {
        const toggledItemList = this.state.toDoList.map( currentItem => {
            return currentItem.item === item.item ? {item: currentItem.item, status: !currentItem.status} : currentItem; 
        }); 
        this.setState({
            toDoList: toggledItemList
        })
    }
  
    handleDeleteItem(item) {
        const deleteItemList = this.state.toDoList.filter( currentItem => {
            return currentItem.item === item.item ? false : currentItem.item; 
        });
        this.setState({
            toDoList: deleteItemList
        });
    }

    render() {
        // Create new array with user input as array to render to DOM.
        const arrToDisplay = this.state.toDoList.map((toDoItem, i) => {
            return (
    	       <ListItem
                    key={toDoItem + i}
          		    item={toDoItem}
	          	    deleteItem={this.handleDeleteItem.bind(null, toDoItem)}
    	      	    markAsCompleted={this.handleCompleted.bind(null, toDoItem)}
           	    />
            )
        })
        return (
            <div>
                <InputToDoItem
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit}
                    itemEntered={this.state.toDoList}
                    userInput={this.state.userinput}/>
                <ul className='list-group'>
                    {arrToDisplay}
                </ul>
            </div>
        );
    }
}

export default App;
