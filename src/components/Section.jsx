import PropTypes from 'prop-types';
import React from 'react';
import Fade from 'react-reveal/Fade';

import './Section.scss';

const Section = ({ children, className, title, description, ...props }) => (
  <section
    id={`${className}`}
    className={`section section--${className}`}
    {...props}
  >
    <div className="section__inner">
      <Fade delay={300}>
      <h2>{title}</h2>
      {description ? (
        <h3>{description}</h3>
      ) : ''}
      </Fade>
      {children}
    </div>
  </section>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

Section.defaultProps = {
  className: ''
};

export default Section;
