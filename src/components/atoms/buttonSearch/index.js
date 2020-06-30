import React, {Component} from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`

font-family: Roboto;
font-weight: bold;
float: left;
width: 25%;
padding: 10px;
background: ${props=> props.theme.tertiary};
color: white;
font-size: 17px;
border: 1px solid ${props=>props.theme.primary};
border-left: none;
cursor: pointer;
`;

class Button extends Component{
    render(){
        return(
        <StyledButton onClick={this.props.onClick}>Submit</StyledButton>
        )
    }
}
export default Button