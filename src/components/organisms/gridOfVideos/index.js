import React, {Component} from 'react';
import styled from 'styled-components'
import Card from '../../molecules/card'

const Row = styled.div`
display: grid;
grid-template-columns: repeat(3, 33%);

@media screen and (max-width: 600px) {

    grid-template-columns: repeat(1, 100%);
    }
`;
const Colum = styled.div`

  padding: 10px;  
  overflow: hidden;
`;

class GridOfVideos extends Component{
    render(){
        let videoList = this.props.videoList;
        return(
            <Row>
                {videoList && videoList.map(data =>
                <Colum key={data.id}>
                <Card data={data}></Card>
                </Colum>
        )}
            </Row>
        )
    }
}
export default GridOfVideos