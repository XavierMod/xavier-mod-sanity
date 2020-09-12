import React from 'react'
import styled from 'styled-components'
import { sizes, largerThan, smallerThan } from '../Helpers/mediaQueries';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const ResponsiveHeaderWrapper = styled.div`
    z-index: 1000;
`;

const ShowDesktop = styled.div`
    ${smallerThan.tablet`
        display: none;
    `};
`;

const ShowMobile = styled.div`
    display: none;
    
    ${smallerThan.tablet`
        display: block;
    `};
`;

const ResponsiveHeader = () => {
    return (
        <ResponsiveHeaderWrapper>
            <ShowDesktop>
                <DesktopHeader />
            </ShowDesktop>
            <ShowMobile>
                <MobileHeader />
            </ShowMobile>
        </ResponsiveHeaderWrapper>
    )
}

export default ResponsiveHeader
