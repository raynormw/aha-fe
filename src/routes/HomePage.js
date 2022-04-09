import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

import BottomNav from 'components/BottomNav';

function HomePage() {
  const phone = useMediaQuery('(max-width:640px)');
  const [name, setName] = useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };

  // const handleClick = () => {
  //   console.log('clicked');
  // }

  return (
    <Grid
      sx={{
        color: '#FFFFFF',
        flexDirection: 'column',
      }}
      container
    >
      <Grid item>
        Search
      </Grid>
      <TextField
        value={name}
        onChange={handleChange}
        id="outlined-basic"
        variant="outlined"
        placeholder="Keyword"
        sx={{
          width: '100%',
          border: '3px solid rgba(255, 255, 255, 0.5)',
          boxSizing: 'border-box',
          borderRadius: '6px',
          marginTop: '20px',
          marginBottom: '30px',
          color: '#FFFFFF',
        }}
      />
      <Divider sx={{ opacity: 0.1, border: '1px solid #FFFFFF'}}/>
      <Grid item>
        # of results per page
      </Grid>
      {
          phone
        ?
          <BottomNav />
        :
          null
      }
    </Grid>
  );
}

export default HomePage;
