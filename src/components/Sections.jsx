//import PropTypes from 'prop-types';
import React from 'react';
import TrackVisibility from 'react-on-screen';

import GlobalStyle from '../styles/global';
import Header from '../components/Header';

import Section from '../components/Section';

import About from '../components/About';
import Portfolio from '../components/Portfolio';
// import Resume from '../components/Resume';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import windowDimensions from '../shared/windowDimensions';

const Head = ({ isVisible, header }) => {
  const style = isVisible ? 'dark' : 'light';
  document.body.setAttribute('data-style', style)
  return <Header header={header} />;
}

const Sections = ({header, sections, social}) => {
  const { height } = windowDimensions();
  return (
    <>
      <GlobalStyle />
      <TrackVisibility offset={height}>
        <Head header={header} />
      </TrackVisibility>
      {sections.modules.map((section, index) => (
        <Section
          key={index}
          type={section.__typename}
          className={section.slug}
          title={section.title}
          description={section.description}
        >
          {section.__typename === 'ContentfulAbout' && (
            <About
              key={section.id}
              about={section}
              social={social}
              />
          )}
          {section.__typename === 'ContentfulPortfolioList' && (
            <Portfolio key={section.id} folio={section} />
          )}

          {/* {section.__typename === 'ContentfulExperienceList' && (
            <Resume key={section.id} jobs={section.modules} />
          )}*/}
          {section.__typename === 'ContentfulContacts' && <Contacts />}
        </Section>
      ))}
      <Footer />
    </>
  )
};



export default Sections;
