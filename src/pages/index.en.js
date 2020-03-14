import React from "react"
import * as PropTypes from "prop-types"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Sections from '../components/Sections';

const propTypes = {
  data: PropTypes.object,
  about: PropTypes.object
}

const IndexPageEn = props => {
  const intro = props.data.headerDataEn;
  const sections = props.data.sectionsDataEn.edges[0].node;
  const socialData = props.data.socialEn.edges;
  const menu = props.data.sectionsDataEn.edges[0].node.modules.map(item => item);
  const socialArray = props.data.socialEn.edges.map(item => item.node);
  const cv = socialArray.filter(a => a.name === 'CV');
  //console.log(this.props.data.sectionsDataEn.edges[0].node.modules.map(item => item));
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

IndexPageEn.propTypes = propTypes

export default IndexPageEn

export const query = graphql`
  query PageEnQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    headerDataEn: contentfulIntro(node_locale: {eq: "en-US"}) {
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
    socialEn: allContentfulSocial(filter: { node_locale: { eq: "en-US" } }) {
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
    sectionsDataEn: allContentfulModules(filter: { node_locale: { eq: "en-US" } }) {
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
