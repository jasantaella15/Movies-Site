import React, {Component} from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
    position: relative;
    width: 90%;
    padding-bottom: 56.25%; 
    height: 0;
    margin: 0 auto;
  & iframe{
    position: absolute;
    top:0;
    left: 0;
  }
  @media screen and (max-width: 600px) {
    & iframe{
        width: 100%;
        height: 100%;
      }
    }
`;

class Movie extends Component{
    render(){
        return(
            <StyledDiv>
                <iframe width="900" height="506" src={this.props.src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>

            </StyledDiv>
        )
    }
}
export default Movie