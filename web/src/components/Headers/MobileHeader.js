import React, { useState } from 'react';
import styled from 'styled-components'
import ContentLayout from '../Layout/ContentLayout'
import Logo from '../Library/Logo'
import {Toggle} from "react-toggle-component"
import { FaComments, FaGithub, FaLinkedin, FaTh } from 'react-icons/fa';
import {Link} from "gatsby";

const MobileHeaderW = styled.div`
    background: ${props => props.theme.colors.darkBackground};
    padding: 10px 20px;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
    position: fixed;
    width: 100%;
    z-index: 1000;
`;

const ToggleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LogoWrapper = styled.div`
    flex: 5;
`;

const ContactMe = styled.a`
    background: white;
    border-radius: 100px;
    height: 35px;
    width: 35px;
    margin-left: 5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
    span {
        color: black;
        font-size: 14px;
        font-weight: 700;
        margin: 0;
    }
`;

const HubButton = styled(ContactMe)`
    background: none;
    color: white;
    border: 2px solid white;
    font-size: 13px;
    margin-left: 20px;
`;

const MobileHeader = () => {
    return (
        <MobileHeaderW>
            <ContentLayout>
                <FlexWrapper>
                    <LogoWrapper>
                        <Link to="/">
                            <Logo />
                        </Link>
                    </LogoWrapper>
                    <ToggleWrapper>
                        <ContactMe target="_blank" href="mailto:hi.xavier.mod@gmail.com">
                            <FaComments style={{color: 'black'}} />
                        </ContactMe>
                        <ContactMe target="_blank" href="https://www.linkedin.com/in/xavier-mod-22a25964/">
                            <FaLinkedin style={{color: 'black'}} />
                        </ContactMe>
                        <ContactMe target="_blank" href="https://github.com/XavierMod">
                            <FaGithub style={{color: 'black'}} />
                        </ContactMe>
                        <ContactMe target="_blank" href="https://drive.google.com/file/d/1zmBIHfi6TUfbZOdqXWy2ZgGFMhUBGfk3/view">
                            <span>CV</span>
                        </ContactMe>
                        <Link to={"/hub"}>
                            <HubButton target="_blank" href="mailto:hi.xavier.mod@gmail.com">
                                <FaTh />
                            </HubButton>
                        </Link>
                        
                    </ToggleWrapper>
                </FlexWrapper>
            </ContentLayout>
        </MobileHeaderW>
    )
}

export default MobileHeader

