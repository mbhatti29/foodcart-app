import React, { Component } from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Ingrediants from './components/Ingrediants'
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
          <p className='title' onClick={() => this.examplefunction(recipe)}>{recipe.title}</p>
            {/* <button className = "myBtn" onClick={() => this.examplefunction(recipe)}>Open Modal</button> */}

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

    const {search} = this.state;

    return (
      <div className="App">
        <Header searchRecipes={this.searchFoods} search={this.search} searchValue={search} closeNav= {this.closeNav} openNav={this.openNav} />
        <MainSection recipeList={recipeList}/>
        <Ingrediants ingrediants={newIngrediants}/>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App; 