import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import Title from '../atoms/title';

class About extends Component{
    render(){
        const funct = () => console.log("done");

        return(
            <div>
            <Helmet>
             <title>About Us</title>
            </Helmet>
            <Title text="Welcome to our Second About Page"></Title>
            </div>
        )
    }
}
export default About