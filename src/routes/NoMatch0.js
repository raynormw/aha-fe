import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';

export default class NoMatch extends Component {
  render() {
    return (
      <div>
        <p>404</p>
        <Link to="/">
          <Button type="primary">Back to Home</Button>
        </Link>
      </div>
    );
  }
}
