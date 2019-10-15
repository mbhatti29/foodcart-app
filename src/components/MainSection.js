import React from 'react'

const MainSection = ({ recipeList }) => {  
  return (
    <div>
      <div className='secondSection'>
          {recipeList.slice(0,10)}
      </div>
    
    </div>

  )
}

export default MainSection;