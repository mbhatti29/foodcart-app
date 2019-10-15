import React, { Component } from 'react';
import { Rating } from 'semantic-ui-react'
import Header from './components/Header';
// import { CSSTransitionGroup } from 'react-transition-group';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MainSection from './components/MainSection';
import Ingredients from './components/Ingredients';
import StarRatings from 'react-star-ratings';


// import Footer from './components/Footer';

import './App.css';

const RatingExampleClearable = () => <Rating maxRating={5} clearable />


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       recipeList: [
          {
          image_url: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          title: 'Cheese Burrito',
          ingredients: ['1/2 cup mexican', 'taco-tuxedo', 'nacho libre', 'etc etc'],
          rating: 4.3
          },
          {
          image_url: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          title: 'Chicken Salad',
          ingredients: ['1/2 cup mexican', 'taco-tuxedo', 'nacho libre', 'etc etc'],
          rating:4.6

          },
          {
            image_url: 'https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-food-lab-35-1500x1125.jpg',
          title: 'Beef Burger',
          ingredients: ['1/2 cup mexican', 'taco-tuxedo', 'nacho libre', 'etc etc'],
          rating: 3.8
          },
          {
          image_url: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          title: 'Ham Something',
          ingredients: ['1/2 cup mexican', 'taco-tuxedo', 'nacho libre', 'etc etc'],
          rating: 4.2
          },
          {
            image_url: 'https://pinchofyum.com/wp-content/uploads/Lo-Mein-Recipe.jpg',
          title: 'Spagheti',
          ingredients: ['1/2 cup mexican', 'taco-tuxedo', 'nacho libre', 'etc etc'],
          rating: 4.1
          },
          {
          image_url: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          title: 'Cutlet',
          ingredients: ['1/2 cup mexican', 'taco-tuxedo', 'nacho libre', 'etc etc'],
          rating: 4.2
          },
          {
          image_url: 'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2018/07/Cheap-family-meals-Recipes-under-%C2%A31-per-head-920x605.jpg',
          title: 'Lasagna',
          ingredients: ['whateva flava', 'anotha one', 'nachooooo', 'etc etc'],
          rating: 3.7
          }
       ],
      ingredients: ['1/2 cup of soup', '2 spoons of broocli', 'corn', 'flour', 'soda', 'corn', 'flour', 'soda', 'corn', 'flour', 'soda'],
      search : '',
      rating: undefined
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


  // SEARCH RECIPES FROM API
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
            const newList = this.state.recipeList.map(item => ({ ...item, rating: (Math.random() * (4.9 - 3.2) + 3.2) }))
            this.setState({
              recipeList: newList
            })
          }
        })
        // console.log(this.state.recipeList)
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

  // passes ingrediants and displays them in the section
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
          // console.log(this.state.ingredients)
      })
    } else {
      this.setState({
        ingredients:['Sorry no ingrediants yet!']
      })
    }
  }
  
    //filter recipes on users page 
  filterRecipes = () => {
    const filteredRecipes = this.state.recipeList.filter(recipe => {
      return recipe.title.toLowerCase().includes(this.state.search.toLowerCase())
    })
  }

  //   changeRating = (newRating, name) => {
  //     console.log(name)
  //     this.setState({
  //       name: newRating
  //   })
  // }
   

    render() {

      const recipeList = this.state.recipeList.map((recipe, i) => (
          <div key={i} className='recipe'>
            <div className='recipeBorder'>
              <img className="recipeImg" src={recipe.image_url} alt='thumbnail' />
            </div>
            <a className='title' href="#largePic" onClick={() => this.showRecipe(recipe)}>{recipe.title}</a>
            <div>
              <StarRatings
                rating={this.state.recipeList[i].rating}
                // changeRating={this.changeRating}
                starDimension="18px"
                starSpacing="1px"
                name={recipe.title}
                starRatedColor="grey"
              />
            </div>
          </div>
      ))

      
    return (
      <div className="App">
        <Header searchRecipes={this.searchFoods} search={this.search} searchValue={this.state.search} closeNav= {this.closeNav} openNav={this.openNav} />
        
        {/* <div className='splash'>
          <div>
        
          </div>
        </div> */}
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
