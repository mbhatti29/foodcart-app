import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       recipeList: [
          {
           image_url: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
           title: 'cheese',
           ingredients: ['1/2 cup mexican', 'taco-tuxedo', 'nacho libre', 'etc etc']
          },
          {
            image_url: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            title: 'ham',
            ingredients: ['1/2 cup mexican', 'taco-tuxedo', 'nacho libre', 'etc etc']

          },
          {
            image_url: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
           title: 'burrito',
          ingredients: ['1/2 cup mexican', 'taco-tuxedo', 'nacho libre', 'etc etc'],

          },
          {
            image_url: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
           title: 'ham',
            ingredients: ['1/2 cup mexican', 'taco-tuxedo', 'nacho libre', 'etc etc']

          },
          {
            image_url: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
           title: 'burrito',
          ingredients: ['1/2 cup mexican', 'taco-tuxedo', 'nacho libre', 'etc etc']

          },
          {
            image_url: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
           title: 'burrito',
          ingredients: ['1/2 cup mexican', 'taco-tuxedo', 'nacho libre', 'etc etc']

          },
          {
            image_url: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
           title: 'burrito',
          ingredients: ['whateva flava', 'anotha one', 'nachooooo', 'etc etc']

          }
       ],
       ingrediants: [],
       search : ''
    }
  }
  
  componentDidMount() {
    
  }

  search = (event) => {
    this.setState({
      search : event.target.value
    })
  }

  handleClick = () => {
    const wrapper = document.getElementById('wrapper')
    wrapper.classList.toggle('is-nav-open')
  }

  searchFoods = (event) => {
    event.preventDefault()
    if (this.state.search) {
      const key = '115a287a7e2cfbd715b6be309c1c5075'
      fetch(`https://www.food2fork.com/api/search?key=${key}&q=${this.state.search}`)
        .then(response => response.json())
        .then(res => {
          console.log(res.recipes)
          this.setState({
            recipeList: res.recipes
          })
        })
      }
    }

    openNav = () => {
      document.getElementById("mySidenav").style.width = "160px";
    }
    closeNav = () => {
      document.getElementById("mySidenav").style.width = "0";
    }

    displayModal = (e) => {
      e.target.parentElement.children[1].style.display = "block"
    }
    examplefunction = (recipe) => {
      this.setState({
        ingrediants: []
      })
      document.getElementById("img").src = recipe.image_url;
      if (recipe.ingredients) {
        const listItems = recipe.ingredients.map((item, i) => {
          console.log(item)
          return (
            item 
          )
        })
        console.log(listItems)
        this.setState({
          ingrediants: listItems
        })
      }
    }

    closeModal = (e) => {
      e.target.parentElement.style.display = "none";
    }
    
    render() {
      // const filteredRecipes = this.state.recipeList.filter(recipe => {
      //   return recipe.title.toLowerCase().includes(this.state.search.toLowerCase())
      // })
      
    const recipeList = this.state.recipeList.map((recipe, i) => (
        <div key={i} className='recipe'><img src={recipe.image_url} alt='thumbnail' />
          <p className='title'>{recipe.title}</p>
            <button className = "myBtn" onClick={() => this.examplefunction(recipe)}>Open Modal</button>

            {/* <!-- The Modal --> */}
          <div className="myModal">
            <div className="modal-content">
              <span className="close" onClick={this.closeModal}>&times;</span>
              <p>{recipe.title}</p>
            </div>
          </div>

        </div>
      ))

      const newIngrediants = this.state.ingrediants.map((item, i) => {
      return (
        <li key={i}>{item}</li>
      )
    })
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className='b--hot-pink'>Food Cart</h1>
          </header>
          <div className='firstSection'>
    
            <form onSubmit={this.searchFoods}>
              <input id='search' onChange={this.search} value={this.state.search} type='text' placeholder='Search Recipe'/>
            </form>
          </div>
            <div id="mySidenav" className="sidenav">
              <div class="avatar"></div>
                <a href="#" className="closebtn" onClick={this.closeNav}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
       
            <span style={{fontSize:"30px", cursor:"pointer", position:'relative'}} onClick={this.openNav}>&#9776;</span>
            <span id="name">
              <li>User</li>
              <li>Login</li>
              <li>Register</li>
            </span>
          <div className='secondSection'>
              {recipeList.slice(0,8)}
          </div>
          <div className="modalEx">
            <button class="modalBtn">Close</button>
            <div id="modalContent"></div>
          </div>
          <div className='thirdSection'>
            {/* {filteredRecipes} */}
            <div id="main-image">
              <img id="img" src='' alt=''/>
            </div>
            <div id="ingrediants">
              <div id="list">
                  <h1>Ingrediants</h1>
                  {newIngrediants}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;


// - make a function that sends data from 