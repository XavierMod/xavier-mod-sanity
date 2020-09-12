import React from 'react'
import profilePic from '../../images/profilePic.png'
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components'

const ImageWrapper = styled.div`
    width: 100%;
    z-index: -100;
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
    fixed:file(relativePath: {eq: "profilePic.png"}){
        childImageSharp {
            fixed(width: 90) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    
    fluid:file(relativePath: {eq: "profilePic.png"}) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
}
`;

export default ProfilePic
