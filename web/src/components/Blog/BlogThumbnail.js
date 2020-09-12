import React from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image';
import {Link} from 'gatsby'
import { sizes, largerThan, smallerThan } from '../Helpers/mediaQueries';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const MainWrapper = styled.div`
    max-width: 600px;
    margin: auto;
    position: relative;
    cursor: pointer;
    margin-bottom: 100px;
    padding: 30px;
    -webkit-animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

    a {
        text-decoration: none;
        color: white;
    }

    p {
        font-family: 'Noto Serif KR';
    }

    ${smallerThan.tablet`
        margin: 90px auto;
        padding: 10px;
    `};
`;

const Info = styled.div`
    h1 {
        font-weight: 500;
        display: block;
        font-size: 50px;
        margin: 20px 0;
        font-family: 'DM Serif Display';
        line-height: 70px;

        ${smallerThan.tablet`
            font-size: 30px;
            line-height: 30px;
        `};
    }
`;

const SubHeading = styled.div`
    margin: 5px 0;
    opacity: 0.4;
`;

const InfoTime = styled.div`
    font-size: 20px;
    display: inline-block;

    ${smallerThan.tablet`
         font-size: 20px;
    `};
`;

const ShortDescription = styled.div`
    font-size: 20px;
    line-height: 1.5;
    opacity: 0.5;
    padding-top: 10px;

    ${smallerThan.tablet`
         font-size: 20px;
    `};
`;

const BlogThumbnail = (props) => {
    const { title, slug, description, date, image:{fluid} } = props.post;
    return (
        <MainWrapper>
            <AniLink cover bg="#000000" to={"/blog/" + slug}>
                <Info>
                    <SubHeading>
                        <InfoTime>{date}</InfoTime>
                    </SubHeading>
                        <h1>{title}</h1>
                    <ShortDescription>
                        <p>{description}</p>
                    </ShortDescription>
                </Info>
            </AniLink>
        </MainWrapper>
    )
}

export default BlogThumbnail
