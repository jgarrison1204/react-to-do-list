import React from 'react';

function ListItem(props) {
	return (
		<li className='list-group-item col-12 col-sm-6 offset-sm-3 justify-end reset' 
				style={props.item.status ? {'backgroundColor':' #90EE90'} : null}>
			<span className='offset resize'>{props.item.item}</span>
			<div className='resize-container centering'>
				<span className='offset-complete-icon' onClick={props.markAsCompleted}>
					<i className="complete fa fa-check-square fa-2x" aria-hidden="true"></i>  
				</span>
				<span onClick={props.deleteItem}>
					<i className="delete fa fa-minus-square fa-2x"></i>
				</span>
			</div>
		</li>
	)
}

export default ListItem;