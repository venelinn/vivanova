import React from 'react'
import PropTypes from 'prop-types'
// import Hamburger from './Hamburger';
import SelectLanguage from './SelectLanguage'

const TopNav = props => {
  return (
    <nav className="nav nav-metas">
      <span className="is-accessible">Meta navigation</span>
      <ul>
        {props.menu.map((item, index) => {
          return (
            <li key={index}>
              <a href={`#${item.slug}`} className="jsSmoothScroll">{item.slug}</a>
            </li>
          )
        })}
        <li className="langbar">
          <SelectLanguage langsMenu={props.langsMenu} />
        </li>
      </ul>
      {/* <Hamburger /> */}
      <div className="mobile-menu">
        <span className="ham__icon">
          <span className="ham__icon__line"></span>
          <span className="ham__icon__line"></span>
          <span className="ham__icon__line"></span>
        </span>
      </div>

    </nav>
  );
};

TopNav.propTypes = {
  locale: PropTypes.string
}

export default TopNav;
