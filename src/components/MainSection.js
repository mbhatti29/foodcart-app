import React from 'react'


const MainSection = ({recipeList}) => {  
  return (
    <div>
      <div className='secondSection'>
          {recipeList.slice(0,8)}
      </div>

      <div className="modalEx">
        <button class="modalBtn">Close</button>
        <div id="modalContent"></div>
      </div>
    </div>

  )
}

export default MainSection;