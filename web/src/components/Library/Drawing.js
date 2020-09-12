import React from 'react'
import profilePic from '../../images/profilePic.png'
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components'

const ImageWrapper = styled.div`
    width: 60%;
    padding-top: 40px;
    margin: auto;
    z-index: -100;
    overflow: hidden;
`;

const ProfilePic = () => {
    const data = useStaticQuery(getImage);
    return (
        <React.Fragment>
        <ImageWrapper><Img fluid={data.fluid.childImageSharp.fluid}/></ImageWrapper>
        </React.Fragment>
    )
}

const getImage = graphql`
{    
    fluid:file(relativePath: {eq: "xm-draw-white.png"}) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
}
`;

export default ProfilePic
