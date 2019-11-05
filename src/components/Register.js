import React, { Component } from 'react'

class Register extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: '',
       password: '',
       username: ''
    }
  }
  

  onEventChange = (event) => {
    const inputValue = event.target.value;
    const stateField = event.target.name;

    this.setState({
      [stateField]: inputValue
    })
  }

  onSubmitSigIn = (event) => {
    event.preventDefault();

    fetch('http://localhost:3001/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        username: this.state.username
      })
    })
    .then(res => res.json())
    .then(user => {
      console.log(user)
      if (user.id) {
        this.props.loadUser(user)
        // this.props.onRouteChange('home')
      }
    })
  }

  render() {
    return (
      <div className="right-nav" id="login">

        <form onSubmit={this.onSubmitSigIn}>
        <div className="close-container" onClick={() => this.props.closeNav("login")}>
          <div className="leftright"></div>
          <div className="rightleft"></div>
          <label className="close"></label>
        </div>

        <div className='signInDiv'>

          <div>
            <h1>Register</h1>
          </div>

          <div className='signInForm' >
            <label htmlFor='username'></label>
            <input placeholder="User Name" type='text' name='username' id='username' autoComplete="on" onChange={this.onEventChange}/>
            <br />

            <label htmlFor='email'></label>
              <input placeholder="Email" type='email' name='email' id='email' autoComplete="on" onChange={this.onEventChange} required />
            <br />

            <label className='password' htmlFor='password'></label>
              <input placeholder="Password" type='password' name='password' id='password' onChange={this.onEventChange} />
            <div className="submitBtn">
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