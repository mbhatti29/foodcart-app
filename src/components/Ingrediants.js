import React from 'react'


const Ingrediants = ({ingrediants, image}) => {  
  return (
  
    <div className='thirdSection'>
    
      <div id="main-image">
        <img id="img" src={image} alt=''/>
      </div>

      <div id="ingrediants">
        <div id="list">
            <h1>Ingrediants</h1>
            {ingrediants}
        </div>
      </div>

    </div>

  )
}

export default Ingrediants;