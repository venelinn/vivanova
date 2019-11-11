import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Fade from 'react-reveal/Fade';
import Nav from './Nav'
import logo from '../../images/logo.png'

import "./topNav.scss"

class TopBar extends Component {
  constructor (props) {
    super(props);

    // https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
    if (typeof window !== 'undefined') {
      let prevScrollPos = window.pageYOffset;
      window.onscroll = function () {
        const maxScroll = document.body.clientHeight - window.innerHeight;
        const navBar = document.querySelector('.jsNavBar');
        let currentScrollPos = window.pageYOffset;
        if (
            (maxScroll > 0 && prevScrollPos > currentScrollPos && prevScrollPos <= maxScroll)
          || (maxScroll <= 0 && prevScrollPos > currentScrollPos)
          || (prevScrollPos <= 0 && currentScrollPos <= 0)
          ) {
          navBar.style.top = "0";
        } else {
          navBar.style.top = "-5.0rem"; // adjustable based your need
        }
        prevScrollPos = currentScrollPos;
      }
    }
  }

  render () {
    return (
      <Fade>
        <div id="navbar" className="top-nav__root jsNavBar">
          <div className="top-nav">
            <div className="top-nav__logo">
              <Link to="/"><img src={logo} alt="Victoria Ivanova" /></Link>
            </div>
            <div className="topnav__menu">
              <Nav
                locale={this.props.locale}
                menu={this.props.menu}
                langsMenu={this.props.langsMenu} />
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

// const TopBar = props => {
//   return (
//     <Fade delay={500}>
//       <div className="top-nav__root">
//         <div className="top-nav">
//           <div className="top-nav__logo">
//             <Link to="/"><img src={logo} alt="Victoria Ivanova" /></Link>
//           </div>
//           <div className="topnav__menu">
//             <Nav locale={props.locale} langsMenu={props.langsMenu} />
//           </div>
//         </div>
//       </div>
//     </Fade>
//   )
// }

TopBar.propTypes = {
  langsMenu: PropTypes.array,
  locale: PropTypes.string
}

export default TopBar;
