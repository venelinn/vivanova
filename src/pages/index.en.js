import React from "react"
import * as PropTypes from "prop-types"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import GlobalStyle from '../styles/global';
import Header from '../components/Header';

import Section from '../components/Section';

import About from '../components/About';
// import Portfolio from '../components/Portfolio';
// import Resume from '../components/Resume';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

const propTypes = {
  data: PropTypes.object,
  about: PropTypes.object
}

class IndexPageEn extends React.Component {
  render() {
    const intro = this.props.data.headerDataEn;
    const sections = this.props.data.sectionsDataEn.edges[0].node;
    return (
      <Layout data={this.props.data} location={this.props.location} menu={sections.modules}>
        <GlobalStyle />
        <Header header={intro}   />
        {sections.modules.map((section, index) => (
          <Section
            key={index}
            type={section.__typename}
            className={section.slug}
            title={section.title}
            description={section.description}
          >
            {section.__typename === 'ContentfulAbout' && (
              <About key={section.id} about={section} />
            )}
            {/* {section.__typename === 'ContentfulPortfolioList' && (
              <Portfolio key={section.id} folio={section} />
            )}
            {section.__typename === 'ContentfulExperienceList' && (
              <Resume key={section.id} jobs={section.modules} />
            )}*/}
            {section.__typename === 'ContentfulContacts' && <Contacts />}
          </Section>
        ))}
        <Footer />
      </Layout>
    )
  }
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
