import React from 'react'


const Header = ({searchRecipes, search, closeNav, openNav, openLogin, closeLogin, searchValue}) => {  
  return (
    <div>
      <header className="App-header">
        <h1>Food Cart</h1>
      </header>
      
      <div className='firstSection'>
        <form onSubmit={searchRecipes}>
          <input id='search' onChange={search} value={searchValue} type='text' placeholder='Search Recipe'/>
        </form>
      </div>

      <div id="mySidenav" className="sidenav">
        <div className="avatar"></div>
          <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
      </div>
      
      <span className="menu" style={{fontSize:"30px", cursor:"pointer", position:'relative'}} onClick={openNav}>&#9776;</span>
      
      <div className="right-nav" id="login">

        <form>
          <div class="close-container" onClick={closeLogin}>
            <div class="leftright"></div>
            <div class="rightleft"></div>
            <label class="close"></label>
          </div>
          <div className='signInDiv'>

            <div>
              <h1>Login</h1>
            </div>

            <div className='signInForm' >
              <label htmlFor ='email'></label>
              <input placeholder="User Name" type='text' name='email' id='email' autoComplete="on"/>
              <br/>
              <label className='password' htmlFor ='password'></label>
              <input placeholder="Password"type='password' name='password' id='password' autoComplete="on"/>
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
      
      <span className="right-menu" style={{ fontSize: "30px", cursor: "pointer", position: 'relative' }} onClick={openLogin}>&#9776;</span>
      
    </div>
  )
}

export default Header;