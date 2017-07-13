import React, {Component} from 'react';

class InputToDoItem extends Component {
	constructor(props) {
		super(props);
		// Explicitly bind this to the handlers functions.
		this.handleSubmitPreventDefault = this.handleSubmitPreventDefault.bind(this); 
	}

	handleSubmitPreventDefault(event) {
		event.preventDefault();
		this.props.handleSubmit(this.props.userInput);
	}
	// Creates the input with bootstrap styling. 
	render() {
		return(
			<div className='row centering'>
				<form className='input-space col-12 col-sm-6 offset-sm-3 input-group' onSubmit={this.handleSubmitPreventDefault}>
					<label htmlFor="add-to-do"></label>
					<input
						className='form-control'
						id='add-to-do'
						value={this.props.userInput} 
						onChange={this.props.handleChange}
						type="text"
						placeholder={this.props.itemEntered.length ? null : 'Enter item here' }
					/>
					<span className="input-group-btn">
						<button 
							className='btn btn-primary' 
							type='submit'
							disabled={!this.props.userInput}>
						Submit</button>
					</span>
				</form>
			</div>
		);
	}
}

export default InputToDoItem;