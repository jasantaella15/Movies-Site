import React, {Component} from 'react';
import styled from 'styled-components'

const Title = styled.h1`
  font-family: 'roboto';
  font-style: italic;
  font-size: 2em;
  text-align: center;
  color: ${props=> props.theme.secundary};
`;
const Wrapper = styled.section`
  padding: 2em;
  background: ${props=> props.theme.terteary};
`;
  
class SearchInput extends Component{
    render(){
        return(
            <Wrapper>
                <Title>
                    {this.props.text}
                </Title>
            </Wrapper>
        )
    }
}
export default SearchInput