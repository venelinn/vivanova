import React from "react"
import * as PropTypes from "prop-types"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Sections from '../components/Sections';

const propTypes = {
  data: PropTypes.object,
  about: PropTypes.object
}

class IndexPageEn extends React.Component {
  render() {
    const intro = this.props.data.headerDataDe;
    const sections = this.props.data.sectionsDataDe.edges[0].node;
    const socialData = this.props.data.socialDe.edges;
    const menu = this.props.data.sectionsDataDe.edges[0].node.modules.map(item => item);
    const socialArray = this.props.data.socialDe.edges.map(item => item.node);
    const cv = socialArray.filter(a => a.name === 'CV')
    return (
      <Layout
        data={this.props.data}
        location={this.props.location}
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
}

IndexPageEn.propTypes = propTypes

export default IndexPageEn

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
