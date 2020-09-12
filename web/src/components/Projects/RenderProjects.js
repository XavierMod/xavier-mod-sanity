import React from 'react'
import styled from 'styled-components';
import ProjectThumbnail from './ProjectThumbnail';
import MasterFeaturedProject from './MasterFeaturedProject';
import { sizes, largerThan, smallerThan } from '../../components/Helpers/mediaQueries';

const RenderProjectsWrapper = styled.div`
    padding: 70px;
    text-align: left;

    ${smallerThan.tablet`
        padding: 20px;
        display: none;
    `};
`;

const Header = styled.div`
    p {
        margin-bottom: 30px;
        padding-top: 20px;
        opacity: 0.3;
        font-size: 16px;
    }
`;

const Percentage = styled.span`
    display: inline-block;
    background: white;
    color: black;
    padding: 5px 5px;
    border-radius: 3px;
    margin-left: 10px;
`;

const AllAndNew = styled.div`

`;

const All = styled.div`
    z-index: 1;
    padding-top: 70px;

    h3 {
        padding-bottom: 30px;
    }
`;

const RenderProjects = (props) => {

    const renderBasedOnId = (getID) => {
        return props.projects.map((mainEl, ind, arr) => {
            return mainEl.node.typeTags.map((el, ind, arr) => {
                if (el.typeID == getID) {
                    return (
                        <ProjectThumbnail
                            projectData={mainEl}
                        />
                    )
                }
            });
        })
    }

    const renderProjects = () => {

        // Render Featured Tab
        if (props.activeTab.typeID == 'all-and-new') {
            return (
                <AllAndNew>
                    {props.masterFeaturedProject ? <MasterFeaturedProject projects={props.masterFeaturedProject} /> : null}
                    <All>
                        <h3>⭐ Featured</h3>
                        {renderBasedOnId('featured')}
                        <h3>🔥 Front-End</h3>
                        {renderBasedOnId('front-end-development')}
                        <h3>💻 Full-Stack</h3>
                        {renderBasedOnId('full-stack-development')}
                        <h3>🦄 UI Design</h3>
                        {renderBasedOnId('ui-design')}
                    </All>
                </AllAndNew>
            )
        } else {
            // Render Standard ID tab
            return (
                <>
                <Header>
                    {props.activeTab.title !== null ? <h3>{props.activeTab.title}{props.activeTab.percentage !== null ? <Percentage>{props.activeTab.percentage}%</Percentage> : null}</h3> : null} <p>{props.activeTab.description}</p>
                </Header>
                {renderBasedOnId(props.activeTab.typeID)}
                </>
            )
        }
    }

    return (
        <RenderProjectsWrapper>
            {renderProjects()}
        </RenderProjectsWrapper>
    )
}

export default RenderProjects
