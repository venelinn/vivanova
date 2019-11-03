import React from 'react'
import PropTypes from 'prop-types'
import Hamburger from './Hamburger';
import SelectLanguage from './SelectLanguage'


const TopNav = (props) => (
    <nav className="nav nav-metas">
      <span className="is-accessible">Meta navigation</span>
      <ul>
        <li className="langbar">
          <SelectLanguage langsMenu={props.langsMenu} />
        </li>
        <li><Hamburger /></li>
      </ul>
    </nav>
)

TopNav.propTypes = {
  locale: PropTypes.string
}

export default TopNav;
