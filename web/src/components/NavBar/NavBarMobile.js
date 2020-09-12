import React, { Component } from 'react'
import styled from 'styled-components'
import { sizes, largerThan, smallerThan } from '../Helpers/mediaQueries';
import {Link} from 'gatsby'
import navBarLinks from '../../constants/navbar-links';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const NavBarMobileWrapper = styled.div`
    right: 0;
    display: flex;
    justify-content: flex-end;
    width: 100%;

    ${largerThan.tablet`
        display: none;
    `};
`;

const MenuIcon = styled.div`
    display: inline-flex;
    border: 3px solid black;
    padding: 10px;
    align-items: center;
    margin: 20px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 101;
`;

const Links = styled.div`
    z-index: 1;
    background-color: white;
    width: 100%;
    margin-top: 60px;
    padding: 20px 0;
    font-size: 15px;
    line-height: 40px;

    li {
        margin-left: 20px;

        a {
            color: black;
            text-decoration: none;
        }
    }
`;

class NavBarMobile extends Component {

    state = {
        navBarActive: false
    }

    chooseIcon = () => {
        if (this.state.navBarActive) {
            return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
        } else {
            return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
        }
    }

    activateNavBar = () => {
        this.setState({navBarActive: !this.state.navBarActive})
    }

    render() {
        return (
            <NavBarMobileWrapper>
                <MenuIcon onClick={() => this.activateNavBar()}>{this.chooseIcon()}</MenuIcon>
                <Links style={this.state.navBarActive ? {display: 'block'} : {display: 'none'}}>
                    <ul>
                    {navBarLinks.map((el, ind) => {
                            if (el.text == 'home') {
                                return <li><AniLink
                                cover
                                to={el.path}
                                direction="up"
                                duration={1}
                                bg="black" 
                                >{el.text}</AniLink></li>
                            } else {
                                return <li><Link to={el.path}>{el.text}</Link></li>
                            }
                        })}
                    </ul>
                </Links>
            </NavBarMobileWrapper>
        )
    }
}

export default NavBarMobile;
