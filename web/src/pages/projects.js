import React, { useState } from 'react';
import Layout from '../components/Layout/Layout'
import styled from 'styled-components';
import H3 from '../components/Library/Style/H3';
import {useStaticQuery, graphql} from 'gatsby';
import RenderProjects from '../components/Projects/RenderProjects';
import ProjectsNavBar from '../components/Projects/ProjectsNavBar';
import Footer from '../components/Footer/Footer';
import RenderProjectsMobile from '../components/Library/RenderProjectsMobile';

const ProjectsWrapper = styled.div`
`;

const Projects = (props) => {    
    const [ tabs, setTabs ] = useState(props.data.types.edges);
    const [ activeTab, setActiveTab ] = useState(tabs[0].node);

    console.log(props);

    return (
        <ProjectsWrapper>
            <ProjectsNavBar 
                setActiveTab={(el) => setActiveTab(el)}
                activeTab={activeTab}
                tabs={tabs} />
            <RenderProjects 
                masterFeaturedProject={props.data.masterFeaturedProject}
                activeTab={activeTab}
                projects={props.data.projects.edges} />
            <RenderProjectsMobile projects={props.data.projects.edges} />
            {/*<Footer />*/}
        </ProjectsWrapper>
    )
};

export const query = graphql`
    query {
      projects: allSanityProject(sort: { fields: [date], order: ASC }) {
        edges {
          node {
            title
            slug
            masterFeaturedProject
            date
            typeTags {
              typeID
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
      }
    
      types: allSanityTypes(sort: { fields: [position], order: ASC }) {
        edges {
          node {
            description
            position
            percentage
            title
            titleNavBar
            typeID
          }
        }
      }

      masterFeaturedProject: sanityProject(masterFeaturedProject: { eq: true }) {
            title
            slug
            date
            descriptionShort
            typeTags {
                typeID
            }
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
`

export default Projects;