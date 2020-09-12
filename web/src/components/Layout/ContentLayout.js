import React from 'react'
import styled from 'styled-components'

const ContentLayoutW = styled.div`
    max-width: ${props => props.theme.options.maxWidthLayout};
    margin: auto;
    background: ${props => props.theme.colors.darkBackground};
`;

const ContentLayout = (props) => {
    return (
        <ContentLayoutW>
            {props.children}
        </ContentLayoutW>
    )
}

export default ContentLayout
