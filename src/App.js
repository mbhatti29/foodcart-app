import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       recipeList: [],
       search : ''
    }
  }
  
  componentDidMount() {
    // const id = 'd9f523f8'
    
  }
  search = (event) => {
    this.setState({
      search : event.target.value
    })
  }


  searchFoods = (event) => {
    event.preventDefault()
    // this.setState({
    //   search: event.target.value
    // })
    const key = '115a287a7e2cfbd715b6be309c1c5075'
    fetch(`https://www.food2fork.com/api/search?key=${key}&q=${this.state.search}`)
      .then(response => response.json())
      .then(res => {
        console.log(res)
        this.setState({
          recipeList: res
        })
      })
    // this.state.search &&
    //   fetch("https://www.googleapis.com/books/v1/volumes?q=" + this.state.search)
    //     .then(res => res.json())
    //     .then(res => {
    //       console.log(res)
    //       this.setState({
    //         books: res.items
    //       })
    //     })
  }

  render() {
    // console.log(this.state.recipeList)
    // const recipes = this.state.recipeList.map((recipe, i) => (
    //   <div key={i} className='recipe'>
    //     <img src={recipes.image_url} alt='thumbnail'/>
    //     <p>{recipe.title}</p>
    //   </div>
    // ))
    
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
            {/* {recipes} */}
          </div>
          <div className='thirdSection'><h1>Third Section</h1></div>
        </div>
      </div>
    )
  }
}

export default App;
