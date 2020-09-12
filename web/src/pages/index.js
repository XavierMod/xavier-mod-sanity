import React, {Component} from 'react'
import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import SEO from '../components/SEO';
import NavBar from '../components/NavBar/NavBar';
import MobileHeader from '../components/Headers/MobileHeader'
import WordsPattern from '../components/Landing/WordsPattern';
import Button from '../components/Library/Button'
import Drawing from '../components/Library/Drawing'
import { sizes, largerThan, smallerThan } from '../components/Helpers/mediaQueries';
import DrawingPattern from '../components/Library/DrawingPattern';
import ContentLayout from '../components/Layout/ContentLayout';
import DesktopHeader from '../components/Headers/DesktopHeader'
import SocialLinks from '../components/Library/SocialLinks'
import ThreeHome from '../three-components/ThreeHome';

const MobileWrapper = styled.div`
    height: 100vh;
    overflow: hidden;

    ${largerThan.tablet`
        display: none;
    `};
`;

const DesktopWrapper = styled.div`
    display: block;
    position: relative;
    width: 100%;
    height: 100vh !important;
    margin: auto;
`;

const DrawingPatternWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: none;
    opacity: 0.7;
`;

const WordsPatternWrapper = styled.div`
    margin: auto;
    display: block;
    max-width: 700px;
`;

const TextCenter = styled.div`
    text-align: center;
    padding-top: 300px;

    p {
        margin: 20px 0;
    }
`;

class index extends Component {
        render () {
            return (
                <>
                    <SEO title="Home" description="Xavier Mod's Landing page." />
                    <MobileWrapper>
                        <MobileHeader />
                        <WordsPatternWrapper>
                            <WordsPattern />
                        </WordsPatternWrapper>
                        <TextCenter>
                            <h1>I'm Xavier Mod</h1>
                            <p>I build things. Oh boy it’s great!</p>
                            <AniLink paintDrip to="hub" hex="#21252b" duration={1}>
                            <Button 
                                type="primary" 
                                body="Come on in"
                                width="180px"
                                iconSource="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMCAyM2gydjFoLTIwdi0xaDJ2LTIzaDE2djIzem0tMS0yMmgtMTR2MjJoMTRsLTEwLTEuOTU0di0xOC4wMTVsMTAtMi4wMzF6bS03IDExaC0ydjFoMnYtMXoiLz48L3N2Zz4=" />                            
                            </AniLink>
                        </TextCenter>
                        <Drawing />
                    </MobileWrapper>
                    <DesktopWrapper>
                        <ThreeHome />
                        <SocialLinks />
                    </DesktopWrapper>
                </>
        )
    }
}

export default index

