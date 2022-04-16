import React from 'react';
import { connect } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Item } from 'utils/Helper';
import { searchMore } from 'actions/searchAction';
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

function ResultPage(props) {

  const phone = useMediaQuery('(max-width:640px)');
  const navigate = useNavigate();
  const { state } = useLocation();
  const { pageSize } = state;

  const handleClick = () => {
    props.searchMore(pageSize, props.keyword, (props.page + 1));
  }

  const renderResult = () => {
    return (
      <Grid
        container
        sx={{
          mt: '24px',
          display: 'flex',
          flexDirection: 'row',
          gap: '34px 31px',
          flexWrap: 'wrap',
        }}
      >
        {props.data.map((value, index) => {
            return (
                <Grid
                  key={index}
                  item
                  sx={{ flexBasis: '30%' }}
                >
                  <Box
                    sx={{
                      border: '1px solid #FFFFFF',
                      height: '146px',
                      mb: '12px',
                    }}
                  >
                    <img src={value.avater} alt="Img from API" />
                  </Box>
                  <Item sx={{ fontSize: '15px', fontWeight: '400', color: '#FFFFFF', minWidth: '87px' }}>{value.name}</Item>
                  <Item sx={{ fontSize: '11px', fontWeight: '400', color: '#B2B2B2', minWidth: '69px', boxShadow: 'none' }}>{value.username}</Item>
                </Grid>
            );
        })}
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
          gap: '34px 31px',
          flexWrap: 'wrap',
        }}
      >
        {
          [...Array(pageSize)].map((value, index) => {
            return (
              <Stack animation="wave" key={index} sx={{ flex: 1, flexBasis: '30%' }}>
                <Skeleton variant="rectangular" height={146} sx={{ backgroundColor: '#FFFFFF', mb: '12px' }} />
                <Skeleton variant="text" width={87} sx={{ backgroundColor: '#FFFFFF' }} />
                <Skeleton variant="text" width={69} sx={{ backgroundColor: '#FFFFFF' }} />
              </Stack>
            );
          }
        )}
      </Grid>
    );
  }

  console.log('props result', props);
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
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
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
          <Grid item sx={{ marginTop: '38px', fontSize: '30px', fontWeight: '400', letterSpacing: '0.25px' }}>
            Results
          </Grid>
        </Grid>

        {
          props.data.length > 0
          ?
          renderResult()
          :
          renderSkeleton()
        }
        {
          props.isLoadingMore
          ?
          renderSkeleton()
          :
          null
        }
        {
          props.isLoading || props.isLoadingMore || props.page >= props.totalPages
          ?
          null
          :
          <CustomButton
            onClick={handleClick}
            sx={{
              marginTop: '40px',
              bottom: {
                tablet: '87px',
                mobile: '90px',
              },
              width: {
                tablet: '343px',
                mobile: 'calc(100% - 40px)',
              },
            }}
          >
            MORE
          </CustomButton>
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

const mapStateToProps = state => ({
  data: state.search.data,
  isLoading: state.search.isLoading,
  isLoadingMore: state.search.isLoadingMore,
  keyword: state.search.keyword,
  page: state.search.page,
  totalPages: state.search.totalPages,
});

const mapDispatchToProps = dispatch => ({
  searchMore: (pageSize, keyword, page) => dispatch(searchMore(pageSize, keyword, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
