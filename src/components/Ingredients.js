import React from 'react'
import "./ingredients.css";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const Ingredients = ({ingredients, image}) => {  
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

      <div id="ingredients" className="style-2">
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
            <h1>Ingredients</h1>
            
            {newIngredients}
        </ReactCSSTransitionGroup>
      </div>
    </div>
  )
}

export default Ingredients;