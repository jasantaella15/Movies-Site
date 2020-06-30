import React, {Component} from 'react';
import styled from 'styled-components';
import Button from '../../atoms/button';

const Row = styled.div`
display: inline-grid;
grid-template-columns: repeat(2, 50%);
grid-gap: 0.5em;
justify-content: center;
align-content: center;
width:50%;

& .label{
  grid-column: 1 / span 2;
  grid-row: 1;
  text-align: center;
}

@media screen and (max-width: 600px) {
    display: grid;
    margin: 0 auto;
    width: 100%;
}
`;
const Colum = styled.div`
display: grid;
grid-auto-flow: column;
gap: 4px;
align-items: center;
justify-items: center;
}
`;
class ButtonsGroup extends Component{
    render(){
        return(
            <Row>
                <div className="label">
                <h3>{this.props.data.text}</h3>
                </div>
                {this.props.data && this.props.data.buttons.map(v=>{
                    return (
                    <Colum key={v.value}>
                    <Button value={v.value} isActive={v.isActive} onClick={this.props.data.handler} state={this.props.data.state} text={v.text} ></Button>                
                    </Colum>
                    )
                })}
            </Row>
        )
    }
}
export default ButtonsGroup

