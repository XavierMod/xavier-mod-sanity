// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    title: 'Xavier Mod Web Portfolio',
    description: "Welcome to Xavier Mod's website. Front End Developer based in London ",
    author: 'Xavier Mod',
    image: '/profilePic.png',
    siteUrl: 'https://www.xaviermod.com'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-playground`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `bitter\:100,400,700`,
          `rubik-mono-one` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ]
}
