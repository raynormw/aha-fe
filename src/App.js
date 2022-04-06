import { BrowserRouter, Routes, Route , Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { base_url } from 'services/api';
import NavBar from 'layouts/NavBar';
import HomePage from 'routes/HomePage';
import ResultPage from 'routes/ResultPage';
import TagsPage from 'routes/TagsPage';
import NoMatch from 'routes/NoMatch';
import Store from 'stores/index';
import { Item } from 'utils/Item';
import 'App.css';

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
  const desktop = useMediaQuery('(min-width:1440px)');
  const phone = useMediaQuery('(max-width:640px)');
  console.log('desktop', desktop);
  console.log('phone', phone);
  return (
    <Provider store={Store}>
      <BrowserRouter basename={base_url}>
        <ScopedCssBaseline>
           <ThemeProvider theme={theme}>
              <Typography component={'div'}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container>
                    <NavBar />
                    <Grid item xs={6}>
                      <Routes>
                        <Route path="/" element={<HomePage path="/"/>} />
                          <Route path="result" element={<ResultPage path="result"/>} />
                          <Route path="tags" element={<TagsPage />} />
                        <Route path="*" element={<NoMatch />} />
                      </Routes>
                      {/* width: 985px */}
                      <Item>Content</Item>
                      <Outlet />
                    </Grid>
                    {/* {
                      desktop
                      ? */}
                      <Grid
                        sx={{
                          display: {
                            desktop: 'flex',
                            notebook: 'none'
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
