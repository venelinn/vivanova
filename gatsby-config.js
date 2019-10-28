const path = require(`path`)
require('dotenv').config({path: `./.env`});


module.exports = {
  siteMetadata: {
    title: `Venelin Nikolov • Front-end Developer • UX/UI • PageSpeed`,
    description: `Front-end Developer, Performance specialist, SEO optimization, UX/UI`,
    siteUrl: 'https://venelin.ca/', // Site domain. Do not include a trailing slash! If you wish to use a path prefix you can read more about that here: https://www.gatsbyjs.org/docs/path-prefix/
    author: 'Venelin Nikolov', // Author for RSS author segment and SEO schema
    authorJob: `Front-end Developer, UX/UI`,
    copyright: 'Copyright © 2019 Venelin Nikolov', // Copyright string for the RSS feed
    //image_url: `${config.siteUrl}${config.siteLogo}`,
    userTwitter: '@venelinn', // Change for Twitter Cards
    shortTitle: 'VNN', // Used for App manifest e.g. Mobile Home Screen
    shareImage: '${__dirname}/images/share.jpg', // Open Graph Default Share Image. 1200x1200 is recommended
    shareImageWidth: 900, // Change to the width of your default share image
    shareImageHeight: 600, // Change to the height of your default share image
    siteLogo: '${__dirname}/images/favicons/favicon-512x512.png', // Logo used for SEO, RSS, and App manifest
    backgroundColor: '#e9e9e9', // Used for Offline Manifest
    themeColor: '#000000', // Used for Offline Manifest
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: '@import "src/styles/global.scss";',
        includePaths: [
          'src/styles',
        ],
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Venelin.ca`,
        short_name: `Venelin`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        description: `Front-end developer | UI/UX`,
        display: `minimal-ui`,
        lang: `en-US`,
        icon: `${__dirname}/src/images/vca-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
