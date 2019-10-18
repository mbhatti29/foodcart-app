import React from 'react';
import Register from './Register';
import Login from './Login';


const Header = ({searchRecipes, search, closeNav, openNav, searchValue}) => {  
  
 
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
          <a href="#" className="closebtn" onClick={() => closeNav("mySidenav")}>&times;</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
      </div>
      
      <span className="menu" style={{fontSize:"30px", cursor:"pointer", position:'relative'}} onClick={() => { openNav('mySidenav', "160px")} }>&#9776;</span>
{/* 
        {
          this.state.route === 'home' 
          ? <Login closeNav={closeNav} />

          : (this.state.route === 'Register' 
            ? <Register closeNav={closeNav}/>
            : <Register closeNav={closeNav}/>
            )
        } */}

        

      <span className="right-menu" style={{ fontSize: "30px", cursor: "pointer", position: 'relative' }} onClick={() => openNav("login", "auto")}>&#9776;</span>
      
    </div>
  )
}

export default Header;