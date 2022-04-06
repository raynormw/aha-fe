import React, { Component } from 'react';
import Grid from '@mui/material/Grid';

import { Item } from 'utils/Item';

export default class NavBar extends Component {
  render() {
    return (
      <Grid
        sx={{
          display: {
            tablet: 'flex',
          },
          width: {
            tablet: '80px',
            mobile: '100%'
          },
          flexDirection: {
            tablet: 'column',
          },
          marginTop: {
            tablet: '37px',
            mobile: '28px'
          },
          marginLeft: {
            tablet: '23px',
            mobile: '21px'
          },
        }}
        item
      >
        <Item
          sx={{
            fontWeight: 700,
            fontSize: 13,
            lineHeight: '15px',
            letterSpacing: '-0.05em',
            background: "-webkit-linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          LOGO
        </Item>
        <Item
          sx={{
            display: {
              tablet: 'flex',
              mobile: 'none'
            },
            marginTop: '46.5px',
            marginBottom: '18px',
          }}
        >
          Sidebar
        </Item>
        <Item
          sx={{
            display: {
              tablet: 'flex',
              mobile: 'none'
            },
          }}
        >
          Sidebar
        </Item>
      </Grid>
    );
  }
}
