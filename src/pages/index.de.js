import React from "react"
import * as PropTypes from "prop-types"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Sections from '../components/Sections';

const propTypes = {
  data: PropTypes.object,
  about: PropTypes.object
}

const IndexPageDe = props => {
  const intro = props.data.headerDataDe;
  const sections = props.data.sectionsDataDe.edges[0].node;
  const socialData = props.data.socialDe.edges;
  const menu = props.data.sectionsDataDe.edges[0].node.modules.map(item => item);
  const socialArray = props.data.socialDe.edges.map(item => item.node);
  const cv = socialArray.filter(a => a.name === 'CV')
  return (
    <Layout
      data={props.data}
      location={props.location}
      menu={menu}
      cv={cv}
    >
      <Sections
        header={intro}
        sections={sections}
        social={socialData}
      />
    </Layout>
  )
}

IndexPageDe.propTypes = propTypes

export default IndexPageDe

export const query = graphql`
  query PageDeQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    headerDataDe: contentfulIntro(node_locale: {eq: "de-DE"}) {
      title
      node_locale
      description
      slug
      sectionTitle
      modules {
        ... on ContentfulImage {
          title
          image {
            fluid(maxWidth: 1400, quality: 90) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
    socialDe: allContentfulSocial(filter: { node_locale: { eq: "de-DE" } }) {
      edges {
        node {
          name
          url
          icon
          file {
            file {
              url
            }
          }
        }
      }
    }
    sectionsDataDe: allContentfulModules(filter: { node_locale: { eq: "de-DE" } }) {
      edges {
        node {
          id
          node_locale
          modules {
            __typename
            ... on ContentfulAbout {
              title
              slug
              content {
                childContentfulRichText {
                  html
                }
              }
              modules {
                ... on ContentfulImage {
                  title
                  image {
                    fluid(maxWidth: 800, quality: 80) {
                      ...GatsbyContentfulFluid_withWebp_noBase64
                    }
                  }
                }
              }
            }
            ... on ContentfulPortfolioList {
              title
              slug
              projects {
                ... on ContentfulPortfolio {
                  name
                  type
                  image {
                    fluid(maxWidth: 1200, quality: 80) {
                      ...GatsbyContentfulFluid_withWebp_noBase64
                    }
                    fixed(width: 300, height: 300, quality: 80) {
                      width
                      height
                      ...GatsbyContentfulFixed_withWebp_noBase64
                    }
                  }
                }
              }
            }
            ... on ContentfulContacts {
              title
              description
              slug
            }
          }
        }
      }
    }
  }
`;
