import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import '../styles/RecipeInfo.css'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/material';





function RecipeInfo() {

    const { recipeId } = useParams();
    const location = useLocation();
    const { data } = location.state || {}
    const recipe = data.recipes.find((entry) => entry.id === Number(recipeId))

    const cellWidth =`${100 / recipe.nutrition.nutrients.length}%`
    let instructionsList = [];

    {console.log(data)}
    {console.log(data.recipes)}
    {console.log(recipe)}
    {console.log(typeof recipeId)}


    function textToSentenceArray(input) {

      // Function to check if the input contains HTML tags
    function containsHtml(text) {
      return /<[a-z][\s\S]*>/i.test(text);
  }

  // Function to strip HTML tags
  function stripHtml(html) {
      return html.replace(/<\/?[^>]+(>|$)/g, "");
  }

  // Determine if input is HTML or plain text
  const text = containsHtml(input) ? stripHtml(input) : input;

  // Split into sentences
  // This regex looks for a period followed by a space or end of string,
  // but not if the period is part of an ellipsis (...) or a decimal number
  const sentences = text.split(/\.(?!\.|\d)(?=\s|$)/);

  // Trim whitespace, filter out empty sentences, and ensure each sentence ends with a period
  return sentences
      .map(sentence => sentence.trim())
      .filter(sentence => sentence.length > 0)
      .map(sentence => sentence.endsWith('.') ? sentence : sentence + '.');
    
    }

    
    if (recipe && recipe.instructions) {
      instructionsList = textToSentenceArray(recipe.instructions)
    }
    console.log(instructionsList)

    

  return (
    <>

    <div className='recipe-info-container'>

    <h1 style={{ textAlign: 'center', fontFamily: 'Merri-Black', padding: '10px', color: '#1B4332'}}>{recipe.title}</h1>

    <div style={{ paddingRight: '100px', paddingLeft: '100px', paddingTop: '10px' }}> 

      <h3 className='recipe-section-header'>Nutrient Info</h3>
    <TableContainer component={Paper}
        sx={{ 
          padding: '16px',
          maxWidth: '100%',  // Ensure the table doesn't exceed the container width
          overflowX: 'auto', // Enable horizontal scrolling
          '& .MuiTableCell-root': {
              padding: '12px',
              whiteSpace: 'nowrap', // Prevent text wrapping in cells
          }
      }}>
      <Table sx={{ 
        minWidth: 650,
        '& .MuiTableCell-root': {

        }
        }} 
        aria-label="simple table">
        <TableHead>
          <TableRow sx={{
            '& td, & th': {
                fontFamily: 'F1-bold',
                fontSize: '20px',
                fontFamily: 'Merri-Light'
              }
              }}>
            {recipe.nutrition.nutrients.map((entry) => {
              return <TableCell key={entry.name} align="center" width='auto' sx={{
                paddingLeft : 0,
                paddingRight : 0,
              }}>{entry.name}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow 
          sx={{
            '&:last-child td, &:last-child th': { border: 0 },
            '& td, & th': {
                fontFamily: 'Merri-Bold'
            }
        }}>

          {recipe.nutrition.nutrients.map((entry) => {
            return <TableCell key={entry.name} component="th" scope="row" align='center' width={cellWidth}>{`${entry.amount} ${entry.unit}`}</TableCell>
          })}
          

          </TableRow>
              
            
        </TableBody>
      </Table>
    </TableContainer>




    </div>

    <div className='tri-section'>
      <h3 className='recipe-section-header' style={{ paddingLeft: '100px', paddingTop: '10px'}}>Ingredients</h3>
      <Stack className='ingredient-list'
      direction='column'
      spacing={2}
      sx={{
        fontFamily: 'Merri-Light',
        color: 'black'
      }}>
        {recipe.nutrition.ingredients.map((entry) => {
          return (
            <li key={entry.name}>{`${entry.name} - ${entry.amount} ${entry.unit}`}</li>
          )
        })}
      </Stack>

      <h3 className='recipe-section-header'>Caloric Breakdown</h3>
      <Stack
      direction='column'
      spacing={2}
      sx={{
        
      }}
      >
        {Object.keys(recipe.nutrition.caloricBreakdown).map(key => {
          return <li>{`${key}: ${recipe.nutrition.caloricBreakdown[key]}%`}</li>
        })}

      </Stack>
      
      </div>

    <div className='instructions-section'>
      <h3 className='recipe-section-header' style={{ paddingLeft: '100px', paddingTop: '10px'}}>Instructions</h3>

        <Stack 
        direction='column'
        spacing={2}
        sx={{
          fontFamily: 'Merri-Light',
          color: 'black',
          paddingLeft: '100px'
        }}
        >
        {instructionsList.map((entry) => {
          return <li key={entry}>{entry}</li>
        })}
        </Stack>



      
    </div>


    </div>
    
    
    
    </>
  )
}

export default RecipeInfo
