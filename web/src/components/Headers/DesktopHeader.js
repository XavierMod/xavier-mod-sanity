import React from 'react'
import styled from 'styled-components'
import Logo from '../Library/Logo'
import Icon from '../Library/Icons/Icon'
import Button from '../Library/Button'
import HubButton from '../Library/HubButton'
import { FaComments, FaGithub, FaLinkedin } from 'react-icons/fa';
import {Link} from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const DesktopHeaderW = styled.div`
    background: ${props => props.theme.colors.darkBackground};
    padding: 15px;
    border-left: 0.5px solid rgba(255, 255, 255, 0.1);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    right: 0;
    height: 100%;
`;

const LogoWrapper = styled.div`
    flex: 10;
    background: none;
    display: flex;
    align-items: center;
    margin-top: 60px;
`;

const ButtonsWrapper = styled.div`
 `;

const NextWrapper = styled.div`
    flex: 60;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
`;

const HubButtonWrapper = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
`;

const ContactMe = styled.a`
    background: white;
    border-radius: 100px;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 18px;
`;

const DesktopHeader = () => {
    return (
        <DesktopHeaderW>
            <HubButtonWrapper>
                <Link to="/hub">
                    <HubButton />
                </Link>
            </HubButtonWrapper>
            <Link to="/">
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
            </Link>
            <ButtonsWrapper>
                <Button 
                    type="primary"
                    width="50px" 
                    link="https://drive.google.com/file/d/1zmBIHfi6TUfbZOdqXWy2ZgGFMhUBGfk3/view?usp=sharing"
                    body="CV"
                    iconSource="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTEuMzYzIDJjNC4xNTUgMCAyLjYzNyA2IDIuNjM3IDZzNi0xLjY1IDYgMi40NTd2MTEuNTQzaC0xNnYtMjBoNy4zNjN6bS44MjYtMmgtMTAuMTg5djI0aDIwdi0xNC4zODZjMC0yLjM5MS02LjY0OC05LjYxNC05LjgxMS05LjYxNHptNC44MTEgMTNoLTIuNjI4djMuNjg2aC45MDd2LTEuNDcyaDEuNDl2LS43MzJoLTEuNDl2LS42OThoMS43MjF2LS43ODR6bS00LjkgMGgtMS41OTl2My42ODZoMS41OTljLjUzNyAwIC45NjEtLjE4MSAxLjI2Mi0uNTM1LjU1NS0uNjU4LjU4Ny0yLjAzNC0uMDYyLTIuNjkyLS4yOTgtLjMtLjcxMi0uNDU5LTEuMi0uNDU5em0tLjY5Mi43ODNoLjQ5NmMuNDczIDAgLjgwMi4xNzMuOTE1LjY0NC4wNjQuMjY3LjA3Ny42NzktLjAyMS45NDgtLjEyOC4zNTEtLjM4MS41MjgtLjc1NC41MjhoLS42Mzd2LTIuMTJ6bS0yLjc0LS43ODNoLTEuNjY4djMuNjg2aC45MDd2LTEuMjc3aC43NjFjLjYxOSAwIDEuMDY0LS4yNzcgMS4yMjQtLjc2My4wOTUtLjI5MS4wOTUtLjU5NyAwLS44ODUtLjE2LS40ODQtLjYwNi0uNzYxLTEuMjI0LS43NjF6bS0uNzYxLjczMmguNTQ2Yy4yMzUgMCAuNDY3LjAyOC41NzYuMjI4LjA2Ny4xMjMuMDY3LjM2NiAwIC40ODktLjEwOS4xOTktLjM0MS4yMjctLjU3Ni4yMjdoLS41NDZ2LS45NDR6Ii8+PC9zdmc+" />
            </ButtonsWrapper>
            <ButtonsWrapper>
                <Link to="/stack">
                    <Button 
                        type="primary"
                        width="50px" 
                        body="TS"
                        iconSource="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMTAuOTM1djIuMTMxbC04IDMuOTQ3di0yLjIzbDUuNjQtMi43ODMtNS42NC0yLjc5di0yLjIyM2w4IDMuOTQ4em0tMTYgMy44NDhsLTUuNjQtMi43ODMgNS42NC0yLjc5di0yLjIyM2wtOCAzLjk0OHYyLjEzMWw4IDMuOTQ3di0yLjIzem03LjA0Ny0xMC43ODNoLTIuMDc4bC00LjAxMSAxNmgyLjA3M2w0LjAxNi0xNnoiLz48L3N2Zz4=" />
                </Link>
            </ButtonsWrapper>
            <NextWrapper>
                <ContactMe target="_blank" href="https://www.linkedin.com/in/xavier-mod-22a25964/">
                    <FaLinkedin style={{color: 'black'}} />
                </ContactMe>
                <ContactMe target="_blank" href="https://github.com/XavierMod">
                    <FaGithub style={{color: 'black'}} />
                </ContactMe>
                <ContactMe target="_blank" href="mailto:hi.xavier.mod@gmail.com">
                    <FaComments style={{color: 'black'}} />
                </ContactMe>
            </NextWrapper>
        </DesktopHeaderW>
    )
}

export default DesktopHeader
