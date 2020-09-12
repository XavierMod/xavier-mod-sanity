import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import ProjectThumbnail from '../Projects/ProjectThumbnail';
import { sizes, largerThan, smallerThan } from '../../components/Helpers/mediaQueries';
import { FaRocket, FaArrowRight, FaArrowAltCircleRight } from 'react-icons/fa';

const RenderProjectsMobileWrapper = styled.div`
    height: 100%;
    display: none;

    ${smallerThan.tablet`
        display: block;
    `};
`;

const Header = styled.div`
    padding: 10px;
    margin-top: 140px;
    position: relative;

    h1 {
        font-size: 25px;
        display: block;
        align-items: center;
        margin-left: 10px;
    }

    p {
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        opacity: 0.5;
        margin-top: 10px;
        padding: 0 10px;
    }
`;

const IconBG = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    font-size: 200px;
    pointer-events: none;
    opacity: 0.1;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    font-size: 50px;
`;

const Slide = styled.div`
    padding: 20px;

    h3 {
        padding-bottom: 20px;
    }
`;

const RenderProjectsMobile = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
      };

      const renderBasedOnId = (getID) => {
        return props.projects.map((mainEl, ind, arr) => {
            return mainEl.node.typeTags.map((el, ind, arr) => {
                if (el.typeID == getID) {
                    return (
                        <ProjectThumbnail
                            projectData={mainEl}
                        />
                    )
                }
            });
        })
    }

    return (
        <RenderProjectsMobileWrapper>
            <div>
                <Header>
                    <IconBG>
                        <FaArrowAltCircleRight style={{marginLeft: '10px'}} />
                    </IconBG>
                    <Title><h1>My projects</h1></Title>
                    <p>Swipe right to see all categories <FaArrowRight style={{marginLeft: '10px'}} /></p>
                </Header>
                <Slider {...settings}>
                    <Slide>
                        <h3>⭐ Featured</h3>
                        {renderBasedOnId('featured')}
                    </Slide>
                    <Slide>
                        <h3>🔥 Front-End</h3>
                        {renderBasedOnId('front-end-development')}
                    </Slide>
                    <Slide>
                        <h3>💻 Full-Stack</h3>
                        {renderBasedOnId('full-stack-development')}
                    </Slide>
                    <Slide>
                        <h3>🦄 UI Design</h3>
                        {renderBasedOnId('ui-design')}
                    </Slide>
                    <Slide>
                        <h3>Other</h3>
                        {renderBasedOnId('other')}
                    </Slide>
                </Slider>
            </div>
        </RenderProjectsMobileWrapper>
    )
}

export default RenderProjectsMobile
