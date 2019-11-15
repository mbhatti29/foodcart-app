import React, { Component } from 'react';
import Register from './Register';
import Login from './Login';
import './Header.css';


class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      user: {
        userName: 'Stranger',
        email: ''
      },
      route: 'login'
    }
  }

  openNav = (el, width) => {
    document.getElementById(el).style.width = width;
  }
  closeNav = (el) => {
    document.getElementById(el).style.width = "0";
  }
  
  route = (status) => {
    this.setState({
      route: status
    })
  }

  loadUser = (data) => {
    // console.log(data)
    this.setState({
      user:{
        userName: data.user.name,
        email: data.user.email
      },
      recipeList: data.recipeList
    })
    console.log(this.state.recipeList)
  }



  // onSubmitSignIn = () => {
  //   fetch('http://localhost:3001/login', {
  //     method: 'post',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //       email: this.state.signInEmail,
  //       password: this.state.signInPassword
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(user => {
  //     if (user.name) {
  //       this.props.loadUser(user)
  //     }
  //   })
  // }

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
          <h3 className='userName'>Welcome {this.state.user.userName}</h3>
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
            this.state.route === 'login'
            ? <Login closeNav={this.closeNav} route={() => this.route('register')} loadUser={this.loadUser} ingredients={this.props.ingredients} />

            : (this.state.route === 'register' 
              ? <Register closeNav={this.closeNav} loadUser={this.loadUser} route={() => this.route('login')}/>
              : <Register closeNav={this.closeNav} loadUser={this.loadUser} route={() => this.route('login')}/>
              )
          }
        <span className="right-menu" style={{ fontSize: "30px", cursor: "pointer", position: 'relative' }} onClick={() => this.openNav("login", "200px")}>&#9776;</span>
        
      </div>
  )
  }
}


  

export default Header;