import React, { Component } from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Ingredients from './components/Ingredients';
import Footer from './components/Footer';
import './App.css';

// import StarRatings from 'react-star-ratings';
// import Footer from './components/Footer';


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
          image_url: 'https://images.pexels.com/photos/1304941/pexels-photo-1304941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          title: 'Pancakes',
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
      ingredients: [],
      search : '',
      rating: undefined
    }
  }
  
  componentDidMount() {
    // fetch('http://localhost:3001/')
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data)
    // })
  }


  search = (event) => {
    this.setState({
      search : event.target.value
    })
  }

  // SEARCH RECIPES FROM API
  searchFoods = (event) => {
    event.preventDefault()
    if (this.state.search.length > 2) {
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
          console.log(this.state.recipeList)
        })
        .catch(err => {
          console.log("Recieved an error")
        })
    }
  }

  loadUser = (data) => {
    console.log(data)
    // this.setState({
    //   user: {
    //     userName: data.user.name,
    //     email: data.user.email
    //   },
    //   recipeList: data.recipeList
    // })
    // console.log(this.state.recipeList)
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
  
  // === filter recipes on users page ===
  
  // filterRecipes = () => {
  //   const filteredRecipes = this.state.recipeList.filter(recipe => {
  //     return recipe.title.toLowerCase().includes(this.state.search.toLowerCase())
  //   })
  // }

  //   changeRating = (newRating, name) => {
  //     console.log(name)
  //     this.setState({
  //       name: newRating
  //   })
  // }
   
    render() {
          
    return (
      <div className="App">
        <Header searchRecipes={this.searchFoods} search={this.search} searchValue={this.state.search} loadUser = {this.loadUser} ingredients={this.onLogin}/>
        <MainSection recipeList={this.state.recipeList} ingredients={this.showRecipe}/>
        <Ingredients ingredients={this.state.ingredients} image={this.state.image}  />
        <Footer />
      
      </div>
    )
  }
}

export default App; 

