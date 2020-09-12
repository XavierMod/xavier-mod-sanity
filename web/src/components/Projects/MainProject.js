import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Button from '../Library/Button'
import RenderPortableText from '../../functions/RenderPortableText';
import { sizes, largerThan, smallerThan } from '../../components/Helpers/mediaQueries';

const MainProjectWrapper = styled.div`
    position: relative;
    margin: -70px;
    z-index: 1;

    ${smallerThan.tablet`
        display: none;
    `};
`;

const ImgWrapper = styled.div`
    opacity: 0.2;
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 70px;
    width: 60%;
    height: 100%;
    z-index: 1000;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0.6096813725490196) 0%, rgba(20,22,26,1) 100%);
    z-index: 100;
`;

const Author = styled.div`
    letter-spacing: 15px;
    font-size: 11px;
    margin-bottom: 10px;
`;

const Title = styled.div`
    font-weight: 700;
    text-transform: uppercase;
    font-size: 65px;
    margin-bottom: 20px;
`;

const Desc = styled.div`
    p {
        opacity: 0.8;
        letter-spacing: 0px;
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
    }
`;

const NoImage = styled.div`
    height: 500px;
`;

const MainProject = (props) => {
    console.log(props.project._rawLinks.liveDemo);
    return (
        <MainProjectWrapper>
                <Overlay />
                <Info>
                    <Author>XMOD ORIGINAL</Author>
                    <Title className="reveal-text">{props.project.title}</Title>
                    <Desc>
                        <RenderPortableText body={props.project._rawDescription} />
                    </Desc>
                    <Button 
                    type="primary"
                    width="130px" 
                    link={`projects/${props.project.slug}`}
                    body="EXPLORE"
                    iconSource="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC41NjYgMTcuODQyYy0uOTQ1IDIuNDYyLTMuNjc4IDQuMDEyLTYuNTYzIDQuMTYxLjEzOS0yLjc3MiAxLjY4NC01LjYwOCA0LjIwOS02LjU2M2wuNTEuNTIxYy0xLjUzNCAxLjUyMy0yLjA2MSAyLjc2NS0yLjE0NCAzLjQ2MS43MDQtLjA4NSAyLjAwNi0uNjA4IDMuNDgzLTIuMDk2bC41MDUuNTE2em0tMS4xMzYtMTEuMzQyYy0xLjc3OC0uMDEtNC4wNjIuOTExLTUuNzY2IDIuNjE0LS42NS42NDktMS4yMjIgMS40MDgtMS42NjQgMi4yNTggMS41MzgtMS4xNjMgMy4yMjgtMS40ODUgNS4xNDctLjQwOC41NjYtMS40OTQgMS4zMi0zLjAxNCAyLjI4My00LjQ2NHptNS4yMDQgMTcuNWMuODUyLS40NCAxLjYxLTEuMDEzIDIuMjYxLTEuNjY0IDEuNzA4LTEuNzA2IDIuNjIyLTQuMDAxIDIuNjA0LTUuNzgyLTEuNTc1IDEuMDMtMy4xMjUgMS43NzItNC40NjYgMi4yOTYgMS4wNzcgMS45Mi43NjQgMy42MTQtLjM5OSA1LjE1em0xMS4zMTItMjMuOTU2Yy0uNDI4LS4wMy0uODQ4LS4wNDQtMS4yNjEtLjA0NC05LjMzOCAwLTE0LjQ2NSA3LjQyNi0xNi4xMDEgMTMuMDA5bDQuNDI4IDQuNDI4YzUuNzgtMS44NTUgMTIuOTg4LTYuNzc3IDEyLjk4OC0xNS45OTN2LS4wNTljLS4wMDItLjQzNy0uMDE5LS44ODQtLjA1NC0xLjM0MXptLTUuOTQ2IDcuOTU2Yy0xLjEwNSAwLTItLjg5NS0yLTJzLjg5NS0yIDItMiAyIC44OTUgMiAyLS44OTUgMi0yIDJ6Ii8+PC9zdmc+" />
                </Info>
            <ImgWrapper>
                {props.project.featuredImage !== null ? <Img style={{height: '500px'}} fluid={props.project.featuredImage.asset.fluid} /> : <NoImage />}
            </ImgWrapper>
        </MainProjectWrapper>
    )
}

export default MainProject
