import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function SearchBar({ onSearch }) {
    const [input, setInput] = useState("");



  return (
   <>

      <Box
            component="form"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              height: '100%',
              width: '100%',
              paddingTop: '15px'
            }}
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              onSearch(input);
            }}
          >
            <TextField
              id="filled-basic"
              label="Search a Recipe"
              variant="filled"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              sx={{
                width: '50%',
                minWidth: '300px',
              }}
            />
          </Box>


   </>
  )
}

export default SearchBar
