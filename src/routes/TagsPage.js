import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

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

function TagsPage(props) {
  const phone = useMediaQuery('(max-width:640px)');
  const tablet = useMediaQuery('(min-width:640px)');
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Grid
        sx={{
          color: '#FFFFFF',
          flexDirection: 'column',
        }}
        container
      >
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: {
              mobile: 'column',
              tablet: 'row',
            },
            alignItems: {
              mobile: 'left',
              tablet: 'center',
            }
          }}
        >
          {
            tablet
              ?
            <Grid
              item
              sx={{
                position: 'absolute',
                left: '13%',
                right: '25.88%',
                top: '10%',
                cursor: 'pointer',
              }}
            >
              <ArrowBackIosNewIcon onClick={() => navigate(-1)} />
            </Grid>
              :
            null
          }
          {
            phone
              ?
            <Grid item>
              <ArrowBackIosNewIcon onClick={() => navigate(-1)} /> Home Page
            </Grid>
              :
            null
          }
          <Grid
            item
            sx={{
              marginTop: '38px',
              fontSize: '30px',
              fontWeight: '400',
              letterSpacing: '0.25px'
            }}
          >
            Tags
          </Grid>
        </Grid>
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

export default TagsPage;
