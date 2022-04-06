import React, { Component } from 'react';

export default class HomePage extends Component {
  render() {
    console.log(this.props, 'props home');
    return (
      <div>Home Page</div>
    );
  }
}
