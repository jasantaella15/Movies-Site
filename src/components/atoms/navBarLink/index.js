import React, {Component} from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';

const NavBarLink = styled(Link)`
float: left;
display: block;
color: white;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 17px;

&:hover {
    background-color:${props=> props.theme.primary} ;
    color: black;
  }

  @media screen and (max-width: 600px) {
    &:not(:first-child) {display: none;}
    .responsive & {
        float: none;
        display: block;
        text-align: left;
      }
  }

`;
export default NavBarLink;