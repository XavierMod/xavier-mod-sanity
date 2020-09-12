import React from 'react'
import styled from 'styled-components'

const H1Wrapper = styled.h1`
    font-size: 40px;
    font-weight: 700;
`;

const H1 = (props) => {
    return (
        <>
            <H1Wrapper>{props.body}</H1Wrapper>
        </>
    )
}

export default H1
