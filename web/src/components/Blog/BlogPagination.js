import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: black;
    transform: scale(0.8);

    ul {
        text-align: center;
    }

    .list-active {
        background: white;
        color: black;
        opacity: 1;
    }
`;

const PageNumber = styled.li`
    display: inline-block;
    opacity: 0.5;
    background: white;
    padding: 10px 17px;
    border-radius: 300px;
    margin-right: 10px; 
    cursor: pointer;
`;

const BlogPagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    console.log(currentPage);

    return (
        <MainWrapper>
            <ul>
                {pageNumbers.map(number => {
                    return (
                    <PageNumber 
                        className={number == currentPage ? "list-active" : "list"} 
                        key={number}
                        onClick={() => paginate(number)}>{number}
                    </PageNumber>)
                })}
            </ul>
        </MainWrapper>
    )
}

export default BlogPagination
