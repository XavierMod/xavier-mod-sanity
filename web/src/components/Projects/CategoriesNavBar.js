import React from 'react'
import styled from 'styled-components'

const CategoriesNavBarW = styled.ul`
    li {
        display: inline-block;
        font-size: 22px;
        margin-right: 30px;
        padding-bottom: 15px;
        border-bottom: 2px solid white;
        cursor: pointer;
        opacity: 0.3;
        transition: all ease .3s;
        
        &:hover {
            opacity: 1;
        }

        &.active {
            opacity: 1;
        }

    }
`;

const CategoriesNavBar = (props) => {
    return (
        <CategoriesNavBarW>
            {props.tabs.map((el, ind, arr) => {
                if (el.node.typeID == props.activeTab.typeID) {
                    return <li onClick={() => props.setActiveTab(el.node)} className="active">{el.node.titleNavBar}</li>
                } else {
                    return <li onClick={() => props.setActiveTab(el.node)} >{el.node.titleNavBar}</li>
                }
            })}
        </CategoriesNavBarW>
    )
}

export default CategoriesNavBar
