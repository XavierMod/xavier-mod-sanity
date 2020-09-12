import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    display: inline-flex;
    color: ${props => props.color};
    text-align: center;
    background: white !important;
    padding: 10px 13px;
    align-items: center;
    justify-content: center;
    margin: 10px;
    border-radius: 400px;
    height: 50px;
    width: 50px;

    a {
        background: none;
        margin: 0;
        padding: 0;
    }

    img {
        background: none;
    }
    
`;
 
const CircleBar = (props) => {
    return(
        <a href={props.link} target="_blank">
            <Wrapper>
                    <img height="22" src={`https://unpkg.com/simple-icons@v2/icons/${props.iconName}.svg`} />
            </Wrapper>
        </a>

    )
}

export default CircleBar;