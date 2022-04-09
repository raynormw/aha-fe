import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';

import { Item } from 'utils/Helper';
import { SliderMarks } from 'components/SliderMarks';
import { Input } from 'components/Input';
import { CustomButton } from 'components/CustomButton';

import BottomNav from 'components/BottomNav';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      notebook: 1280,
      desktop: 1440,
    },
  },
});

function HomePage() {
  const phone = useMediaQuery('(max-width:640px)');
  const [name, setName] = useState('');
  const handleChange = (event) => {
    console.log(event.target.value, 'name');
    setName(event.target.value);
  };

  const [sliderValue, setSliderValue] = useState(3);
  const handleSlider = (event) => {
    console.log(event.target.value, 'slider value');
    setSliderValue(event.target.value);
  }
  const handleClick = () => {
    console.log('clicked');
  }

  return (
    <ThemeProvider theme={theme}>
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
        <Input name={name} handleChange={handleChange}/>
        <Divider sx={{ opacity: 0.1, border: '1px solid #FFFFFF' }} />
        <Grid item sx={{ marginTop: '30px', marginBottom: '20px' }}>
          {sliderValue} of results per page
        </Grid>
        <Grid
          container
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
          }}>
          <Grid
            item
            sx={{
              fontSize: '48px',
              fontWeight: '700',
              marginRight: '10px',
              marginBottom: '30px',
            }}>
            <Item>30</Item>
          </Grid>
          <Grid item sx={{ lineHeight: '24px', marginBottom: '30px',}}>
            <Item>results</Item>
          </Grid>
        </Grid>
        <SliderMarks defaultValue={sliderValue} value={sliderValue} onChange={handleSlider} />
        <Divider sx={{ opacity: 0.1, border: '1px solid #FFFFFF', marginTop: '30px' }} />
        <CustomButton
          onClick={handleClick}
          sx={{
            bottom: {
              tablet: '87px',
              mobile: '90px',
            },
            position: 'fixed',
          }}
        >
          SEARCH
        </CustomButton>
        {
            phone
          ?
            <BottomNav />
          :
            null
        }
      </Grid>
    </ThemeProvider>
  );
}

export default HomePage;
