import React from 'react'
import styled from 'styled-components'

const TagsWrapper = styled.div`
    z-index: 1;
    width: 100%;
    color: BLACK;
    bottom: 0;
    margin: 15px 0;
`;

const SingleTag = styled.div`
    display: inline-block;
    margin: 0px 5px;
    font-size: 10px;
    background: #4d4d4d;
    color: white;
    padding: 2px 10px;
`;

const Tag = (props) => {
    const makeTags = () => {
        if (props.tagName !== null) {
            const tagsArray = props.tagName.split(',');
            return tagsArray.map((el, ind, arr) => {
                return (
                <SingleTag>
                    {el}
                    </SingleTag>
                )
            })
        } else {
            return null
        }
    }

    return (
        <TagsWrapper>
            {makeTags()}
        </TagsWrapper>
    )
}

export default Tag
