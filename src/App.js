import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Button from '@mui/material/Button';

import logo from 'logo.svg';
import 'App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AccessAlarm />
        <ThreeDRotation />
        <Button variant="contained">Hello World</Button>
      </header>
    </div>
  );
}

export default App;
