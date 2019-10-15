import React from 'react'
import StarRatings from 'react-star-ratings';


const MainSection = ({recipeList, ingredients}) => {  

  // search recipes from the api 
  const recipes = recipeList.map((recipe, i) => (
    <div key={i} className='recipe'>
      <div className='recipeBorder'>
        <img className="recipeImg" src={recipe.image_url} alt='thumbnail' />
      </div>
      <a className='title' href="#largePic" onClick={() => ingredients(recipe)}>{recipe.title}</a>
      <div>
        <StarRatings
          rating={recipeList[i].rating}
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
    
      <div className='secondSection'>
          {recipes.slice(0,10)}
      </div>
    
  )
}

export default MainSection;