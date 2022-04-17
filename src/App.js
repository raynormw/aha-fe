import { BrowserRouter, Routes, Route , Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { base_url } from 'services/api';
import NavBar from 'layouts/NavBar';
import HomePage from 'routes/HomePage';
import ResultPage from 'routes/ResultPage';
import TagsPage from 'routes/TagsPage';
import NoMatch from 'routes/NoMatch';
import Store from 'stores/index';
import { Item } from 'utils/Helper';

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
  typography: {
    fontFamily: [
      'Ubuntu',
      'sans-serif',
    ].join(','),
  },
});

function App() {

  return (
    <Provider store={Store}>
      <BrowserRouter basename={base_url}>
        <ScopedCssBaseline>
           <ThemeProvider theme={theme}>
              <Typography component={'div'}>
                <Box sx={{ flexGrow: 1, boxShadow: 'none' }}>
                  <Grid container>
                    <NavBar />
                    <Grid
                      sx={{
                        pb: 7,
                        width: {
                          desktop: '985px',
                          tablet: 'calc(100% - 80px)',
                          mobile: '100%',
                        },
                        paddingTop: {
                          tablet: '54px',
                          mobile: '27px',
                        },
                        paddingLeft: {
                          laptop: '130px',
                          tablet: '50px',
                          mobile: '20px',
                        },
                        paddingRight: {
                          laptop: '130px',
                          tablet: '50px',
                        },
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: '24px',
                        fontWeight: 400,
                        lineHeight: '36px',
                      }}
                      item
                    >
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                          <Route path="result" element={<ResultPage />} />
                          <Route path="tags" element={<TagsPage />} />
                        <Route path="*" element={<NoMatch />} />
                      </Routes>
                      <Outlet />
                    </Grid>
                      <Grid
                        sx={{
                          width: {
                            desktop: '375px',
                          },
                          display: {
                            desktop: 'flex',
                            mobile: 'none'
                          }
                        }}
                        item
                      >
                        {/* width: 375px */}
                        <Item>Follower</Item>
                      </Grid>
                      {/* :
                      null
                    } */}
                  </Grid>
                </Box>
              </Typography>
            </ThemeProvider>
        </ScopedCssBaseline>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
