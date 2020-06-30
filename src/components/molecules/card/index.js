import React, {Component} from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const StyledDiv = styled.div`
  font-family: "Roboto",Helvetica,Arial,sans-serif;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  text-align: center;
  background: white;
  height: 310px;
  & img{
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  border-radius: 0.25em 0.25em 0 0;
  }
  
@media (min-width: 1281px) {
  height: 420px;
}
  & p{
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  & title{
    font-size: 2 vw;
    font-weight: bold;
  }
  & a:link{
    color: black;
    text-decoration: none;
  }
  & a:hover{
    text-decoration: underline;
  }
  & .content{
    min-height: 100%;
  padding: 0.3rem;
  }
`;

class Card extends Component{
    render(){
        return(
    <StyledDiv>
      
      <NavLink to={`/video/?id=${this.props.data.id}`}>
      <img src={this.props.data.thumbnail}></img></NavLink>
      <div className="content">
      <div className="title">
      <small>{this.props.data.rate} ⬆ - </small>
      <NavLink to={`/video/?id=${this.props.data.id}`} >{this.props.data.title}</NavLink>
      </div>
      <p>{this.props.data.description}</p>
      </div>
      </StyledDiv>
        )
    }
}
export default Card