import React from 'react'
import "./ingredients.css";

const Ingredients = ({ingredients, image}) => {  
  // console.log(ingredients)

  if (ingredients) {
    var newIngredients = ingredients.map((item, i) => {
      return (
        <li className="list" key={i}>{item}</li>
      )
    })
  }
  return (
  
    <div id="largePic" className='thirdSection'>
    
      <div id="main-image">
        <img className="foodImage" src={image} alt=''/>
      </div>

      <div id="ingredients">
        <div>
            <h1>Ingredients</h1>
          {newIngredients}
        </div>
      </div>

    </div>

  )
}

export default Ingredients;