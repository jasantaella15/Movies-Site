import React, {Component} from 'react';
import styled from 'styled-components'

const StyledInput = styled.input.attrs(props => ({
    type: "search",
    placeholder: "search..."
  }))`
  
  padding: 10px;
  font-size: 17px;
  border: 1px solid ${props=> props.theme.tertiary};
  float: left;
  width: 75%;
  background: white;

  &::-webkit-search-cancel-button{
    position:relative;
    right: 10px;
    -webkit-appearance: none;
    border-radius:10px;
    background: ${props=> props.theme.tertiary};
}
  `;
  
class SearchInput extends Component{
    constructor(props) {
      super(props); 
      this.handleKeyDown = this.handleKeyDown.bind(this);
    }
  handleKeyDown(event){
    if (event.key === 'Enter') this.props.handleSubmit(event);
}
    render(){
        return(
            <StyledInput value = {this.props.value} onChange={this.props.onChange} onKeyDown={this.handleKeyDown}></StyledInput>
        )
    }
}
export default SearchInput