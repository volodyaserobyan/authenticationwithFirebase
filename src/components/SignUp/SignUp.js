import React from 'react'
import * as ROUTES from '../constants/Routes'
import { Link, withRouter } from 'react-router-dom'
import { withFirebase } from '../Firebase'
import { compose } from 'recompose';

const SignUp = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <SignUpForm />
    </div>
  )
}


const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = e => {
    e.preventDefault()

    const { username, email, passwordOne } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        console.log(authUser)
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  onChange = e => {
    const name = e.target.name
    const value = e.target.value

    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={this.state.username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
          required
        />
        <input
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
          required
        />
        <input
          name="passwordOne"
          value={this.state.passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
          required
        />
        <input
          name="passwordTwo"
          value={this.state.passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
          required
        />
        <input type="submit" value="Sign Up" />

        {this.state.error && <p>{this.state.error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase)

export default SignUp

export { SignUpForm, SignUpLink }