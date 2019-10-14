import React, { Component } from 'react';
import Header from './components/Header';
// import { CSSTransitionGroup } from 'react-transition-group';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MainSection from './components/MainSection';
import Ingredients from './components/Ingredients'

// import Footer from './components/Footer';

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
      ingredients: ['1/2 cup of soup', '2 spoons of broocli', 'corn', 'flour', 'soda', 'corn', 'flour', 'soda', 'corn', 'flour', 'soda'],
       search : ''
    }
  }
  
  componentDidMount() {
    fetch('http://localhost:3001/')
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
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
          if (!res.error) {
            this.setState({
              recipeList: res.recipes
            })
          }
        })
        .catch(err => {
          console.log("Recieved an error")
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

  showRecipe = (recipe) => {
    this.setState({
      // ingredients: [],
      image: recipe.image_url
    })
    
    if (recipe.recipe_id) {
      const recipeId = recipe.recipe_id
      fetch(`https://www.food2fork.com/api/get?key=115a287a7e2cfbd715b6be309c1c5075&rId=${recipeId}`)
        .then(response => response.json())
        .then(res => {
          // console.log(res.recipe.ingredients)
          this.setState({
            ingredients: res.recipe.ingredients,
            image: recipe.image_url
          })
          console.log(this.state.ingredients)
      })
    } else {
      this.setState({
        ingredients:['Sorry no ingrediants yet!']
      })
    }
  }

    closeModal = (e) => {
      e.target.parentElement.style.display = "none";
    }
    
    filterRecipes = () => {
      const filteredRecipes = this.state.recipeList.filter(recipe => {
        return recipe.title.toLowerCase().includes(this.state.search.toLowerCase())
      })
    }

    // const duration = 300;

    // const defaultStyle = {
    //   transition: `opacity ${duration}ms ease-in-out`,
    //   opacity: 0
    // }

    // const transitionStyles = {
    //   entering: { opacity: 1 },
    //   entered: {opacity: 1},
    //   exiting: { opacity: 0 },
    //   exited: { opacity: 0 }
    // }

    render() {
      
      const recipeList = this.state.recipeList.map((recipe, i) => (
          <div key={i} className='recipe'>
            <div className='recipeBorder'>
              <img className="recipeImg" src={recipe.image_url} alt='thumbnail' />
            </div>
            <a className='title' href="#largePic" onClick={() => this.showRecipe(recipe)}>{recipe.title}</a>
          </div>
      ))

      
    return (
      <div className="App">
        <Header searchRecipes={this.searchFoods} search={this.search} searchValue={this.state.search} closeNav= {this.closeNav} openNav={this.openNav} />
        
          <MainSection recipeList={recipeList}/>


        <Ingredients ingredients={this.state.ingredients} image={this.state.image}  />
        {/* <Footer /> */}
        
      </div>
    )
  }
}

export default App; 


// checklist
// recipe api
//https://www.food2fork.com/api/get?key=YOUR_API_KEY&rId=35382


// make overlay opacity animation on each food
// possible modal effect
// animation on overall page

// add a database and express server
// login system - auth
// comment system 
