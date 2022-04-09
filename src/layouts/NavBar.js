import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';

import { Item } from 'utils/Helper';
import IconSelected from 'assets/icons/selected.png';
import IconNotSelected from 'assets/icons/notSelected.png';

export default class NavBar extends Component {
  state = {
    routes: "home",
  }

  handleClick(routes) {
    this.setState({ routes });
  }

  render() {
    return (
      <Grid
        sx={{
          display: {
            tablet: 'flex',
          },
          flexDirection: {
            tablet: 'column',
          },
          height: {
            tablet: '100vh',
          },
          background : {
            tablet: '#1B1B1B',
          },
          width: {
            tablet: '80px',
            mobile: '100%'
          },
          paddingTop: {
            tablet: '37px',
            mobile: '28px'
          },
          textAlign: 'center',
        }}
        item
      >
        <Item
          sx={{
            textAlign: {
              tablet: 'center',
              mobile: 'left',
            },
            marginLeft : {
              tablet: '0px',
              mobile: '21px',
            },
            fontWeight: 700,
            fontSize: '13px',
            lineHeight: '15px',
            letterSpacing: '-0.05em',
            background: "-webkit-linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            boxShadow: 'none',
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
            justifyContent: 'center',
            marginTop: '46.5px',
            boxShadow: 'none',
            background: '#1B1B1B',
          }}
        >
          {
              this.state.routes === "home"
            ?
              <Link
                to="/"
                onClick={() => this.handleClick("home")}
                style={{ textDecoration: 'none' }}
              >
                <img src={IconSelected} alt="Selected Icon" />
                <Item
                  sx={{
                    marginTop: 0,
                    marginBottom: 0,
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '150%',
                    letterSpacing: '0.4px',
                    boxShadow: 'none',
                }}>
                  Home
                </Item>
              </Link>
            :
              <Link
                to="/"
                onClick={() => this.handleClick("home")}
                style={{ textDecoration: 'none' }}
              >
                <img src={IconNotSelected} alt="Selected Icon" />
              </Link>
          }
        </Item>
        <Item
          sx={{
            display: {
              tablet: 'flex',
              mobile: 'none'
            },
            justifyContent: 'center',
            marginTop: '18px',
            boxShadow: 'none',
            background: '#1B1B1B',
          }}
        >
          {
              this.state.routes === "tags"
            ?
              <Link
                to="/tags"
                onClick={() => this.handleClick("tags")}
                style={{ textDecoration: 'none' }}
              >
                <img src={IconSelected} alt="Not Selected Icon" />
                <Item
                  sx={{
                    marginTop: 0,
                    marginBottom: 0,
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '150%',
                    letterSpacing: '0.4px',
                    boxShadow: 'none',
                }}>
                  Tags
                </Item>
              </Link>
            :
              <Link
                to="/tags"
                onClick={() => this.handleClick("tags")}
                style={{ textDecoration: 'none' }}
              >
                <img src={IconNotSelected} alt="Not Selected Icon" />
              </Link>
          }
        </Item>
      </Grid>
    );
  }
}
