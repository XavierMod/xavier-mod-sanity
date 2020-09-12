import React from 'react'
import styled from 'styled-components'

const SocialLinksWrapper = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: none;
    padding: 70px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: -10px;

    img {
        background: none;
    }

    .social-buttons__button {
        margin: 10px 5px 0;
    }

    .social-button {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
        width: 60px;
        height: 60px;
        text-decoration: none;
    }
    .social-button__inner {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(100% - 2px);
        height: calc(100% - 2px);
        border-radius: 100%;
        background: #fff;
        text-align: center;
    }
    .social-button img,
    .social-button svg {
        position: relative;
        z-index: 1;
        transition: 0.3s;
    }
    .social-button svg {
        height: 40%;
        width: 40%;
    }
    .social-button::after {
    content: "";
        position: absolute;
        top: 0;
        left: 50%;
        display: block;
        width: 0;
        height: 0;
        border-radius: 100%;
        transition: 0.3s;
    }
    .social-button:focus, .social-button:hover {
        color: #fff;
    }
    .social-button:focus::after, .social-button:hover::after {
        width: 100%;
        height: 100%;
        margin-left: -50%;
        background: #0072c6;

        img {
            border: 1px solid red;
        }
    }
`;

const SocialLinks = () => {
    return (
        <SocialLinksWrapper class="social-buttons">
            <a href="#" class="social-buttons__button social-button social-button--facebook" aria-label="Facebook">
                <span class="social-button__inner">
                <img height="20" width="32" src="https://unpkg.com/simple-icons@v3/icons/linkedin.svg" />
                </span>
            </a>
            <a href="#" class="social-buttons__button social-button social-button--snapchat" aria-label="SnapChat">
                <span class="social-button__inner">
                <img height="20" width="32" src="https://unpkg.com/simple-icons@v3/icons/gmail.svg" />
                </span>
            </a>
        </SocialLinksWrapper>
    )
}

export default SocialLinks
