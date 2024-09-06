import { Box, Stack } from '@mui/material'
import React from 'react'

function RecipeCard({ data, entry }) {
  return (
    <>
            <Box component={'section'}
            sx={{ p: 2, border: '1px solid grey',
                    width:'auto',
                    margin: '0 auto',
                    backgroundColor: '#D8F3DC',
                    borderRadius: '1em',
                    boxShadow: '0 0 1rem #2D6A4F',
                    margin: '30px',
                    justifyContent: 'center'
            }}>
            <Stack direction='column' spacing={1} 
              sx={{ 
                justifyContent: 'center',
                textAlign: 'center',
                fontFamily: ' Merri-Bold',
                color: '#2D6A4F'
,              }}>
                <h4 style={{ paddingBottom: '5px' }}>{data.recipes[entry].title}</h4>
                <img src={data.recipes[entry].image} style={{ borderRadius: '1rem', width: 'auto' }}></img>  
            </Stack>
            </Box>




      
    
    
    </>
  )
}

export default RecipeCard
