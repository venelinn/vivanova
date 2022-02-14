const path = require(`path`)
require('dotenv').config({path: `./.env`});

const languages = require('./src/data/languages');

console.log('dirname', __dirname)
module.exports = {
  siteMetadata: {
    title: `Victoria Ivanova • Architect`,
    description: `Architect`,
    copyright: `Copyright © ${new Date().getFullYear()} Victoria Ivanova`, // Copyright string for the RSS feed
    siteUrl: `https://vivanova.eu`,
    keywords: `architect`,
    author: `@venelin`,
    fbId: `969485113198945`,
    shareImage: `${__dirname}/images/share.jpg`, // Open Graph Default Share Image. 1200x1200 is recommended
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
            variants: [`400`, `600`, `800`]
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
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: ""
    //   },
    // },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vivanova`,
        short_name: `Vivanova`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        description: `Architect`,
        display: `minimal-ui`,
        lang: `en-US`,
        icon: `${__dirname}/src/images/vv-icon.png` // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
