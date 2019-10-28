import React from "react"
import PropTypes from "prop-types"

import "../styles/style.scss"

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('.jsSmoothScroll');
}

const Layout = ({ children }) => (
  <>
    { children }
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
