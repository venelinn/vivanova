import PropTypes from 'prop-types';
import React from 'react';
import styles from './Section.module.scss';
import Fade from 'react-reveal/Fade';

const Section = ({ children, className, title, description, ...props }) => (
  <section
    id={`${className}`}
    className={`${styles.section} ${styles.section}--${className}`}
    {...props}
  >
    <div className={`${styles.inner}`}>
      <Fade delay={300}>
      <h2>{title}</h2>
      <h3>{description}</h3>
      </Fade>
    </div>
    {children}
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
