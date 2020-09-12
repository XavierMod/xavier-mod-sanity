import React from 'react'
import styled from 'styled-components'

const WordsPatternList = styled.ul`
    font-size: 50px;
    height: 270px;
    line-height: 55px;
    opacity: 0.05;
    font-weight: bold;
    transform: rotate(20deg);
    overflow: hidden;
    padding-top: 40px;
    pointer-events: none;
    position: absolute;
    z-index: 0;
`;

const WordsPattern = () => {
    return (
        <WordsPatternList className="UL">
            <li>Front End Developer</li>
            <li>Software Engineer</li>
            <li>Full Stack Developer</li>
            <li>UI Designer</li>
            <li>UI Engineer</li>
            <li>Software Engineer</li>
        </WordsPatternList>
    )
}

export default WordsPattern
