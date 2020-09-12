import React from 'react'
import XavierModSvg from '../../images/XavierMod.svg'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    img {
        margin: auto;
        display: block;
        padding: 10px 0;
        margin-top: 40px;
        width: 50px;
    }
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <img src={XavierModSvg} />
        </HeaderWrapper>
    )
}

export default Header
