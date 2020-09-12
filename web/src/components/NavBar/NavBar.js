import React, {Component} from 'react'
import styled from 'styled-components'
import socialLinks from '../../constants/social-links';
import {Link} from 'gatsby';
import XavierModSvg from '../../images/XavierMod.svg';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { sizes, largerThan, smallerThan } from '../Helpers/mediaQueries';
import ButtonBack from '../Library/ButtonBack';
import navBarLinks from '../../constants/navbar-links';

const NavBarFixed = styled.div`
    position: fixed;
    width: 100%;
    z-index: 40000;
`;

const NavBarWrapper = styled.nav`
    display: flex;
    padding: 25px;
    letter-spacing: -1px;
    background-color: #121212;
`;

const Name = styled.p`
    flex: 8;
    font-family: 'Noto Serif KR';
    font-weight: 700;
    font-size: 20px;
    white-space: nowrap;
`;

const MenuIcon = styled.div`
    flex: 0.5;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    svg {
        opacity: 0.5;
        transition: all ease 0.3s;
        width: 20px;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }
    }
`;

const SocialMediaLinks = styled.div`
    flex: 1.5;
    display: flex;
    filter: invert();
    align-items: center;
    justify-content: flex-end;
    padding: 10px;

    img {
        height: 100%;
        margin-right: 10px;
        width: 15px;
    }

    a {
        opacity: 1;
        cursor: pointer;
    }
`;

const NavBarMenu = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.9);
    z-index: 10000;
    display: ${props => props.display};
`;

const Links = styled.div`
    text-align: right;
    padding: 30px;
    

    a {
        color: white;
        display: block;
        text-decoration: none;
        font-size: 14px;
        font-family: 'DM Serif Display';
        font-size: 50px;
        margin: 60px 0;
    }

    li {
        display: block;
        text-decoration: none;
        color: black;

        a {
            opacity: 0.6;
            transition: all ease .5s;

            &:hover {
                opacity: 1;
            }
        }

        a.active {
            opacity: 1;
        }
    }

`;

const CloseIcon = styled.div`
    text-align: right;

    svg {
        opacity: 0.5;
        padding: 40px;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }
    }
`;

const BG = styled.div`
    height: 10px;
    background-color: #121212;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23292929' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
`;


class NavBar extends Component {
    state = {
        showMenu: false
    }

    render() {
        return (
            <NavBarFixed>
            <BG />
            <NavBarMenu
                display={this.state.showMenu ? "block" : "none"}>
            <CloseIcon>
            <svg onClick={() => this.setState({showMenu: !this.state.showMenu})} fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
            </CloseIcon>
            <Links>
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
                                return <li onClick={() => this.setState({showMenu: false})}><Link to={el.path} activeClassName="active">{el.text} </Link></li>
                            }
                        })}
                    </ul>
                </Links>
                <SocialMediaLinks>
                        {socialLinks.map((el, ind) => {
                            return <a key={ind} href={el.url} target="_blank"><img height="20" width="20" src={el.icon} /></a>
                        })}
                </SocialMediaLinks>
            </NavBarMenu>
            <NavBarWrapper>
                    <Name><AniLink style={{color: 'white', textDecoration: 'none'}}cover direction="top" bg="#663399" bg="#000000" to={"/"}>xavier mod.                </AniLink></Name>
                <SocialMediaLinks>
                        {socialLinks.map((el, ind) => {
                            return <a key={ind} href={el.url} target="_blank"><img height="20" width="20" src={el.icon} /></a>
                        })}
                </SocialMediaLinks>
                <MenuIcon>
                <svg onClick={() => this.setState({showMenu: !this.state.showMenu})}  fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
                </MenuIcon>
            </NavBarWrapper>
            </NavBarFixed>
        )
    }


}

export default NavBar
