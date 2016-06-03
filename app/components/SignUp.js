import React from 'react';
import { Jumbotron, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import { home } from '../stylesheets/style';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			value: ''
		};
	}
	handleChange(e) {
		this.setState({ value: e.target.value})
	}
  render() {
    return (
    	<div className="home" style={home}>
	    	<Jumbotron>
	      <h1>TravelApp</h1>
	      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sem nunc, scelerisque nec quam quis, fermentum suscipit orci.</p> 
	      </Jumbotron>
	      <form>
	      	<FormGroup> 
	      		<label className="sr-only">Username</label>
	      		<input className='formControl' placeholder="Username" />
	      	</FormGroup>
	      	<FormGroup>
	      		<label className="sr-only">Password</label>
	      		<input className='formControl' placeholder="Password" />
	      	</FormGroup>
	      	<button type="submit" className="btn btn-primary">Sign In</button>
	      	<button type="button" className="btn">Create Account</button>
	      </form>
      </div>
    );
  }
}