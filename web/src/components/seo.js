import React from 'react'
import {Helmet} from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'

const getData = graphql`

query {
    site {
      siteMetadata {
        siteTitle:title
        siteDescription:description
        siteAuthor:author
        siteUrl
        image
      }
    }
  }

`;

const SEO = ({title, author, description}) => {
    const { site } = useStaticQuery(getData);

    const {siteDesc, 
           siteTitle, 
           siteUrl, 
           image, 
           siteAuthor} = site.siteMetadata;

    console.log(site);

    return (
        <Helmet htmlAttributes={{lang: "en"}} title={`${title} | ${siteAuthor}`}>
            <meta name="description" content={description || siteDesc} />
            <meta name="image" content={image} />
        </Helmet>
    )
}

export default SEO;
