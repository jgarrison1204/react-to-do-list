import React from 'react';
// Stateless functional component for rendering. The styles in this component are changed by onClick events which passes in props from the app which toggles the status property on the itemToAdd object in the handleSubmit function in the App component. 
function ListItem(props) {
	let completed = props.item.status;
	return (
		<li className='list-group-item col-12 col-sm-6 offset-sm-3 justify-end reset' 
			style={completed ? {'backgroundColor':' #eaeaea'} : null }>
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