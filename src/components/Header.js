import React, { Component } from 'react';
import Register from './Register';
import Login from './Login';


class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       loggedIn: false
    }
  }

  openNav = (el, width) => {
    document.getElementById(el).style.width = width;
  }
  closeNav = (el) => {
    document.getElementById(el).style.width = "0";
  }
  

  render() {
    
    return (
    <div>
      <header className="App-header">
        <h1>Food Cart</h1>
      </header>
      
      <div className='firstSection'>
        <form onSubmit={this.props.searchRecipes}>
          <input id='search' onChange={this.props.search} value={this.props.searchValue} type='text' placeholder='Search Recipe'/>
        </form>
      </div>

      <div id="mySidenav" className="sidenav">
        <div className="avatar"></div>
          <a href="#" className="closebtn" onClick={() => this.closeNav("mySidenav")}>&times;</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
      </div>
      
      <span className="menu" style={{fontSize:"30px", cursor:"pointer", position:'relative'}} onClick={() => { this.openNav('mySidenav', "160px")} }>&#9776;</span>

        {
          this.state.route === 'home' 
          ? <Login closeNav={this.props.closeNav} />

          : (this.state.route === 'Register' 
            ? <Register closeNav={this.props.closeNav}/>
            : <Register closeNav={this.props.closeNav}/>
            )
        }

  
      <span className="right-menu" style={{ fontSize: "30px", cursor: "pointer", position: 'relative' }} onClick={() => this.openNav("login", "auto")}>&#9776;</span>
      
    </div>
  )
  }
}


  

export default Header;