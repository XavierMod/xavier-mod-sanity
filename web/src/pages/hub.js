import React from 'react'
import styled from 'styled-components'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import Logo from '../components/Library/Logo';
import HubBlock from '../components/Hub/HubBlock';
import Breadcrumbs from '../components/Library/Breadcrumbs';
import Footer from '../components/Footer/Footer';
import { sizes, largerThan, smallerThan } from '../components/Helpers/mediaQueries';

const HubWrapper = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;

    ${smallerThan.tablet`
        position: relative;
        height: 100vh;
    `};
`;

const BCWrapper = styled.div`
    z-index: 100;
    position: absolute;
    padding: 40px;
`;

const HubHeader = styled.div`
    height: 390px;
    background: ${props => props.theme.colors.darkBackground};
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
`;

const BackgroundWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

const ImageWrapper = styled.div`
    width: 800px;
    height: 100%;

    .gatsby-image-wrapper {
        height: 100%;
    }
`;

const BlocksWrapper = styled.div`
    position: absolute;
    width: 100%;
    top: 200px;
    padding: 60px;
    z-index: 1;

    ${smallerThan.tablet`
        top: 70px;
    `};
`;

const hub = ({data}) => {
    console.log(data);
    return (
        <HubWrapper>
            <BlocksWrapper>
                {data.hubOptions.edges.map((el, ind, arr) => {
                    return <HubBlock block={el.node} />
                })}
            </BlocksWrapper>
            <BCWrapper>
                <Breadcrumbs currentRoute="Hub" />
            </BCWrapper>
            <HubHeader>
                <BackgroundWrapper>
                    <ImageWrapper>
                        <Img objectFit="cover"
                        fluid={data.pattern.childImageSharp.fluid} />
                    </ImageWrapper>
                </BackgroundWrapper>
            </HubHeader>
            <Footer />
        </HubWrapper>
    )
}

export const query = graphql`
  query {
    pattern:file(name: { eq: "pattern" }) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  
    hubOptions: allSanityHubOption {
      edges {
        node {
          title
          description
          slug
          tags
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          comingSoon
        }
      }
    }
  }
`;


export default hub
