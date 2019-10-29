import React, { Component } from 'react'

class Register extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: '',
       password: '',
       name: ''
    }
  }
  
  onNameChange = (event) => {
    this.setState({ name: event.target.value })
  }
  onEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  onSubmitSigIn = () => {

    fetch('http://localhost:3001/login', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    })
    .then(res => res.json())
    .then(user => {
      if (user.id) {
        this.props.loadUser(user)
        this.props.onRouteChange('home')
      }
    })
  }

  render() {
    return (
      <div className="right-nav" id="login">

      <form>
        <div class="close-container" onClick={() => this.props.closeNav("login")}>
          <div class="leftright"></div>
          <div class="rightleft"></div>
          <label class="close"></label>
        </div>

        <div className='signInDiv'>

          <div>
            <h1>Register</h1>
          </div>

          <div className='signInForm' >
            <label htmlFor='username'></label>
            <input placeholder="User Name" type='text' name='username' id='username' autoComplete="on" />
            <br />

            <label htmlFor='email'></label>
            <input placeholder="Email" type='email' name='email' id='email' autoComplete="on" required/>
            <br />

            <label className='password' htmlFor='password'></label>
            <input placeholder="Password" type='password' name='password' id='password' autoComplete="on" />
            <div class="submitBtn">
              <button>Submit</button>
            </div>
          </div>

        </div>

        <div>
          <p onClick={this.props.route} className='register'>Already Registered?</p>
        </div>

      </form>

    </div>
    )
  }
}

export default Register;