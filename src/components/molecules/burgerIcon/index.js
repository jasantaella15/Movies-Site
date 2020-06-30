import React, {Component} from 'react';
import styled from 'styled-components';
import Line from '../../atoms/iconLine';


class BurgerIcon extends Component{
    render(){
        return(
            <div className="icon" onClick={this.props.onClick}>
                <Line></Line>
                <Line></Line>
                <Line></Line>
            </div>
        )
    }
}
export default BurgerIcon