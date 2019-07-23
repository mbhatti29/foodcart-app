import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       recipeList: [
          {
           image_url: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
           title: 'burrito'
          },
          {
            image_url: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
           title: 'burrito'
          },
          {
            image_url: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
           title: 'burrito'
          },
          {
            image_url: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
           title: 'burrito'
          },
          {
            image_url: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
           title: 'burrito'
          },
          {
            image_url: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
           title: 'burrito'
          },
          {
            image_url: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
           title: 'burrito'
          }
       ],
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

  searchFoods = (event) => {
    event.preventDefault()

    if (event.target.value) {
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

    
    render() {
 
        const recipeList = this.state.recipeList.map((recipe, i) => (
          <div key={i} className='recipe'>
            <img src={recipe.image_url} alt='thumbnail' />
            <p>{recipe.title}</p>
          </div>
        ))
      
      
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
           
          <div className='secondSection'>
            {recipeList}
          </div>
          <div className='thirdSection'></div>
        </div>
      </div>
    )
  }
}

export default App;
