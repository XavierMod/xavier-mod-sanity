import React from 'react'
import styled from 'styled-components'

const PWrapper = styled.h1`
    margin: 40px 0;
`;

const P = (props) => {
    return (
        <>
            <PWrapper>{props.body}</PWrapper>
        </>
    )
}

export default P