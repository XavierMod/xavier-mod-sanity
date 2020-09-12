import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { FaHeart, FaEye, FaSearch } from 'react-icons/fa';
import { sizes, largerThan, smallerThan } from '../../../components/Helpers/mediaQueries';

const Wrapper = styled.div`
    display: flex;
    padding: 10px 5px;
    width: 280px;
    position: relative;

    ${smallerThan.tablet`
      width: 100%;
  `};
`;

const IconWrapper = styled.div`
    padding-right: 20px;

    .gatsby-image-wrapper {
        width: 20px;
        height: 20px;
        img {
            object-fit: cover;
        }
    }
`;

const InfoWrapper = styled.div`
    width: 100%;
`;

const Title = styled.h1`
    font-size: 13px;
    font-weight: normal;
    margin-bottom: 10px;
`;

const TotalBar = styled.div`
    width: 100%;
    background-color: black;
    padding: 3px;
    margin: 5px 0;
    position: relative;
`;

const ActiveBar = styled.div`
    position: absolute;
    background-color: ${props => props.focusing ? '#00cc00' :  '#515C71'};
    width: ${props => props.percentage}%;
    top: 0%;
    left: 0;
    height: 100%;
`;

const Tags = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 4px;

    svg {
        width: 12px;
        margin: 0;
    }
`;

const Tag = styled.div`
    padding: 2px 3px;
`;

const block = (props) => {
    return (
        <Wrapper>
            <Tags>
                {props.el.favourite ? <FaHeart color="white" style={{marginRight: '5px'}} /> : null}
                {props.el.focusing ? <FaEye color="#00cc00" /> : null}
                {props.el.pending ? <FaSearch color="white" /> : null}
            </Tags>
            <IconWrapper>
                <Img fluid={props.el.icon.asset.fluid} />
            </IconWrapper>
            <InfoWrapper>
                <Title className="reveal-text">{props.el.title}</Title>
                <TotalBar>
                    <ActiveBar 
                        focusing={props.el.focusing}
                        percentage={props.el.percentage}/>
                </TotalBar>
            </InfoWrapper>
        </Wrapper>
    )
}

export default block
