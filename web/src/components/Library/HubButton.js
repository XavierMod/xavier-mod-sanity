import React from 'react'
import styled from 'styled-components'
import { FaTh } from 'react-icons/fa';

const HubButtonWrapper = styled.div`
    .button {
        display: inline-flex;
        height: 60px;
        width: 100%;
        border: 2px solid #1d2026;
        color: ${props => props.theme.colors.textPrimary};
        text-transform: uppercase;
        text-decoration: none;
        font-size: .8em;
        letter-spacing: 1.5px;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: #1d2026;
        font-size: 15px;
    }

    img {
        background: none;
    }

    a {
        color: ${props => props.theme.colors.textPrimary};
        text-decoration: none;
        letter-spacing: 1px;
    }

    #button-7 {
        position: relative;
        overflow: hidden;
        cursor: pointer;
    }

    #button-7 a {
        position: relative;
        left: 0;
        transition: all .35s ease-Out;
    }

    #dub-arrow {
    width: 100%;
    height: 100%;
    background: #1d2026;
    left: -200px;
    position: absolute;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .35s ease-Out;
    bottom: 0;
    }

    #button-7 img {
    width: 20px;
    height: auto;
    }

    #button-7:hover #dub-arrow {
    left: 0;
    }

    #button-7:hover a {
    left: 150px;
    }
`;

const HubButton = (props) => {
    return (
        <HubButtonWrapper>
            <div class="button" id="button-7">
                <div id="dub-arrow">hub</div>
                <a><FaTh /></a>
            </div>
        </HubButtonWrapper>
    )
}

export default HubButton
