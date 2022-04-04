import React, { Component } from 'react';
import Button from '@mui/material/Button';

import { Link } from "react-router-dom";

  export default class NoMatch extends Component {
  render() {
    return (
      <div>
        <p>404</p>
        <Link to="/">
          <Button variant="text">To Home</Button>
        </Link>
      </div>
    );
  }
}
