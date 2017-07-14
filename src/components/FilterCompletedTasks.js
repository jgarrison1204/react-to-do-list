import React from 'react';

function FilterCompletedTasks(props) {
	return (
		<div 
			className='centering animated fadeInDown'
			style={{'margin': '.5%'}}>
			<label 
				htmlFor='to-do-tasks'
				style={{'margin':'0'}}
			>Show Items Left To Do:</label>
			<input id='to-do-tasks' type="checkbox" onClick={props.handleFilter}/>
		</div>
	);
}

export default FilterCompletedTasks;