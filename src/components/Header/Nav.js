import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Fade from 'react-reveal/Fade';
import Hamburger from './Hamburger';
import Nav from './Nav'
import logo from '../../images/logo.png'


const TopBar = (props) => (
  <Fade delay={500}>
    <div>
      <div className="header-nav section">
        <div className="header-nav__logo">
          <Link to="/"><img src={logo} alt="Liberte" /></Link>
        </div>
        <div className="header-nav__menu">
          <Nav locale={props.locale} langsMenu={props.langsMenu} />
          <Hamburger />
        </div>
      </div>
    </div>
  </Fade>
)

TopBar.propTypes = {
  langsMenu: PropTypes.array,
  locale: PropTypes.string
}

export default TopBar;