import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar.js'
import '../styles/RecipePage.css'
import RecipeCard from '../components/RecipeCard.js';
import defaultImage from '../images/happy family.avif'
import { Box, Stack } from '@mui/material';

function RecipesPage() {

    const [search, setSearch] = useState(null);
    const [recipesFromSearch, setRecipesFromSearch] = useState(null);

   // input is what the user searched
    function handleSubmit(input) {
      setSearch(input);
}


    const apiKey = process.env.REACT_APP_API_KEY;

    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${search}&number=10&apiKey=${apiKey}&includeIngredients=true&instructionsRequired=true&addRecipeNutrition=true`;


    useEffect(() => {
        const getAPI = async () => 
        {
            try {
              if (search !== null) {
                const response =  await fetch(url);
                const result =  await response.json();

                
                setRecipesFromSearch(result);
              }
            } catch (error) {
                console.error(error);
            }

        }
        getAPI();
        
    }, [search])

    if (recipesFromSearch) {
      console.log(recipesFromSearch);
    }


    function RecipeSearchCard() {

//       <Box component={'section'}
//             sx={{ p: 2, border: '1px solid grey',
//                     width:'25%',
//                     margin: '0 auto',
//                     backgroundColor: '#D8F3DC',
//                     borderRadius: '1em',
//                     boxShadow: '0 0 1rem #2D6A4F',
//                     margin: '30px',
//                     justifyContent: 'center'
//             }}>
//             <Stack direction='column' spacing={1} 
//               sx={{ 
//                 justifyContent: 'center',
//                 textAlign: 'center',
//                 fontFamily: ' Merri-Bold',
//                 color: '#2D6A4F'
// ,              }}>
//                 <h4 style={{ paddingBottom: '5px' }}>{recipesFromSearchtitle}</h4>
//                 <img src={data.recipes[entry].image ?? defaultImage} style={{ borderRadius: '1rem', width: 'auto' }}></img>  
                
//                 <div style={{ justifyContent:'center', padding: '5px' }}>
                
//                 <Link to={`/recipes/${data.recipes[entry].id}`}
//                 state={{ data: data }}>
//                 <Button variant='contained' 
//                 sx={{
//                   width: '70%',
//                   textAlign: 'center',
//                   color: '#2D6A4F',
//                   backgroundColor: '#74C69D',
//                   fontFamily: 'Merri-Bold'
//                 }}>GO TO RECIPE</Button>
//                 </Link>
//                 </div>
                
            
//             </Stack>
          
//             </Box>

    }


  return (
    <>
    <div className='recipe-page-container'> 
    <SearchBar onSearch={handleSubmit}></SearchBar>


    







    </div>
    
    
    
    </>
  )
}

export default RecipesPage
