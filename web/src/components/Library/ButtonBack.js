import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { sizes, largerThan, smallerThan } from '../Helpers/mediaQueries';

const SVG = styled.svg`
    transform: ${props => props.rotation};
    fill: white;
    width: 23px;
    height: 23px;
`;

const Back = styled.div`
    padding: 5px;
    margin: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all ease 0.2s;
    z-index: 1000;
`;

class ButtonBack extends Component {
    render() {
        return (
            <AniLink
            to={this.props.route}
            cover
            direction={this.props.direction}
            duration={1}
            bg="black" 
            to={this.props.route}>
                <Back>
                    <SVG rotation={this.props.rotation} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></SVG>
                </Back>
            </AniLink>
        )
    }
}

export default ButtonBack
