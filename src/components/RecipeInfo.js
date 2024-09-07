import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

function RecipeInfo() {

    const { recipeId } = useParams();
    const location = useLocation();
    const { data } = location.state || {}
    const recipe = data.recipes.find((entry) => entry.id === Number(recipeId))

    {console.log(data)}
    {console.log(data.recipes)}
    {console.log(recipe)}
    {console.log(typeof recipeId)}

    

  return (
    <>

    <div className='recipe-info-container'>
      







    </div>
    
    
    
    </>
  )
}

export default RecipeInfo
