import React from 'react';
import { connect } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Item } from 'utils/Helper';
import { search } from 'actions/searchAction';
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

  const renderResult = () => {
    console.log('data', props.data);

    return (
      <Grid container>
        {props.data.map((value, index) => {
            return (
                <Grid key={index} item>{value.name}</Grid>
            );
        })}
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
        <Grid item sx={{ marginTop: '38px', fontSize: '30px', fontWeight: '400', letterSpacing: '0.25px' }}>
          Results
        </Grid>
        {
          props.data.length > 0
          ?
          renderResult()
          :
          null
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
});

const mapDispatchToProps = dispatch => ({
  search: (pageSize, keyword, page) => dispatch(search(pageSize, keyword, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
