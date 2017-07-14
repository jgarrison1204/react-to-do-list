import React from 'react';

function FilterCompletedTasks(props) {
	return (
		<div 
			className='centering-check-box animated fadeInDown'
			style={{'margin': '.5%'}}>
			{/*bootstrap 4 checkbox formatting applied*/}
			<label className="custom-control custom-checkbox">
				<input type="checkbox" className="custom-control-input pull-left" onClick={props.handleFilter}/>
				<span className="custom-control-indicator"></span>
				<span className="custom-control-description">Show Items Left To Complete</span>
			</label>
		</div>
	);
}

export default FilterCompletedTasks;