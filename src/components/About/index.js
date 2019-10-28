import React from 'react';
import Fade from 'react-reveal/Fade'
import Img from 'gatsby-image'
//import CTA from './cta';

import './about.scss';

const About = props => {
  return (
    <>
      <Fade delay={500}>
      <div
        className='about__intro'
        dangerouslySetInnerHTML={{
          __html: props.about.content.childContentfulRichText.html
        }}
      />
        <Img
          className='about__img'
          fluid={props.about.modules[0].image.fluid}
          title={props.about.title}
        />
      </Fade>
    </>
  );
};

export default About;
