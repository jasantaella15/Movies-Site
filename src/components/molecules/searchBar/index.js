import React, {Component} from 'react';
import styled from 'styled-components';
import ButtonSearch from '../../atoms/buttonSearch';
import SearchInput from '../../atoms/searchInput';
const StyledDiv = styled.div`
display: inline-block;
width: 100%;
margin: 0 auto;
padding: 0 15px;

& div{
    margin: 0 auto;
    display: table;
}
`;
class SearchBar extends Component{
    render(){
        return(
        <StyledDiv>
            <div>
            <SearchInput value={this.props.value} onChange={this.props.onChange} handleSubmit={this.props.onClick}></SearchInput>
            <ButtonSearch onClick={this.props.onClick}></ButtonSearch>
            </div>
        </StyledDiv>
        )
    }
}
export default SearchBar