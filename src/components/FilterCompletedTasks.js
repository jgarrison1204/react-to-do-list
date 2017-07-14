import React from 'react';

function FilterCompletedTasks(props) {
	return (
		<div 
			className='centering-check-box animated fadeInDown'
			style={{'margin': '.5%'}}>
			<label 
				htmlFor='to-do-tasks'
				style={{'margin':'0'}}
			>Show Items Left To Do:</label>
			<div
				style={{'margin-top' : '3px'}}>
				<input id='to-do-tasks' type="checkbox" onClick={props.handleFilter}/>
			</div>
		</div>
	);
}

export default FilterCompletedTasks;