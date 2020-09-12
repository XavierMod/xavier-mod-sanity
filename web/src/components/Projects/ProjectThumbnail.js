import React, {useState} from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Button from '../Library/Button'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { FaStar, FaTools, FaArrowAltCircleRight } from 'react-icons/fa';
import { sizes, largerThan, smallerThan } from '../../components/Helpers/mediaQueries';

const MainWrapper = styled.div`
    position: relative;
    display: inline-block;
    width: 300px;
    height: 200px !important;
    transition: all ease .3s;
    margin: auto;
    margin-right: 40px;
    margin-bottom: 40px;
    cursor: pointer;
    -webkit-animation: fade-from-left 1s ease;
	        animation: fade-from-left 1s ease;

    ${smallerThan.tablet`
        width: 100%;
        height: 400px !important;

        .gatsby-image-wrapper {
            height: 400px !important;
        }
    `};
`;

const ImgWrapper = styled.div`
    position: relative;
`;

const OpacityLayer = styled.a`
    transition: all ease 0.5s;
    position: absolute;
    background: black;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: ${props => props.show};

    ${smallerThan.tablet`
        opacity: 1;
        background: rgb(0,0,0);
        background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(19,21,24,0.6784810126582279) 75%);
    `};
`;

const Info = styled.div`
    display: ${props => props.show};
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    padding: 0 30px;

    ${smallerThan.tablet`
        display: block;
    `};

    a {
        text-decoration: none;
    }
`;

const Title = styled.div`
    text-decoration: none;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
        display: block;
        margin-top: 10px;
    }
`;

const ButtonsWrapper = styled.div`

    .Button {
        display: inline-block;

        margin-right: 10px;
    }
`;

const BadgesWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    text-align: right;
    padding: 10px;
`;

const Badge = styled.span`
    display: inline-flex;
    background: green;
    padding: 5px 6px;
    border-radius: 2px;
    font-size: 12px;
    margin-right: 5px;

    &.featured {
        background: #189426;
    }

    &.development {
        background: grey;
    }

    &.old {
        background: #666666;
    }
`;

const NoImage = styled.div`
    height: 200px !important;
    background: ${props => props.theme.colors.darkBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    color: grey;
    font-size: 20px;
`;

const Disabled = styled.div`
    padding: 0 30px;
`;

const DescShort = styled.span`
    display: inline-block;
    margin-top: 15px;
    font-size: 12px;
`;

const ProjectThumbnail = (props) => {

    const [showInfo, setShowInfo] = useState(false);

    const {
        date,
        slug,
        title,
        images,
        descriptionShort,
        typeTags,
        featuredImage,
        _rawLinks,
        _rawProjectAdditionalInfo
    } = props.projectData.node;


    return (
        <MainWrapper
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}>
          <BadgesWrapper>
              {typeTags[0].typeID == 'featured' ? <Badge className="featured"><FaStar /></Badge> : null}
              {_rawProjectAdditionalInfo.inDevelopment ? <Badge className="development"><FaTools /></Badge> : null}
              {_rawProjectAdditionalInfo.ageWarning ? <Badge className="old">Old</Badge> : null}
          </BadgesWrapper>
          <Info show={showInfo ? 'block' : 'none'}>
              <AniLink cover bg="#000000" to={"/projects/" + slug}>
                <Title>
                    {title}
                    <FaArrowAltCircleRight style={{marginLeft: '10px'}} />
                </Title>
                <DescShort>
                    {descriptionShort}
                </DescShort>
              </AniLink>
              <ButtonsWrapper>
                {_rawLinks && _rawLinks.githubLink !== undefined ? <Button 
                        type="primary"
                        link={_rawLinks.githubLink}
                        width="70px" 
                        body="REPO"
                        iconSource="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg==" /> : <Disabled/>}
                    {_rawLinks && _rawLinks.liveDemo !== undefined ? <Button 
                        type="primary"
                        width="130px" 
                        link={_rawLinks.liveDemo}
                        body="Live Site"
                        iconSource="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC41NjYgMTcuODQyYy0uOTQ1IDIuNDYyLTMuNjc4IDQuMDEyLTYuNTYzIDQuMTYxLjEzOS0yLjc3MiAxLjY4NC01LjYwOCA0LjIwOS02LjU2M2wuNTEuNTIxYy0xLjUzNCAxLjUyMy0yLjA2MSAyLjc2NS0yLjE0NCAzLjQ2MS43MDQtLjA4NSAyLjAwNi0uNjA4IDMuNDgzLTIuMDk2bC41MDUuNTE2em0tMS4xMzYtMTEuMzQyYy0xLjc3OC0uMDEtNC4wNjIuOTExLTUuNzY2IDIuNjE0LS42NS42NDktMS4yMjIgMS40MDgtMS42NjQgMi4yNTggMS41MzgtMS4xNjMgMy4yMjgtMS40ODUgNS4xNDctLjQwOC41NjYtMS40OTQgMS4zMi0zLjAxNCAyLjI4My00LjQ2NHptNS4yMDQgMTcuNWMuODUyLS40NCAxLjYxLTEuMDEzIDIuMjYxLTEuNjY0IDEuNzA4LTEuNzA2IDIuNjIyLTQuMDAxIDIuNjA0LTUuNzgyLTEuNTc1IDEuMDMtMy4xMjUgMS43NzItNC40NjYgMi4yOTYgMS4wNzcgMS45Mi43NjQgMy42MTQtLjM5OSA1LjE1em0xMS4zMTItMjMuOTU2Yy0uNDI4LS4wMy0uODQ4LS4wNDQtMS4yNjEtLjA0NC05LjMzOCAwLTE0LjQ2NSA3LjQyNi0xNi4xMDEgMTMuMDA5bDQuNDI4IDQuNDI4YzUuNzgtMS44NTUgMTIuOTg4LTYuNzc3IDEyLjk4OC0xNS45OTN2LS4wNTljLS4wMDItLjQzNy0uMDE5LS44ODQtLjA1NC0xLjM0MXptLTUuOTQ2IDcuOTU2Yy0xLjEwNSAwLTItLjg5NS0yLTJzLjg5NS0yIDItMiAyIC44OTUgMiAyLS44OTUgMi0yIDJ6Ii8+PC9zdmc+" /> : null}
              </ButtonsWrapper>
          </Info>
          <AniLink cover bg="#000000" to={"/projects/" + slug}>
            <OpacityLayer 
                show={showInfo ? '0.8' : '0'} />
          </AniLink>
          <ImgWrapper>
            {featuredImage !== null ? <Img style={{height: '200px'}} fluid={featuredImage.asset.fluid} /> : <NoImage>Image missing</NoImage>}
          </ImgWrapper>
        </MainWrapper>
    )
}

export default ProjectThumbnail