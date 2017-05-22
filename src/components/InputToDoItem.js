import React, {Component} from 'react';

class InputToDoItem extends Component {
	constructor(props) {
		super(props);
		console.log(props)
		this.state = {
	 		userinput: ''
		}
		// Explicitly bind this to the handlers functions.
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmitPreventDefault = this.handleSubmitPreventDefault.bind(this); 
	}

	handleChange(event) {
		this.setState({
			userinput: event.target.value
		})
	};

	handleSubmitPreventDefault(event) {
		event.preventDefault();
		this.props.handleSubmit(this.state.userinput);
		this.setState({
	 		userinput: ''
		})
	}

	render() {
		return(
			<div className='row centering'>
				<form className='input-space col-12 col-sm-6 offset-sm-3 input-group' onSubmit={this.handleSubmitPreventDefault}>
		   			<label htmlFor="add-to-do"></label>
		   			<input
						className='form-control'
						id='add-to-do'
						value={this.state.userinput} 
						onChange={this.handleChange}
						type="text"
						placeholder={this.props.itemEntered.length ? null : 'Enter item here' }
		   			/>
		   			<span className="input-group-btn">
			  			<button 
				 			className='btn btn-primary' 
				 			type='submit'
				 			disabled={!this.state.userinput}>
			  			Submit</button>
		   			</span>
		 		</form>
			</div>
		)
	}
}

export default InputToDoItem;