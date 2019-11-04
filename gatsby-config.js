const path = require(`path`)
require('dotenv').config({path: `./.env`});

const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    title: `Victoria Ivanova • Architect`,
    description: `Architect`,
    copyright: 'Copyright © 2019 Victoria Ivanova', // Copyright string for the RSS feed
    siteUrl: `https://vivanova.eu`,
    keywords: `architect`,
    author: `@venelin`,
    fbId: `969485113198945`,
    imageWidth: '1398',
    imageHeight: '927',
    languages
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: '@import "src/styles/global.scss";',
        includePaths: [
          'src/styles',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            variants: [`400`, `600`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: false
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ""
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
  ],
}
