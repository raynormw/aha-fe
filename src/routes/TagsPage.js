import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Item } from 'utils/Helper';
import tagsServices from 'services/tagsServices';

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
  const [data, setData] = useState([]);

  useEffect(() => {
    tagsServices.getTags()
      .then((res) => {
        console.log(res, 'res');
        setData(res);
      })
      .catch((err) => {
        console.log(err, 'error fetch Tags');
      })
  }, []);

  const renderResult = () => {
    return (
      <Grid
        container
        sx={{
          mt: '24px',
          display: 'flex',
          flexDirection: 'row',
          gap: '24px 36px',
          flexWrap: 'wrap',
        }}
      >
        {
          [...Array(15)].map((value, index) => {
            return (
              <Grid
                key={index}
                item
                sx={{
                  flexBasis: {
                    mobile: '100%',
                    tablet: '16%',
                  }
                }}
              >
                <Box
                  sx={{
                    borderRadius: '10px',
                    height: '150px',
                    mb: '10px',
                    background: '#1B1B1B',
                    padding: '80px 8px 8px 8px',
                  }}
                >
                  <Card
                    sx={{
                      padding: '7px 14px',
                      width: 'fit-content',
                      minHeight: '50px',
                      border: '4px solid #FFFFFF',
                      boxSizing: 'border-box',
                      borderRadius: '8px',
                      backgroundColor: 'transparent',
                      color: '#FFFFFF',
                    }}
                  >
                    Cool
                  </Card>
                </Box>
                <Item sx={{ fontSize: '15px', fontWeight: '400', color: '#FFFFFF', minWidth: '32px' }}>test</Item>
                <Item sx={{ fontSize: '11px', fontWeight: '400', color: '#B2B2B2', minWidth: '63px', boxShadow: 'none' }}>tist</Item>
              </Grid>
            );
          }
        )}
      </Grid>
    );
  }

  const renderSkeleton = () => {
    return (
      <Grid
        container
        sx={{
          mt: '24px',
          display: 'flex',
          flexDirection: 'row',
          gap: '24px 36px',
          flexWrap: 'wrap',
        }}
      >
        {
          [...Array(15)].map((value, index) => {
            return (
              <Stack
                animation="wave"
                key={index}
                sx={{
                  flexBasis: {
                    mobile: '100%',
                    tablet: '16%',
                  }
                }}
                >
                <Skeleton variant="rectangular" height={150} sx={{ backgroundColor: '#1B1B1B', mb: '10px'}} />
                <Skeleton variant="text" width={32} sx={{ backgroundColor: '#1B1B1B' }} />
                <Skeleton variant="text" width={63} sx={{ backgroundColor: '#1B1B1B' }} />
              </Stack>
            );
          }
        )}
      </Grid>
    );
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
          data.length > 0
            ?
          renderResult()
            :
          renderSkeleton()
        }
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
