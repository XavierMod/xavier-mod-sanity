import React, { useState, useEffect } from 'react'
import BlogThumbnail from './BlogThumbnail'
import BlogPagination from './BlogPagination'

const BlogList = (props) => {

    const [posts, setPosts] = useState(props.data);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);

    console.log(posts);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <>
        {currentPosts.map((el, ind) => {
            return( <BlogThumbnail 
                    key={ind} 
                    post={el.node}
                
                />)
        })}
        <BlogPagination 
            postsPerPage={postsPerPage} 
            totalPosts={posts.length} 
            paginate={paginate}
            currentPage={currentPage} />
        </>
    )
}

export default BlogList
