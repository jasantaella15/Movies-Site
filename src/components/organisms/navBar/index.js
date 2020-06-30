import React, {Component} from 'react';
import styled from 'styled-components';
import NavBarLink from '../../atoms/navBarLink';
import BurgerIcon from '../../molecules/burgerIcon';


const StyledNavBar = styled.div`
overflow: hidden;
background-color: ${props => props.theme.tertiary};
& .icon {
    display: none;
  }
& .icon:hover{
    cursor: pointer;
}

  @media screen and (max-width: 600px) {
    & .icon {
        float: right;
        padding: 5px;
        display: block;
      }
    &.responsive {position: relative;}
    &.responsive .icon {
      position: absolute;
      right: 0;
      top: 0;
  }
`;

class NavBar extends Component{
    constructor(props) {
        super(props);
        this.toggleClass= this.toggleClass.bind(this);
        this.state = {
            active: false,
        };
    }
    toggleClass(event) {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
        event.preventDefault();
    }
    render(){
        return(
        <StyledNavBar className={this.state.active ? 'responsive': null}>
                <NavBarLink to="/">Home</NavBarLink>
                <NavBarLink to="/About">About Us</NavBarLink>
                <NavBarLink to="/About-2">Second About</NavBarLink>
                <BurgerIcon onClick={this.toggleClass} ></BurgerIcon>
        </StyledNavBar>
        )
    }
}
export default NavBar