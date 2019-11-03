import React from 'react'
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import "./Footer.scss"

const Footer = (props) => (
  <Fade delay={600}>
    <footer className="page__footer footer" id="layout-footer">
      Footer here
    </footer>
  </Fade>
)

Footer.propTypes = {
  locale: PropTypes.string
}

export default Footer;