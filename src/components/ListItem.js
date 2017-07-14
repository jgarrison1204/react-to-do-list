import React from 'react';
// Stateless functional component for rendering. The styles in this component are changed by onClick events which passes in props from the app which toggles the status property on the itemToAdd object in the handleSubmit function in the App component. 
function ListItem(props) {
	// creates variable to store the boolean value if the item is completed or not
	let completed = props.item.status;
	// creates variable to store boolean value if show completed items is toggled
	let showCompleted = props.toggleCompleted;
	// creates variable to store object or null to style the list item elements.  
	let toggleStyles;
	// sets the value of styles for list item element depending on if the item is marked as complete and if the end user wants to see all completed items.  Have to use if statements outside of JSX because see react tips... https://react-cn.github.io/react/tips/if-else-in-JSX.html
	if (completed && !showCompleted) {
		toggleStyles = {'display':'none'};
	} else if (completed) {
		toggleStyles = {'backgroundColor':'lightgrey'};
	} else {
		toggleStyles = null;
	}
	return (
		<li className='list-group-item col-12 col-sm-6 offset-sm-3 justify-end reset'
			style={toggleStyles}>
			<span 
				className='offset resize' 
				style={completed ? {'textDecoration': 'line-through'} : null}>
				{props.item.item}
			</span>
			<div 
				className='resize-container d-flex justify-content-center'>
				<span className='offset-complete-icon d-flex align-items-center' onClick={props.markAsCompleted}>
					<i className="complete fa fa-check-square fa-2x" aria-hidden="true"></i>  
				</span>
				<span className='d-flex align-items-center' onClick={props.deleteItem}>
					<i className="delete fa fa-minus-square fa-2x"></i>
				</span>
			</div>
		</li>
	);
}

export default ListItem;