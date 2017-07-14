import React, { Component } from 'react';
import InputToDoItem from './InputToDoItem';
import ListItem from './ListItem';
import FilterCompletedTasks from './FilterCompletedTasks';
import DisplayAllDoneMessage from './DisplayAllDoneMessage';
import '../styles.css';

class App extends Component {
	constructor(props) {
		super(props);
		// User input will be added to the toDoList array on submit.
		this.state = {
			toDoList: [],
			userinput: '',
			displaycompleted: true
		};
		// binding the Component context to all of the handlers so setState is in the proper context to update.
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDeleteItem = this.handleDeleteItem.bind(this);
		this.handleCompleted = this.handleCompleted.bind(this);
		this.handleShowToDoLeftToComplete = this.handleShowToDoLeftToComplete.bind(this);
	}

	// on change in the input updates state.
	handleChange(event) {
		this.setState({
			userinput: event.target.value
		});
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
		});
	}

  	// creates a new array to update state to completed per item. onClick of complete on list item, the to do item will be passed into handleComplete. The item is bound props in arrToDisplay. If the parameter passed from the complete click equals item in the toDoList array then status is changed. This is similar to how handle delete works but uses filter to remove clicked item.
	handleCompleted(item) {
		const toggledItemList = this.state.toDoList.map( currentItem => {
			return currentItem.item === item.item ? {item: currentItem.item, status: !currentItem.status} : currentItem; 
		}); 
		this.setState({
			toDoList: toggledItemList
		});
	}
  
  	// creates a new array to update state to delete per item. 
	handleDeleteItem(item) {
		const deleteItemList = this.state.toDoList.filter( currentItem => {
			return currentItem.item === item.item ? false : currentItem.item; 
		});
		this.setState({
			toDoList: deleteItemList
		});
	}

	// inverse the value of boolean this.state.displaycomplete.
	handleShowToDoLeftToComplete() {
		let toogleDisplayCompleted = !this.state.displaycompleted;
		this.setState({
			displaycompleted: toogleDisplayCompleted
		});
	}

	render() {
		// Create new array with user input as items to render to DOM. Bind event handlers to each to list entered by the user.
		const todoItems = this.state.toDoList.map((toDoItem, i) => {
			return (
			    <ListItem
					key={toDoItem + i}
					item={toDoItem}
					deleteItem={this.handleDeleteItem.bind(null, toDoItem)}
					markAsCompleted={this.handleCompleted.bind(null, toDoItem)}
					toggleCompleted={this.state.displaycompleted}
				/>
			);
		});
		// returns a boolean value, true if all the the items on the todo list are marked as complete.
		let displayAllDone = this.state.toDoList.length === 0 ? false : this.state.toDoList.every(item => item.status === true);
		return (
			<div>
				<InputToDoItem
					handleChange={this.handleChange} 
					handleSubmit={this.handleSubmit}
					itemEntered={this.state.toDoList}
					userInput={this.state.userinput}/>
				{/* if user has entered an item on the to do list then the checkbox will render passing in an handler to allow toggling*/}
				{this.state.toDoList.length > 0 ? <FilterCompletedTasks handleFilter={this.handleShowToDoLeftToComplete} /> : null}
				{/*if all items in to do list are marked as complete and show completed items it checked then DisplayAllDoneMessage is render as a fun ending*/}
				{displayAllDone && !this.state.displaycompleted ? <DisplayAllDoneMessage /> : null}
				{/*returns an array of formatted to do items. This is the major purpose of this application*/}
				<ul className='list-group'>
					{todoItems}
				</ul>
			</div>
		);
	}
}

export default App;
