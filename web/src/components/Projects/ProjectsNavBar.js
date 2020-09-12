import React, { useState } from 'react';
import styled from 'styled-components';
import CategoriesNavBar from './CategoriesNavBar';
import Breadcrumbs from '../Library/Breadcrumbs';
import Button from '../Library/Button';
import { sizes, largerThan, smallerThan } from '../../components/Helpers/mediaQueries';

const CategoriesHeader = styled.div`
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 30px 70px;
    padding-bottom: 0;
    display: flex;
    align-items: flex-start;
    font-family: 'DM Serif Display';
    font-size: 50px;
    letter-spacing: -1px;
    position: relative;
    overflow: hidden;
    background: ${props => props.theme.colors.darkBackground};
    flex-direction: column;
    z-index: 0;

    ${smallerThan.tablet`
        display: none;
    `};

    span {
      text-decoration: line-through;
    }
`;

const SecondRow = styled.div`

`;

const ProjectsNavBar = (props) => {

    return (
        <CategoriesHeader>
            <Breadcrumbs currentRoute="Portfolio / Projects" />
            <SecondRow>
                <CategoriesNavBar 
                    setActiveTab={(el) => props.setActiveTab(el)}
                    tabs={props.tabs}
                    activeTab={props.activeTab} />
            </SecondRow>
    </CategoriesHeader>
    )
}

export default ProjectsNavBar
