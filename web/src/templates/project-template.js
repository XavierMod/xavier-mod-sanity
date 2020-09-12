import React from 'react'
import {graphql, Link} from 'gatsby'
import Header from '../components/Layout/Header';
import styled from 'styled-components'
import Img from 'gatsby-image';
import H3 from '../components/Library/Style/H3'
import Footer from '../components/Footer/Footer'
import ButtonBack from '../components/Library/ButtonBack'
import Button from '../components/Library/Button'
import SEO from '../components/SEO';
import Snakke from 'react-snakke'
import RenderPortableText from '../functions/renderPortableText';
import { FaTimesCircle, FaCog, FaTags, FaExternalLinkAlt, FaRocket, FaCalendar, FaExclamationTriangle, FaTools } from 'react-icons/fa';
import { sizes, largerThan, smallerThan } from '../components/Helpers/mediaQueries';

const ImgWrapper = styled.div`
    position: relative;
    max-width: 700px;
    height: 300px;
    margin: 40px auto;
    z-index: -10;
`;

const ProjectTemplateWrapper = styled.div`
`;

const ProjectHeader = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    height: 122px;
    align-items: center;
    background: ${props => props.theme.colors.darkBackground};
    padding: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    ${smallerThan.tablet`
        top: 70px;
        height: 70px;
        z-index: 2000;
    `};
`;

const ProjectSubHeader = styled.div`
    background: ${props => props.theme.colors.darkBackground};
    margin-top: 122px;
    display: flex;
    justify-content: flex-start;
    z-index: -1000;

    li {
        display: block;
        margin: 30px;
        z-index: -1000;
    }

    ${smallerThan.tablet`
        background: none;
        display: block;
        margin-top: 120px;
        padding: 20px 0;
    `};
`;

const Column = styled.div`
    margin-left: 55px;
    max-width: 430px;

    li {
        display: flex;
        align-items: center;
        justify-content: left;
        line-height: 25px;

        a {
            text-decoration: none;
        }
    }

    ${smallerThan.tablet`
        margin-left: 0;
    `};
`;

const ProjectTitle = styled.div`
    font-size: 20px;
    font-weight: 700;
    z-index: 1000;

    h3 {
        display: inline-block;
        padding-right: 30px;
    }
`;

const ProjectHeaderButtons = styled.div`
    flex: 9;
    text-align: right;
    margin-right: 100px;

    .Button {
        display: inline-block;
        margin-left: 20px;
    }

    ${smallerThan.tablet`
        display: none;
    `};
`;

const ProjectHeaderButtonsMobile = styled(ProjectHeaderButtons)`
    display: none;

    ${smallerThan.tablet`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding-bottom: 30px;
    `};
`;

const InDevelopment = styled.div`
    display: inline-flex;
    background: white;
    color: black;
    padding: 8px;
    margin-left: 10px;
    border-radius: 5px;
    font-size: 14px;
`;

const OldProject = styled.div`
    display: inline-flex;
    background: rgb(255, 204, 0);
    padding: 8px;
    margin-left: 10px;
    border-radius: 5px;
    font-size: 14px;
    color: black;

    span {
        color: black;
        margin-left: 10px;
    }
`;

const Body = styled.div`
    padding: 80px;
    padding-bottom: 0;
    max-width: 1000px;
    margin: auto;

    ${smallerThan.tablet`
        padding: 25px;
        padding-top: 60px;
    `};
    
    p {
        font-size: 18px;
        line-height: 30px;
        margin: 35px 0;
    }
`;

const NoImage = styled.div`
    height: 200px !important;
    background: ${props => props.theme.colors.darkBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    color: grey;
    font-size: 20px;
`;

const Tag = styled.span`
    background: ${props => props.theme.colors.mainBackground};
    font-size: 12px;
    border: 1px solid white;
    padding: 3px 10px;
    border-radius: 100px;
    display: inline-block;
    margin-left: 12px;
`;

const TagFeatured = styled(Tag)`
    background: green;
    border: 1px solid green;
`;

const TechStackTag = styled(Tag)`
    background: white;
    color: black;
`;

const DescShort = styled.div`
    text-align: center;
    padding-top: 40px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        margin-left: 10px;
        font-size: 20px;
    }
