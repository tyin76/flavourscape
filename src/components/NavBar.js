import React from 'react'
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import '../styles/Fonts.css'
import logo from '../images/cookbook.svg'
import '../styles/NavBar.css'
import { Link } from 'react-router-dom';

function NavButton({ name, link }) {
    return (
    <Link to={link}> 
    <Button
        variant='text'
        sx={{
            color :'#1B4332',
            fontFamily: 'Merri-Italic',
            fontWeight: 'bold',
            fontSize : '18px',
            '&:hover' : {
                backgroundColor: '#D8F3DC',
                borderBottom: '1px solid #081C15',
                scale: '1.1'
              }
        }}
        >

        {name}
    
    </Button>
    </Link>
    )
}


function NavBar() {
  return (
    
<div className='navbar-container'>

    
    <div className='name-logo-div'>
    <h1 style={{ fontFamily: 'Merri-Bold', color: '#2D6A4F', fontWeight: 'Bold' }}>FlavourScape</h1>
    <img src={logo} style={{ width: '60px' }}></img>
    </div>
    
    <div className='nav-stack-container'>
    <Stack
    direction='row'
    spacing={3.5}
    sx={{
        justifyContent: 'center',
    }}>

    <NavButton name='Home' link='/' className='nav-button'/>
    <NavButton name='Recipes' link='/recipes' className='nav-button'/>
    <NavButton name='Login' link='/login' className='nav-button' />  

    </Stack>
    </div>
    
    
</div>
)
}

export default NavBar
