import React, { Component } from 'react';
import './App.css';
class Testing extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  name: '',
		  greeting: ''
		};
		this.handleChange=(event)=>{
			this.setState({ name: event.target.value });
		}
		this.handleSubmit=(event)=>{
			event.preventDefault();
			fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
			  .then(response => response.json())
			  .then(state => this.setState(state));
		}
	}
	render() {
		return (
			<div className="App">
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">Enter your name: </label>
					<input
					  id="name"
					  type="text"					  
					  onChange={this.handleChange}
					/>
					<button type="submit">Submit</button>
				</form>
				<div>
					{this.state.name}
				</div>	
			</div>
		);
	}
}
export default Testing;