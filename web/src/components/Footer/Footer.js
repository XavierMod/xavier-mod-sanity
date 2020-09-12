import React from 'react'
import styled from 'styled-components'
import { sizes, largerThan, smallerThan } from '../../components/Helpers/mediaQueries';

const MainWrapper = styled.div`
    font-size: 11px;
    font-family: 'Noto Serif KR';
    position: absolute;
    bottom: 0;
    padding: 30px;
    min-width: 95%;

    ${smallerThan.tablet`
        padding: 10px;
    `};
    
`;

const Images = styled.div`
    flex: 1%;
    display: flex;
    align-items: center;
    margin-right: 10px;
`;

const FooterWrapper = styled.div`
    padding: 10px 20px;
    background: #212121;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors.darkBackground};

    p {
        flex: 99%;
        font-size: 12px;
        display: block;

        ${smallerThan.tablet`
            display: none;
        `};

        &.mobile {
            display: none;

            ${smallerThan.tablet`
                display: block;
            `};
        }
    }

    a {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        filter: invert();
        width: 25px;
        padding: 3px;
    }
`;

const Footer = () => {

    var d = new Date();
    var n = d.getFullYear();

    return (
        <MainWrapper>
            <FooterWrapper>
                <p>© {n}. Crafted with 🖤 by Xavier Mod using Gatsby.js and Sanity.io.</p>
                <p className="mobile">© {n}. By Xavier Mod.</p>
                <a href="#" target="_blank">
                <Images>
                    <a style={{marginRight: '10px'}}href="https://www.gatsbyjs.org/" target="_blank"><img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/gatsby.svg" /></a>
                    <a href="https://www.sanity.io/" target="_blank"><svg viewBox="0 0 105 22" fill="none" xmlns="http://www.w3.org/2000/svg" height="1em"><title>Sanity</title><path opacity="0.7" d="M78.1793 7.99261V21.0028H73.9031V10.2138L78.1793 7.99261Z" fill="currentColor"></path><path opacity="0.7" d="M20.9511 21.33L30.944 16.1051L29.7121 12.9141L23.1332 15.9821L20.9511 21.33Z" fill="currentColor"></path><path opacity="0.5" d="M73.9031 10.2027L84.7443 4.65477L82.9126 1.5571L73.9031 5.95997V10.2027Z" fill="currentColor"></path><path opacity="0.7" d="M43.3705 6.96233V21.0028H39.2927V1.00714L43.3705 6.96233Z" fill="currentColor"></path><path opacity="0.5" d="M27.1299 6.18617L20.9511 21.33L17.7731 18.5943L25.1353 1.00714L27.1299 6.18617Z" fill="currentColor"></path><path d="M25.1353 1.00714H29.3477L37.1386 21.0028H32.8269L25.1353 1.00714Z" fill="currentColor"></path><path d="M44.0012 1.00714L52.9824 14.6682V21.0028L39.2927 1.00714H44.0012Z" fill="currentColor"></path><path d="M64.9183 1.00714H60.6739V21.0063H64.9183V1.00714Z" fill="currentColor"></path><path d="M73.9031 4.65474H67.37V1.00714H82.5867L84.7443 4.65474H78.1793H73.9031Z" fill="currentColor"></path><path opacity="0.5" d="M97.2754 13.4153V21.0028H93.0629V13.4153" fill="currentColor"></path><path d="M93.0629 13.4152L100.191 1.00714H104.666L97.2754 13.4152H93.0629Z" fill="currentColor"></path><path opacity="0.7" d="M93.063 13.4152L85.7363 1.00714H90.3456L95.3092 9.51008L93.063 13.4152Z" fill="currentColor"></path><path d="M1.96126 3.31479C1.96126 6.09921 3.71145 7.75595 7.21536 8.62956L10.9283 9.47533C14.2444 10.2236 16.2639 12.0822 16.2639 15.1103C16.2897 16.4295 15.8531 17.7173 15.0274 18.7579C15.0274 15.7368 13.4367 14.1044 9.59972 13.1229L5.95409 12.3085C3.03475 11.6541 0.781478 10.1262 0.781478 6.83709C0.766123 5.56693 1.18116 4.32781 1.96126 3.31479" fill="currentColor"></path><path opacity="0.7" d="M52.9824 13.6415V1.00714H57.0602V21.0028H52.9824V13.6415Z" fill="currentColor"></path><path opacity="0.7" d="M12.7458 14.3689C14.3294 15.3643 15.0238 16.7565 15.0238 18.7544C13.713 20.4041 11.4101 21.33 8.70333 21.33C4.14718 21.33 0.958577 19.1268 0.25 15.2982H4.62547C5.18878 17.0559 6.68034 17.8703 8.67144 17.8703C11.1019 17.8703 12.7174 16.5964 12.7493 14.3619" fill="currentColor"></path><path opacity="0.7" d="M4.23567 7.44267C3.5125 7.02045 2.9192 6.41375 2.51873 5.68697C2.11827 4.96019 1.92558 4.14045 1.96113 3.31476C3.22594 1.67891 5.42608 0.679993 8.10804 0.679993C12.7492 0.679993 15.4347 3.08852 16.0972 6.47856H11.8883C11.4242 5.14203 10.2621 4.10136 8.14347 4.10136C5.87957 4.10136 4.33487 5.39611 4.24629 7.44267" fill="currentColor"></path></svg></a>
                    <a href="https://github.com/XavierMod/Xavier-Mod" target="_blank"><img style={{marginLeft: '10px'}} height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/github.svg" /></a>
                </Images>
                </a>
            </FooterWrapper>
        </MainWrapper>

    )
}

export default Footer
