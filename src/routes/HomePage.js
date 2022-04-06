import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

import BottomNav from 'components/BottomNav';

function HomePage() {
  const phone = useMediaQuery('(max-width:640px)');

  return (
    <Grid
      sx = {{
        color: '#FFFFFF',
      }}
      container
    >
      <Grid item>
        Home Page
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
