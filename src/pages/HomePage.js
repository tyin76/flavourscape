import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import '../styles/HomePage.css'
import { Box, Stack } from '@mui/material'
import givingFood from '../images/givingFood.svg'
import onlineRecipe from '../images/onlineRecipe.svg'
import greenRecipe from '../images/greenRecipe.svg'
import RecipeCard from '../components/RecipeCard.js'


function HomePage() {

    const [data, setData] = useState(null)
    const [filled, setFilled] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    const apiKey = process.env.REACT_APP_API_KEY;

    const url = `https://api.spoonacular.com/recipes/random?number=6&apiKey=${apiKey}`;

    useEffect(() => {
        const getAPI = async () => 
        {
            try {
                const response =  await fetch(url);
                const result =  await response.json();
                
                setData(result)
                setFilled(true)
            } catch (error) {
                console.error(error);
            }

        }
        getAPI();
        
    }, [])

    useEffect(() => {
        // Set a small delay to ensure the component is mounted before applying the effect
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 700);
    
        return () => clearTimeout(timer);
      }, []);

    if (data) {
        console.log(data);
    }

  return (
   <>
    
    <div className='home-page-container'>
    
    <div className='separator'>
    </div>

    <Box component={'section'}
          sx={{ p: 2, border: '1px solid grey',
                width:'60%',
                margin: '0 auto',
                backgroundColor: '#D8F3DC',
                borderRadius: '1em',
                boxShadow: '0 0 1rem #2D6A4F',
                marginTop: '50px', 
                justifyContent: 'center'
          }}>
    
        <Stack direction='row' spacing={2}
        sx={{
            alignItems: 'center',
            justifyContent: 'space-evenly'
        }}>

            <div className='quote'>
                <p>Crafting a world of taste, one recipe at a time</p>
            </div>

            <img src={greenRecipe} style={{ width: '130px'}}></img>
           

        </Stack>

        
    
    
    </Box>

    <div className='separator' style={{ paddingTop: '50px' }}>
    </div>

    
    
    <div className={`random-recipes ${isVisible ? 'fade-in' : ''}`}>
    <h3 className='random-recipes-header'>Random Recipes of the Day</h3>
    <Stack direction='row' 
        sx={{ 
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        {filled && <RecipeCard data={data} entry={0} /> }
        {filled && <RecipeCard data={data} entry={1} /> }
        {filled && <RecipeCard data={data} entry={2} /> }
    </Stack>

    <Stack direction='row' 
        sx={{ 
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        {filled && <RecipeCard data={data} entry={3} /> }
        {filled && <RecipeCard data={data} entry={4} /> }
        {filled && <RecipeCard data={data} entry={5} /> }
    </Stack>
    </div>
    
    




    </div>
    
   
   </>
  )
}

export default HomePage
