import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.a`

    &.inverted {
        display: flex; 
        color: black !important;
        img {
            filter: invert();
        }
    }

    .button {
        display: inline-flex;
        height: 60px;
        width: ${props => props.width};
        border: 2px solid ${props => props.theme.colors.textPrimary};
        color: ${props => props.theme.colors.textPrimary};
        text-transform: uppercase;
        text-decoration: none;
        font-size: .8em;
        letter-spacing: 1.5px;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        font-size: 15px;
        margin: 20px 0;
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
    background: ${props => props.theme.colors.textPrimary};
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

const Button = (props) => {

    if (props.link) {
        return (
            <ButtonWrapper 
                href={props.link}
                target="_blank"
                className={'Button'} width={props.width}>
                <div class="button" id="button-7">
                    <div id="dub-arrow"><img src={props.iconSource}/></div>
                    <a>{props.body}</a>
                </div>
            </ButtonWrapper>
        )
    } else if (props.inverted) {
        return (
            <ButtonWrapper 
                href={props.link}
                target="_blank"
                className={'Button inverted'} width={props.width}>
                <div class="button" id="button-7">
                    <div id="dub-arrow">{props.body}</div>
                    <a><img src={props.iconSource}/></a>
                </div>
            </ButtonWrapper>
        )
    }

    return (
        <ButtonWrapper className={'Button'} width={props.width}>
            <div class="button" id="button-7">
                <div id="dub-arrow"><img src={props.iconSource}/></div>
                <a>{props.body}</a>
            </div>
        </ButtonWrapper>
    )
}

export default Button
