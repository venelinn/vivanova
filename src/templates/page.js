// import React from "react"
// import * as PropTypes from "prop-types"
// import { graphql } from 'gatsby'
// import styled from "styled-components"

// import Layout from "../components/layout"
// import Hero from '../components/Hero'
// import SEO from "../components/seo"

// const propTypes = {
//   data: PropTypes.object.isRequired,
// }

// class PageTemplate extends React.Component {
//   render() {
//     const hero = this.props.data.page.hero
//     return (
//       <Layout data={this.props.data} location={this.props.location}>
//         <SEO title={this.props.data.page.title} lang={this.props.data.page.node_locale} />
//         {hero  ? (
//           <Hero hero={hero[0]} />
//         ) : ''}
//       </Layout>
//     )
//   }
// }

// PageTemplate.propTypes = propTypes

// export default PageTemplate

// export const pageQuery = graphql`
//   query pageQuery($id: String!) {
//     site {
//       siteMetadata {
//         languages {
//           defaultLangKey
//           langs
//         }
//       }
//     }
//     page: contentfulPage(id: { eq: $id }) {
//       id
//       title
//       node_locale
//       hero {
//         title
//         description {
//           description
//         }
//         assets {
//           image {
//             fluid(maxWidth: 1500, quality: 80) {
//               ...GatsbyContentfulFluid_withWebp
//             }
//           }
//           logo {
//             fluid(maxWidth: 500, quality: 80) {
//               ...GatsbyContentfulFluid_withWebp_noBase64
//             }
//           }
//           youtube
//         }
//       }
//       products {
//         id
//         title
//         description {
//           childMarkdownRemark {
//             html
//           }
//         }
//         image {
//           id
//           fluid(maxWidth: 500, quality: 80) {
//             ...GatsbyContentfulFluid_withWebp_noBase64
//           }
//         }
//         video {
//           file {
//             url
//             fileName
//             contentType
//           }
//         }
//       }
//     }

//   }
// `
