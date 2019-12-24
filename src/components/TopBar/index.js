import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Fade from 'react-reveal/Fade';
import Nav from './Nav'

import "./topnav.scss";

const Logo = props => {
  //const { color } = props;
  return (
    <svg width="89.5" height="50.9" viewBox="0 0 89.5 50.9">
      <g>
        <path fill="#e00000" d="M87.7,32.4c-4,0-7.9,0-11.8,0C68.3,24,58.7,16.1,48.3,11.3c-2.6-1.2-4.7-1.3-7.3-0.1
          c-10.6,4.8-20.3,12.9-28.2,21.1c-4,0-7.7,0-11.7,0C10.9,19.1,25.3,7.1,40.9,0.8c2.6-1.1,4.8-1.1,7.4,0
          C64.1,7.3,78.2,18.3,87.7,32.4z"/>
      </g>
      <g className="logo__line">
        <path d="M1,38l4.9,11.6L10.7,38h1L6.3,50.8H5.4L0,38H1z"/>
        <path d="M13.6,50.8V38h0.9v12.8H13.6z"/>
        <path d="M17.5,38l4.9,11.6L27.2,38h1l-5.4,12.8h-0.8L16.5,38H17.5z"/>
        <path d="M33,38h0.8l5.4,12.8h-1l-1.8-4.2h-6.1l-1.8,4.2h-1L33,38z M36.2,45.8l-2.8-6.7l-2.8,6.7H36.2z"/>
        <path d="M42.6,41v9.8H41V38h1.3l7.9,10V38h1.6v12.8h-1.4L42.6,41z"/>
        <path d="M60.1,50.9c-0.9,0-1.7-0.2-2.5-0.5c-0.7-0.4-1.4-0.9-1.9-1.5c-0.5-0.6-0.9-1.3-1.2-2.1c-0.3-0.8-0.4-1.6-0.4-2.4
          c0-0.9,0.2-1.7,0.5-2.4c0.3-0.8,0.7-1.5,1.3-2.1c0.5-0.6,1.2-1.1,1.9-1.4s1.5-0.5,2.4-0.5c0.9,0,1.7,0.2,2.4,0.6
          c0.7,0.4,1.4,0.9,1.9,1.5c0.5,0.6,0.9,1.3,1.2,2.1c0.3,0.8,0.4,1.6,0.4,2.4c0,0.9-0.2,1.7-0.5,2.4s-0.7,1.5-1.3,2.1
          c-0.5,0.6-1.2,1.1-1.9,1.4C61.7,50.7,60.9,50.9,60.1,50.9z M55.7,44.4c0,0.6,0.1,1.3,0.3,1.9c0.2,0.6,0.5,1.1,0.9,1.6
          c0.4,0.5,0.8,0.8,1.4,1.1c0.5,0.3,1.1,0.4,1.8,0.4c0.7,0,1.3-0.1,1.8-0.4c0.5-0.3,1-0.7,1.4-1.2c0.4-0.5,0.7-1,0.9-1.6
          c0.2-0.6,0.3-1.2,0.3-1.8c0-0.6-0.1-1.3-0.3-1.9c-0.2-0.6-0.5-1.1-0.9-1.6c-0.4-0.5-0.9-0.8-1.4-1.1c-0.5-0.3-1.1-0.4-1.8-0.4
          c-0.7,0-1.3,0.1-1.8,0.4c-0.5,0.3-1,0.7-1.4,1.1s-0.7,1-0.9,1.6C55.8,43.1,55.7,43.8,55.7,44.4z"/>
        <path d="M68.2,38l4.2,10.7L76.7,38h1.7l-5.2,12.8h-1.4L66.5,38H68.2z"/>
        <path d="M82.9,38h1.4l5.2,12.8h-1.7L86.3,47h-5.4l-1.5,3.7h-1.7L82.9,38z M85.9,45.8l-2.3-5.9l-2.4,5.9H85.9z"/>
      </g>
    </svg>
  );
};

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
          navBar.classList.remove('top-nav__root--out');
        } else {
          navBar.classList.add('top-nav__root--out');
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
              <Link to="/"><Logo /></Link>
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

TopBar.propTypes = {
  langsMenu: PropTypes.array,
  locale: PropTypes.string
}

export default TopBar;
