import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import GlobalStyle from '../styles/global';
import Section from '../components/Section';

import Header from '../components/Header';
import About from '../components/About';
// import Portfolio from '../components/Portfolio';
// import Resume from '../components/Resume';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

class IndexPage extends React.Component {
  render() {
    const sections = this.props.data.sectionsData.edges[0].node;
    const intro = this.props.data.headerDataEn;
    //sections.modules.forEach( i => console.log(i));
    //console.log(this.props.location);
    return (
      <Layout data={this.props.data} location={this.props.location}>

        <GlobalStyle />
        <Header header={intro} />
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
    );
  }
}

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.object,
  about: PropTypes.object
};

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
    sectionsData: allContentfulModules(filter: { node_locale: { eq: "en-US" } }) {
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
