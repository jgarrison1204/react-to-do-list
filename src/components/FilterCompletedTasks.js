import React from 'react';

function FilterCompletedTasks(props) {
	return (
		<div className='centering'>
			Items Left To Do: <input id='to-do-tasks' type="checkbox"/>
		</div>
	);
}

export default FilterCompletedTasks;