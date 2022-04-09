import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';

import { Item } from 'utils/Helper';
import { SliderMarks } from 'components/SliderMarks';
import { Input } from 'components/Input';

import BottomNav from 'components/BottomNav';

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
      <Input name={name} handleChange={handleChange}/>
      <Divider sx={{ opacity: 0.1, border: '1px solid #FFFFFF'}} />
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
