import React from 'react'
import styled from 'styled-components'

const H3Wrapper = styled.h1`
    font-size: 11px;
    font-weight: 700;
    margin-bottom: 20px;
    font-family: 'DM Serif Display' !important;
    letter-spacing: -0.2px !important;
`;

const H3 = (props) => {
    return (
        <>
            <H3Wrapper>{props.body}</H3Wrapper>
        </>
    )
}

export default H3
