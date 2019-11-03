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
    const intro = this.props.data.headerDataDe;
    const sections = this.props.data.sectionsDataDe.edges[0].node;
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <GlobalStyle />
        <Header header={intro}  />
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
