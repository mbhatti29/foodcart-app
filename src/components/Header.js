import React from 'react'


const Header = ({searchRecipes, search, closeNav, openNav, searchValue}) => {  
  return (
    <div>
      <header className="App-header">
        <h1 className='b--hot-pink'>Food Cart</h1>
      </header>
      
      <div className='firstSection'>
        <form onSubmit={searchRecipes}>
          <input id='search' onChange={search} value={searchValue} type='text' placeholder='Search Recipe'/>
        </form>
      </div>

      <div id="mySidenav" className="sidenav">
        <div class="avatar"></div>
          <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
      </div>
      
      <span style={{fontSize:"30px", cursor:"pointer", position:'relative'}} onClick={openNav}>&#9776;</span>
      <span id="name">
        <li>User</li>
        <li>Login</li>
        <li>Register</li>
      </span>
    </div>
  )
}

export default Header;