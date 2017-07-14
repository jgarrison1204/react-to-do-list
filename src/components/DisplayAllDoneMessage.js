import React from 'react';

function DisplayAllDoneMessage() {
	return (
		<div
			style={
				{'textAlign': 'center',
				'fontFamily': 'Amatic SC, cursive'}
			}
			className='animated fadeIn'>
			<h1>All done, time for an umberlla drink.</h1>
			<img className='img-fluid' src={require('../images/umbrella-drink.png')} alt='umberla drink'/>
		</div>
	)
}

export default DisplayAllDoneMessage;