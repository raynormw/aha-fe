import * as React from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import IconSelected from 'assets/icons/selected.png';
import IconNotSelected from 'assets/icons/notSelected.png';

export default function BottomNav() {
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation value={value} onChange={handleChange} sx={{ backgroundColor: '#181818' }}>
        <BottomNavigationAction value="home" icon={<img src={IconSelected} alt="Selected Icon" />} />
        <BottomNavigationAction value="tags" icon={<img src={IconNotSelected} alt="Not Selected Icon" />} />
      </BottomNavigation>
    </Paper>
  );
}
