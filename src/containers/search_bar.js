import React, { Component } from 'react';
import { format } from 'util';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
        };
        
        // bind the function to 'this' or you can use fat arrow on onInputChange to always point to component's 'this'
		this.onInputChange = this.onInputChange.bind(this); 
	}

	onInputChange(event) {
		this.setState({
			term: event.target.value
		});
    }
    
	onFormSubmit(event) {
        // preventdefault will prevent it from "submit" hence won't refresh the page
		event.preventDefault();
	}

	render() {
		return (
            // html form element will try to submit when pressed 'enter' in any children elements as well.
			<form className="input-group" onSubmit={this.onFormSubmit}>
				<input
					type="text"
					placeholder="Get a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">
						Submit
					</button>
				</span>
			</form>
		);
	}
}

export default SearchBar;
