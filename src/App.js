import { BrowserRouter, Routes, Route , Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { styled } from '@mui/material/styles';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { base_url } from 'services/api';
import HomePage from 'routes/HomePage';
import ResultPage from 'routes/ResultPage';
import TagsPage from 'routes/TagsPage';
import NoMatch from 'routes/NoMatch';
import Store from 'stores/index';
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
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
              <Box sx={{ flexGrow: 1 }}>
                <Grid container>
                  <Grid
                    sx={{
                      display: {
                        tablet: 'flex',
                        mobile: 'none'
                      },
                      width: {
                        tablet: 80,
                        mobile: '100%'
                      }
                    }}
                    item
                  >
                    {/* width: 80px */}
                    <Item>Sidebar</Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                        <Route path="result" element={<ResultPage />} />
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
            </ThemeProvider>
        </ScopedCssBaseline>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
