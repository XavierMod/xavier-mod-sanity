import React from 'react'
import styled from 'styled-components';
import ProjectThumbnail from './ProjectThumbnail';
import MainProject from './MainProject';

const WhatsNewWrapper = styled.div`
`;


const WhatsNew = (props) => {

    return (
        <WhatsNewWrapper>
            <MainProject project={props.projects} />
        </WhatsNewWrapper>
    )
}

export default WhatsNew
