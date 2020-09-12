import React from 'react'
import styled from 'styled-components'
import { FaAngleRight } from 'react-icons/fa';
import Logo from './Logo'
import {Link} from 'gatsby'
import { sizes, largerThan, smallerThan } from '../../components/Helpers/mediaQueries';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    z-index: 3000;
    
    ${smallerThan.tablet`
        display: none;
    `};
    
    h1 {
        font-size: 19px;
        margin-left: 20px;
        opacity: 0.3;
        transition: all ease .4s;
        cursor: pointer;
        
        &:hover {
            opacity: 1;
        }
    }
`;

const Breadcrumbs = (props) => {
    return (
        <Wrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <FaAngleRight style={{width: '10px', marginLeft: '20px', opacity: '0.3'}} />
                <Link to="/hub"><h1>Hub</h1></Link>
                {props.currentRoute !== 'Hub' ? <><FaAngleRight style={{width: '10px', marginLeft: '20px', opacity: '0.3'}} />
                <h1>{props.currentRoute}</h1></> : null}
        </Wrapper>
    )
}

export default Breadcrumbs
