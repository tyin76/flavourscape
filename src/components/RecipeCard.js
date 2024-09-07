import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import defaultImage from '../images/happy family.avif'

function RecipeCard({ data, entry }) {

  const [expandInfo, setExpandInfo] = useState(false);

  return (
    <>
            <Box component={'section'}
            sx={{ p: 2, border: '1px solid grey',
                    width:'25%',
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
                <img src={data.recipes[entry].image ?? defaultImage} style={{ borderRadius: '1rem', width: 'auto' }}></img>  
                
                <div style={{ justifyContent:'center', padding: '5px' }}>
                
                <Link to={`/recipes/${data.recipes[entry].id}`}
                state={{ data: data }}>
                <Button variant='contained' 
                sx={{
                  width: '70%',
                  textAlign: 'center',
                  color: '#2D6A4F',
                  backgroundColor: '#74C69D',
                  fontFamily: 'Merri-Bold'
                }}>GO TO RECIPE</Button>
                </Link>
                </div>
                
            
            </Stack>
          
            </Box>
            

    
    
    </>
  )
}

export default RecipeCard
