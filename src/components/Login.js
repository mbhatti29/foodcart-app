import React from 'react'

const Login = ({ closeNav, route, login }) => {
  return (
    <div className="right-nav" id="login">
      <form>

        {/* x out button div*/}
        <div className="close-container" onClick={() => closeNav("login")}>
          <div className="leftright"></div>
          <div className="rightleft"></div>
          <label className="close"></label>
        </div>


        <div className='signInDiv'>

          <div>
            <h1>Login</h1>
          </div>

          <div className='signInForm' >
            <label htmlFor='email'></label>
            <input placeholder="User Name" type='text' name='email' id='email' autoComplete="on" />
            <br />
            <label className='password' htmlFor='password'></label>
            <input placeholder="Password" type='password' name='password' id='password' autoComplete="on" />
            <div className="submitBtn">
              <button>Submit</button>
            </div>
          </div>

        </div>

        <div>
          <p onClick={route} className='register'>Register</p>
        </div>

      </form>

    </div>
  )
}


export default Login;