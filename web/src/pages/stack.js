import React from 'react'
import styled from 'styled-components'
import {graphql} from 'gatsby'
import Breadcrumbs from '../components/Library/Breadcrumbs';
import Stack from '../components/Library/stack/Stack';
import TechStack from '../components/Library/TechStack';
import Footer from '../components/Footer/Footer';
import { FaHeart, FaEye, FaSearch } from 'react-icons/fa';
import { sizes, largerThan, smallerThan } from '../components/Helpers/mediaQueries';

const StackWrapper = styled.div`
    height: 100%;
    width: 100%;
    top: 0;
    background-color: ${props => props.theme.colors.mainBackground};
`;

const Header = styled.div`
    margin: 10px 40px;
`;

const MainTitle = styled.h1`
    font-size: 30px;
    white-space: pre-wrap;
`;

const Subtitle = styled.h3`
  font-size: 15px;
  margin: 20px 0;
  font-weight: normal;
`;

const BCWrapper = styled.div`
    z-index: 100;
    padding: 40px;
`;

const ColumnsWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 40px;

    ${smallerThan.tablet`
      display: block;
    `};
`;

const Column = styled.div`
  margin-right: 70px;

  ${smallerThan.tablet`
      margin-right: 0;
  `};
`;

const ColumnHeader = styled.div`
  padding-bottom: 20px;

  ${smallerThan.tablet`
      padding: 30px 0;
  `};

  h1 {
    font-size: 15px;
  }

`;

const OtherTechnologies = styled.div`
  padding: 40px;
`;

const OtherTitle = styled.h1`
    font-size: 16px;
    margin-bottom: 20px;
`;

const Legend = styled.div`

`;

const Line = styled.div`
  padding: 10px 0;
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  margin-right: 20px;
`;

const stack = ({data}) => {
  console.log(data);
      return (
        <StackWrapper>
            <BCWrapper>
                <Breadcrumbs currentRoute="Stack" />
            </BCWrapper>
            <Header>
            <Subtitle>My Tech Stack</Subtitle>
              <MainTitle className="reveal-text">Master the front-end, understand the back-end, have an eye for design.</MainTitle>
              <Legend>
                <Line><FaHeart style={{marginRight: '10px'}} />Favorite tech</Line>
                <Line><FaEye color="#00cc00" style={{marginRight: '10px'}} />Current focus</Line>
                <Line><FaSearch style={{marginRight: '10px'}} />Willing to learn</Line>
              </Legend>
            </Header>
            <ColumnsWrapper>
                <Column>
                  <ColumnHeader><h1>Front-End (65%)</h1></ColumnHeader>
                  {data.block.edges.map((el, ind, arr) => {
                          if (el.node.typeTags[0].typeID == 'front-end-development' && !el.node.pending) {
                            return <Stack el={el.node} />
                          }
                    })}
                </Column>
                <Column>
                  <ColumnHeader><h1>Full-Stack (15%)</h1></ColumnHeader>
                  {data.block.edges.map((el, ind, arr) => {
                          if (el.node.typeTags[0].typeID == 'full-stack-development' && !el.node.pending) {
                            return <Stack el={el.node} />
                          }
                    })}
                </Column>
                <Column>
                  <ColumnHeader><h1>UI Design (20%)</h1></ColumnHeader>
                  {data.block.edges.map((el, ind, arr) => {
                          if (el.node.typeTags[0].typeID == 'ui-design' && !el.node.pending) {
                            return <Stack el={el.node} />
                          }
                    })}
                </Column>
            </ColumnsWrapper>
            <OtherTechnologies>
              <OtherTitle>Software I'd like to learn</OtherTitle>
              {data.block.edges.map((el, ind, arr) => {
                  if (el.node.pending) {
                    return <Stack el={el.node} />
                  }
              })}
            </OtherTechnologies>
            <OtherTechnologies>
              <OtherTitle>Other Skills</OtherTitle>
              {data.block.edges.map((el, ind, arr) => {
                  if (el.node.pending) {
                    return <Stack el={el.node} />
                  }
              })}
            </OtherTechnologies>
        </StackWrapper>
    )
}

export const query = graphql`
  query {
  	block:allSanityTechStackBlock {
      edges {
        node {
          title
          icon {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          typeTags {
            typeID
            title
          }
          percentage
          url
          favourite
          pending
          focusing
        }
      }
    }
  }
`;
export default stack
