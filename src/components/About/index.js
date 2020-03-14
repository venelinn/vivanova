import React from 'react';
import Fade from 'react-reveal/Fade'
import Img from 'gatsby-image'
import Social from './Social';

import './about.scss';

const About = props => {
  return (
    <>
      <Fade cascade bottom delay={750}>
        <div>
          <div
            className="about__intro"
            dangerouslySetInnerHTML={{
              __html: props.about.content.childContentfulRichText.html
            }}
          />
          <Img
            className="about__img"
            fluid={props.about.modules[0].image.fluid}
            title={props.about.title}
          />
          <Social delay={800} social={props.social} />
        </div>
      </Fade>
    </>
  );
};

export default About;
