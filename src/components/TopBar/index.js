import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Fade from 'react-reveal/Fade';
import Nav from './Nav'
import logo from '../../images/logo.png'

import "./topnav.scss"

const TopBar = props => {
  return (
    <Fade delay={500}>
      <div className="top-nav__root">
        <div className="top-nav">
          <div className="top-nav__logo">
            <Link to="/"><img src={logo} alt="Victoria Ivanova" /></Link>
          </div>
          <div className="topnav__menu">
            <Nav locale={props.locale} langsMenu={props.langsMenu} />
          </div>
        </div>
      </div>
    </Fade>
  )
}

TopBar.propTypes = {
  langsMenu: PropTypes.array,
  locale: PropTypes.string
}

export default TopBar;
