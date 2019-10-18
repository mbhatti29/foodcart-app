import React from 'react'

const Login = ({ closeNav }) => {
  return (
    <div className="right-nav" id="login">

      <form>
        <div class="close-container" onClick={() => closeNav("login")}>
          <div class="leftright"></div>
          <div class="rightleft"></div>
          <label class="close"></label>
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
            <div class="submitBtn">
              <button>Submit</button>
            </div>
          </div>

        </div>

        <div>
          <p className='register'>Register</p>
        </div>

      </form>

    </div>
  )
}


export default Login;