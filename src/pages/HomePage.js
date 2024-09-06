import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import '../styles/HomePage.css'
import { Box, Stack } from '@mui/material'
import givingFood from '../images/givingFood.svg'
import onlineRecipe from '../images/onlineRecipe.svg'
import greenRecipe from '../images/greenRecipe.svg'


function HomePage() {

    useEffect(() => {
        
    })

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



    </div>
    
   
   </>
  )
}

export default HomePage
