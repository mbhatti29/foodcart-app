import React, { Component } from 'react'

class Login extends Component {
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

  onSubmitSignIn = (event) => {
    event.preventDefault() 

    fetch('http://localhost:3001/login', {
        method: 'post',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        if (data.user) {
          this.props.loadUser(data)
          this.props.closeNav("login")
        }
      }) 
  }

  render() {
    return (
      <div className="right-nav" id="login">
      <form onSubmit={this.onSubmitSignIn}>

        {/* x out button div*/}
        <div className="close-container" onClick={() => this.props.closeNav("login")}>
          <div className="leftright"></div>
          <div className="rightleft"></div>
          <label className="close"></label>
        </div>

        <div className='signInDiv'>
          <div>
            <h1>Login</h1>
          </div>

          <div className='signInForm'>
            <label htmlFor='email'></label>
            <input placeholder="Email" type='text' name='email' id='email' autoComplete="on" onChange={this.onEventChange} />
            <br />
            <label className='password' htmlFor='password'></label>
            <input placeholder="Password" type='password' name='password' id='password' autoComplete="on" onChange={this.onEventChange}/>
            
            <div className="submitBtn">
              <button>Submit</button>
            </div>
          </div>

        </div>

        <div>
          <p onClick={this.props.route} className='register'>Register</p>
        </div>

      </form>

    </div>
    )
  }
}


export default Login;