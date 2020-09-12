import React, {Component, useState} from 'react'
import styled from 'styled-components';
import SEO from '../components/SEO';
import { sizes, largerThan, smallerThan } from '../components/Helpers/mediaQueries';
import ProfilePic from '../components/Library/ProfilePic';
import TechStack from '../components/Library/TechStack';
import {graphql} from 'gatsby'
import RenderPortableText from '../functions/renderPortableText';
import Stepper from '../components/Library/Stepper';
import { FaSmile, FaBriefcase } from 'react-icons/fa';
import Button from '../components/Library/Button'
import { FaHiking } from 'react-icons/fa';
import Img from 'gatsby-image'
import Breadcrumbs from '../components/Library/Breadcrumbs';
import Footer from '../components/Footer/Footer';

const AboutContent = styled.div`
    font-family: 'Noto Serif KR';
    letter-spacing: -1.3px;
    display: flex;
    margin-bottom: 70px;
    padding: 0 100px;

    ${smallerThan.tablet`
        padding: 10px 30px;
        display: block;
    `};
`;

const AboutPageWrapper = styled.div`
`;

const BCWrapper = styled.div`
    position: absolute;
    padding: 40px;
    z-index: 1000;
`;

const ImageWrapper = styled.div`
    height: 600px;
    position: relative;

    ${smallerThan.tablet`
        height: 500px;
    `};

    .gatsby-image-wrapper {
        opacity: 0.2;

        ${smallerThan.tablet`
            height: 500px !important;
        `};
    }

    h1 {
        font-size: 35px;
    }

    img {
        object-position: 10% 15% !important;
    }
`;

const TopLine = styled.div`
    position: absolute;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    ${smallerThan.tablet`
        h1 {
            white-space: pre-wrap;
            text-align: center;
            padding: 10px;
        }
    `};
`;

const Title = styled.div`
    flex: 0.5;
    font-size: 40px;
    font-weight: 700;

	-webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;

    ${smallerThan.tablet`
        display: none;
    `};
`;

const Description = styled.div`
    flex: 5;
`;

const Paragraph = styled.div`
    line-height: 40px;
    padding-bottom: 30px;
    padding-right: 30px;

    p {
        font-size: 20px;
        letter-spacing: 0.5px;
    }

    a {
        color: grey;
        text-decoration: none;
    }
`;

const PaddingTop = styled.div`
    padding-top: 70px;

    ${smallerThan.tablet`
        padding-top: 0;
    `};
`;

const About = (props) => {
    const { _rawContentDescription, _rawExperience, _rawEducation, aboutDescription, aboutTitle, mainImage } = props.data.site;

    const [ defaultView, setDefaultView ] = useState(false);
    const [ showTechStack, setShowTechStack ] = useState(false);

    console.log('props', props);

    return (
        <>
            <SEO title="About" />
            <AboutPageWrapper>
                <BCWrapper>
                    <Breadcrumbs currentRoute="About Me" />
                </BCWrapper>
                <ImageWrapper>
                    <TopLine>
                        <h1 className="reveal-text">{aboutTitle}</h1>
                    </TopLine>
                    <Img 
                    style={{height: '600px'}} fluid={mainImage.asset.fluid} />
                </ImageWrapper>
                <PaddingTop />
                <AboutContent>
                    <Title className="disableMobile">
                        <FaHiking style={{marginRight: '15px'}} />
                    </Title>
                    <Stepper />
                </AboutContent>
                <AboutContent>
                    <Title>
                        <FaSmile />
                    </Title>
                    <Description>
                        <Paragraph>
                            <RenderPortableText body={_rawContentDescription} />
                        </Paragraph>
                        <Button 
                            type="primary"
                            width="180px" 
                            body="MORE ABOUT ME"
                            iconSource="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAuODIyIDE4LjA5NmMtMy40MzktLjc5NC02LjY0LTEuNDktNS4wOS00LjQxOCA0LjcyLTguOTEyIDEuMjUxLTEzLjY3OC0zLjczMi0xMy42NzgtNS4wODIgMC04LjQ2NCA0Ljk0OS0zLjczMiAxMy42NzggMS41OTcgMi45NDUtMS43MjUgMy42NDEtNS4wOSA0LjQxOC0zLjA3My43MS0zLjE4OCAyLjIzNi0zLjE3OCA0LjkwNGwuMDA0IDFoMjMuOTlsLjAwNC0uOTY5Yy4wMTItMi42ODgtLjA5Mi00LjIyMi0zLjE3Ni00LjkzNXoiLz48L3N2Zz4=" />
                    </Description>
                </AboutContent>
                <AboutContent>
                    <Title>
                        <FaBriefcase />
                    </Title>
                    <Description>
                        <Paragraph>
                            <RenderPortableText body={_rawExperience} />
                        </Paragraph>
                        <Button 
                            type="primary"
                            width="180px" 
                            body="LINKEDIN"
                            iconSource="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwdjI0aDI0di0yNGgtMjR6bTggMTloLTN2LTExaDN2MTF6bS0xLjUtMTIuMjY4Yy0uOTY2IDAtMS43NS0uNzktMS43NS0xLjc2NHMuNzg0LTEuNzY0IDEuNzUtMS43NjQgMS43NS43OSAxLjc1IDEuNzY0LS43ODMgMS43NjQtMS43NSAxLjc2NHptMTMuNSAxMi4yNjhoLTN2LTUuNjA0YzAtMy4zNjgtNC0zLjExMy00IDB2NS42MDRoLTN2LTExaDN2MS43NjVjMS4zOTctMi41ODYgNy0yLjc3NyA3IDIuNDc2djYuNzU5eiIvPjwvc3ZnPg==" />
                    </Description>
                </AboutContent>
                <AboutContent>
                    <Title>
                        <FaSmile />
                    </Title>
                    <Description>
                        <Paragraph>
                            <RenderPortableText body={_rawEducation} />
                        </Paragraph>
                    </Description>
                </AboutContent>
                <br />
                <br />
                <Footer />
            </AboutPageWrapper>
        </>
    )
}

export const query = graphql`
   query IndexPageQuery {
     site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
       title
       description
       keywords
       aboutTitle
       _rawContentDescription
       _rawExperience
       _rawEducation
       mainImage {
         asset {
           fluid {
             ...GatsbySanityImageFluid
           }
         }
       }
     }
   }
`;


export default About;