`;

const Disabled = styled.div`
    background: black;
    display: inline-flex;
    padding: 13px;
    opacity: 0.6;
    border-radius: 5px;
    margin-right: 10px;
`;

const FooterButtons = styled.div`
    padding: 0 80px;
    max-width: 1000px;
    margin: auto;
    padding-bottom: 120px;
`;

const SnakkeWrapperDesktop = styled.div`
    ${smallerThan.tablet`
        display: none;
    `};
`;

const SnakkeWrapperMobile = styled.div`
    display: none;
    
    ${smallerThan.tablet`
        display: block;
    `};
`;

const projectTemplate = ({data}) => {
    const {
        date,
        descriptionShort,
        featuredImage,
        masterFeaturedProject,
        client,
        clientURL,
        techStackTags,
        slug,
        title,
        typeTags,
        _rawDescription,
        _rawLinks,
        _rawProjectAdditionalInfo,
        _rawProjectBody
    } = data.projects;

    console.log('PROJECTS', data.projects);

    return (
        <ProjectTemplateWrapper>  
            <SEO title={title} />
            <ProjectHeader>
                <ButtonBack route="/projects" direction="right" rotation="rotate(180deg)"/>
                <ProjectTitle>
                    <h3>{title}</h3>
                    {_rawProjectAdditionalInfo.inDevelopment ? <InDevelopment><FaTools style={{marginRight: '10px'}} />In development</InDevelopment> : null}
                    {_rawProjectAdditionalInfo.ageWarning ? <OldProject><FaExclamationTriangle /> <span>Old project</span></OldProject> : null}
                </ProjectTitle>
                <ProjectHeaderButtons>
                {_rawLinks && _rawLinks.githubLink !== undefined ? <Button 
                        type="primary"
                        width="70px"
                        link={_rawLinks.githubLink}
                        body="REPO"
                        iconSource="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg==" /> : <Disabled><FaTimesCircle style={{marginRight: '10px'}} />Repo Unavailable</Disabled>}
                    {_rawLinks && _rawLinks.liveDemo !== undefined ? <Button 
                        type="primary"
                        width="130px" 
                        link={_rawLinks.liveDemo}
                        body="Check Live"
                        iconSource="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC41NjYgMTcuODQyYy0uOTQ1IDIuNDYyLTMuNjc4IDQuMDEyLTYuNTYzIDQuMTYxLjEzOS0yLjc3MiAxLjY4NC01LjYwOCA0LjIwOS02LjU2M2wuNTEuNTIxYy0xLjUzNCAxLjUyMy0yLjA2MSAyLjc2NS0yLjE0NCAzLjQ2MS43MDQtLjA4NSAyLjAwNi0uNjA4IDMuNDgzLTIuMDk2bC41MDUuNTE2em0tMS4xMzYtMTEuMzQyYy0xLjc3OC0uMDEtNC4wNjIuOTExLTUuNzY2IDIuNjE0LS42NS42NDktMS4yMjIgMS40MDgtMS42NjQgMi4yNTggMS41MzgtMS4xNjMgMy4yMjgtMS40ODUgNS4xNDctLjQwOC41NjYtMS40OTQgMS4zMi0zLjAxNCAyLjI4My00LjQ2NHptNS4yMDQgMTcuNWMuODUyLS40NCAxLjYxLTEuMDEzIDIuMjYxLTEuNjY0IDEuNzA4LTEuNzA2IDIuNjIyLTQuMDAxIDIuNjA0LTUuNzgyLTEuNTc1IDEuMDMtMy4xMjUgMS43NzItNC40NjYgMi4yOTYgMS4wNzcgMS45Mi43NjQgMy42MTQtLjM5OSA1LjE1em0xMS4zMTItMjMuOTU2Yy0uNDI4LS4wMy0uODQ4LS4wNDQtMS4yNjEtLjA0NC05LjMzOCAwLTE0LjQ2NSA3LjQyNi0xNi4xMDEgMTMuMDA5bDQuNDI4IDQuNDI4YzUuNzgtMS44NTUgMTIuOTg4LTYuNzc3IDEyLjk4OC0xNS45OTN2LS4wNTljLS4wMDItLjQzNy0uMDE5LS44ODQtLjA1NC0xLjM0MXptLTUuOTQ2IDcuOTU2Yy0xLjEwNSAwLTItLjg5NS0yLTJzLjg5NS0yIDItMiAyIC44OTUgMiAyLS44OTUgMi0yIDJ6Ii8+PC9zdmc+" /> : <Disabled><FaTimesCircle style={{marginRight: '10px'}} />Live Unavailable</Disabled>}
                </ProjectHeaderButtons>
                <SnakkeWrapperDesktop>
                    <Snakke
                        color='#ffffff'
                        top='120px'
                        height='3px'
                        opacity='.8'
                        zIndex='10'
                    />
                </SnakkeWrapperDesktop>
                <SnakkeWrapperMobile>
                    <Snakke
                        color='#ffffff'
                        top='138px'
                        height='3px'
                        opacity='.8'
                        zIndex='10'
                    />
                </SnakkeWrapperMobile>
            </ProjectHeader>
            <ProjectSubHeader>
                    <Column>
                        <li>
                            <div>
                                <a href={clientURL} target="_blank">
                                    <span style={{fontWeight: '700'}}>Client</span>: {client}
                                </a>
                            </div>
                        </li>
                        <li>
                        <span>{date}</span>
                        </li>
                        {_rawProjectAdditionalInfo.ageWarning ? 
                        
                        <li>
                            <span><FaExclamationTriangle style={{color: 'rgb(255, 204, 0)',marginRight: '10px'}} />Project out of date.</span>
                        </li>
                        : null}
                    </Column>
                    <Column>
                        <li><FaTags />  
                        {typeTags.map((el, ind, arr) => {
                            if(el.title == 'Featured') {
                                return <TagFeatured>{el.title}</TagFeatured>
                            } else {
                                return <Tag>{el.title}</Tag>
                            }
                        })}
                        </li>  
                        <li><FaCog /> 
                        {techStackTags.map((el, ind, arr) => {
                            return <TechStackTag>{el}</TechStackTag>
                        })}
                        </li>  
                    </Column>
            </ProjectSubHeader>
            <ProjectHeaderButtonsMobile>
                {_rawLinks && _rawLinks.githubLink !== null ? <Button 
                        type="primary"
                        width="70px" 
                        link={_rawLinks.githubLink}
                        body="REPO"
                        iconSource="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg==" /> : <Disabled><FaTimesCircle style={{marginRight: '10px'}} />Repo Unavailable</Disabled>}
                    {_rawLinks && _rawLinks.liveDemo !== null ? <Button 
                        type="primary"
                        width="130px" 
                        link={_rawLinks.liveDemo}
                        body="Check Live"
                        iconSource="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC41NjYgMTcuODQyYy0uOTQ1IDIuNDYyLTMuNjc4IDQuMDEyLTYuNTYzIDQuMTYxLjEzOS0yLjc3MiAxLjY4NC01LjYwOCA0LjIwOS02LjU2M2wuNTEuNTIxYy0xLjUzNCAxLjUyMy0yLjA2MSAyLjc2NS0yLjE0NCAzLjQ2MS43MDQtLjA4NSAyLjAwNi0uNjA4IDMuNDgzLTIuMDk2bC41MDUuNTE2em0tMS4xMzYtMTEuMzQyYy0xLjc3OC0uMDEtNC4wNjIuOTExLTUuNzY2IDIuNjE0LS42NS42NDktMS4yMjIgMS40MDgtMS42NjQgMi4yNTggMS41MzgtMS4xNjMgMy4yMjgtMS40ODUgNS4xNDctLjQwOC41NjYtMS40OTQgMS4zMi0zLjAxNCAyLjI4My00LjQ2NHptNS4yMDQgMTcuNWMuODUyLS40NCAxLjYxLTEuMDEzIDIuMjYxLTEuNjY0IDEuNzA4LTEuNzA2IDIuNjIyLTQuMDAxIDIuNjA0LTUuNzgyLTEuNTc1IDEuMDMtMy4xMjUgMS43NzItNC40NjYgMi4yOTYgMS4wNzcgMS45Mi43NjQgMy42MTQtLjM5OSA1LjE1em0xMS4zMTItMjMuOTU2Yy0uNDI4LS4wMy0uODQ4LS4wNDQtMS4yNjEtLjA0NC05LjMzOCAwLTE0LjQ2NSA3LjQyNi0xNi4xMDEgMTMuMDA5bDQuNDI4IDQuNDI4YzUuNzgtMS44NTUgMTIuOTg4LTYuNzc3IDEyLjk4OC0xNS45OTN2LS4wNTljLS4wMDItLjQzNy0uMDE5LS44ODQtLjA1NC0xLjM0MXptLTUuOTQ2IDcuOTU2Yy0xLjEwNSAwLTItLjg5NS0yLTJzLjg5NS0yIDItMiAyIC44OTUgMiAyLS44OTUgMi0yIDJ6Ii8+PC9zdmc+" /> : <Disabled><FaTimesCircle style={{marginRight: '10px'}} />Live Unavailable</Disabled>}
            </ProjectHeaderButtonsMobile>
            <DescShort>
                <FaRocket /><p>{descriptionShort}</p>
            </DescShort>
            <ImgWrapper>
                {featuredImage !== null ? <Img style={{height: '400px'}} fluid={featuredImage.asset.fluid} /> : <NoImage>Image missing</NoImage>}
            </ImgWrapper>
            <Body>
                {_rawProjectBody !== null ? <RenderPortableText body={_rawProjectBody} /> : null}
            </Body>
            <FooterButtons>
                <Link to="/projects">
                    <Button 
                        type="primary"
                        width="190px" 
                        body="Back to projects"
                        iconSource="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC41NjYgMTcuODQyYy0uOTQ1IDIuNDYyLTMuNjc4IDQuMDEyLTYuNTYzIDQuMTYxLjEzOS0yLjc3MiAxLjY4NC01LjYwOCA0LjIwOS02LjU2M2wuNTEuNTIxYy0xLjUzNCAxLjUyMy0yLjA2MSAyLjc2NS0yLjE0NCAzLjQ2MS43MDQtLjA4NSAyLjAwNi0uNjA4IDMuNDgzLTIuMDk2bC41MDUuNTE2em0tMS4xMzYtMTEuMzQyYy0xLjc3OC0uMDEtNC4wNjIuOTExLTUuNzY2IDIuNjE0LS42NS42NDktMS4yMjIgMS40MDgtMS42NjQgMi4yNTggMS41MzgtMS4xNjMgMy4yMjgtMS40ODUgNS4xNDctLjQwOC41NjYtMS40OTQgMS4zMi0zLjAxNCAyLjI4My00LjQ2NHptNS4yMDQgMTcuNWMuODUyLS40NCAxLjYxLTEuMDEzIDIuMjYxLTEuNjY0IDEuNzA4LTEuNzA2IDIuNjIyLTQuMDAxIDIuNjA0LTUuNzgyLTEuNTc1IDEuMDMtMy4xMjUgMS43NzItNC40NjYgMi4yOTYgMS4wNzcgMS45Mi43NjQgMy42MTQtLjM5OSA1LjE1em0xMS4zMTItMjMuOTU2Yy0uNDI4LS4wMy0uODQ4LS4wNDQtMS4yNjEtLjA0NC05LjMzOCAwLTE0LjQ2NSA3LjQyNi0xNi4xMDEgMTMuMDA5bDQuNDI4IDQuNDI4YzUuNzgtMS44NTUgMTIuOTg4LTYuNzc3IDEyLjk4OC0xNS45OTN2LS4wNTljLS4wMDItLjQzNy0uMDE5LS44ODQtLjA1NC0xLjM0MXptLTUuOTQ2IDcuOTU2Yy0xLjEwNSAwLTItLjg5NS0yLTJzLjg5NS0yIDItMiAyIC44OTUgMiAyLS44OTUgMi0yIDJ6Ii8+PC9zdmc+" />
                </Link>
            </FooterButtons>
            <Footer />
        </ProjectTemplateWrapper>
    )
}

export const query = graphql`
  query($slug: String!) {
    projects: sanityProject(slug: { eq: $slug }) {
      title
      id
      slug
      masterFeaturedProject
      date
      techStackTags
      client
      clientURL
      typeTags {
        title
      }
      descriptionShort
      _rawLinks
      _rawDescription
      _rawProjectBody
      featuredImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawProjectAdditionalInfo
    }
  }
`;

export default projectTemplate
