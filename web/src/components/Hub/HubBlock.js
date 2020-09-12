import React, { useState } from 'react'
import styled from 'styled-components'
import { FaArrowCircleRight, FaLock } from 'react-icons/fa';
import Img from 'gatsby-image'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { sizes, largerThan, smallerThan } from '../../components/Helpers/mediaQueries';

const Block = styled.div`
    display: inline-block;
    width: 260px;
    height: 300px;
    box-shadow: 1px 1px 5px #0f0f0f;
    position: relative;
    border-radius: 0px;
    overflow: hidden;
    background: white;
    margin-right: 20px;
    pointer-events: ${props => props.deactivated ? 'none' : 'all'};
    -webkit-animation: fade-from-left 1s ease;
	        animation: fade-from-left 1s ease;

    ${smallerThan.tablet`
        width: 100%;
        display: block;
        margin: 50px 0;
        box-shadow: 1px 1px 20px #0f0f0f;
    `};
`;

const BlockImageWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
`;

const Background =styled.div`
    height: 100%;
    background: ${props => props.theme.colors.darkBackground};
`;

const BlockInfo = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    z-index: 1;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(20,22,26,1) 100%);
    padding: 20px;

    span {
        font-size: 13px;
        display: inline-block;
        opacity: 0.5;
        margin-top: 10px;
    }
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;

    h1 {
        font-size: 25px;
        margin-right: 30px;
    }
`;

const Tags = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    padding: 10px;
`;

const Tag = styled.span`
    background-color: white;
    padding: 5px 10px;
    border-radius: 2px;
    color: ${props => props.theme.colors.darkBackground};
    margin-left: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;

    &.new {
        background-color: rgb(0, 153, 51);
        color: white;
    }

    &.comingSoon {
        background-color: #6666ff;
        color: white;
    }
`;

const HubBlock = (props) => {

    const [ hover, setHover ] = useState(false);

    return (
       <AniLink paintDrip hex="#21252b" to={`/${props.block.slug}`} duration={1}>
            <Block
                deactivated={props.block.comingSoon} 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                <Tags>
                    {props.block.tags.map((el, ind, arr) => {
                        if (el == 'New') {
                            return <Tag className="new">{el}</Tag>
                        } else {
                            return <Tag>{el}</Tag>
                        }
                    })}

                    {props.block.comingSoon ? <Tag className="comingSoon">Coming Soon</Tag> : null}
                </Tags>
                <BlockInfo>
                    <Title>
                        <h1 className="reveal-text">{props.block.title}</h1>
                        <FaArrowCircleRight
                        style={{position: 'absolute', right: '10px', transform: 'scale(1.5)'}} />
                    </Title>
                    <span>{props.block.description}</span>
                </BlockInfo>
                <BlockImageWrapper>
                    {props.block.image !== null ? <Img 
                    objectFit="cover" 
                    style={{height: '100%', 
                    transition: 'all ease .4s',
                    transform: hover ? 'scale(1.3)' : null}} 
                    fluid={props.block.image.asset.fluid} /> : <Background />}
                </BlockImageWrapper>
            </Block>
        </AniLink>
    )
}

export default HubBlock
