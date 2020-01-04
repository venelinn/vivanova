import React from 'react'
import PropTypes from 'prop-types'
import SelectLanguage from './SelectLanguage'

const TopNav = ({menu, langsMenu, cv}) => {
  return (
    <nav className="nav nav-metas">
      <span className="is-accessible">Meta navigation</span>
      <ul>
        {menu.map((item, index) => {
          return (
            <li key={index} className="animated">
              <a href={`#${item.slug}`} className="jsSmoothScroll">{item.slug}</a>
            </li>
          )
        })}
        <li>
          <a href={cv[0].file.file.url}>{cv[0].name}</a>
        </li>
        <li className="langbar animated">
          <SelectLanguage langsMenu={langsMenu} />
        </li>
      </ul>
    </nav>
  );
};

TopNav.propTypes = {
  locale: PropTypes.string
}

export default TopNav;
