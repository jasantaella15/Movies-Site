import React, {Component} from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`

  width: 7em;
  display: inline-block;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background: white;
  color: ${props=> props.theme.tertiary};
  border: 2px solid ${props=>props.theme.primary};
  text-transform: capitalize;
  &:hover{
    cursor: pointer;
    border: 2px solid ${props=>props.theme.secundary};
  }

  &.active{
    background: ${props=> props.theme.tertiary};
    color: white;
  }
`;

class Button extends Component{
  constructor(props) {
      super(props);
      this.toggleClass= this.toggleClass.bind(this);
      this.state = {
          active: props.state ? props.state == props.value : props.isActive,
      };
    }
    toggleClass(event) {
      if(this.props.state && this.props.state == this.props.value) return;
      const currentState = this.state.active;
      this.setState({ active: !currentState });
      this.props.onClick(event)
  }
    render(){
      let isActive = this.props.state ? this.props.state == this.props.value : this.state.active;
        return(
        <StyledButton className={isActive ? 'active': null} onClick={this.toggleClass} value={this.props.value}>{this.props.text}</StyledButton>
        )
    }
}
export default Button