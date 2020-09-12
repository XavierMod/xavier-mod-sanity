import React from 'react'
import styled from 'styled-components'

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    padding: 5px;
    opacity: 0.4;
    cursor: pointer;
    transition: all ease .5s;

    &:hover {
        opacity: 1;
    }

    svg {
        fill: ${props => props.theme.colors.textPrimary};
        transform: ${props => props.rotate};
        display: inline-block;
        margin: 0;
        padding: 0;
        width: ${props => props.width};
    }

`;

const Icon = (props) => {
    if (props.icon == 'arrow') {
        return (
            <IconWrapper onClick={props.onClick} width={props.width} rotate={props.rotate}>
                <svg 
                    viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
            </IconWrapper>
        )
    }
}

export default Icon
