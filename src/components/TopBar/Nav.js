import React from 'react'
import PropTypes from 'prop-types'
import Hamburger from './Hamburger';
import SelectLanguage from './SelectLanguage'


const TopNav = props => {
  console.log(props.menu);
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
        <li><Hamburger /></li>
      </ul>
    </nav>
  );
};

TopNav.propTypes = {
  locale: PropTypes.string
}

export default TopNav;
