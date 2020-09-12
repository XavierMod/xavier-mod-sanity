import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components'

const ImageWrapper = styled.div`
    z-index: -100;
    width: 50px;
    height: 50px;
    background: none;
    border: 4px solid #2d3138;
    padding: 10px;
    cursor: pointer;
`;

const ProfilePic = () => {
    const data = useStaticQuery(getImage);
    return (
        <ImageWrapper>
            <Img fluid={data.fluid.childImageSharp.fluid}/>
        </ImageWrapper>
    )
}

const getImage = graphql`
{    
    fluid:file(relativePath: {eq: "xm.png"}) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
}
`;

export default ProfilePic