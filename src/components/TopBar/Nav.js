import React from 'react'
import PropTypes from 'prop-types'
//import SelectLanguage from './SelectLanguage'

const TopNav = ({menu}) => {
  return (
    <nav className="nav nav-metas">
      <span className="is-accessible">Meta navigation</span>
      <ul>
        {menu.map((item, index) => {
          return (
            <li key={index}>
              { (item.name === item.href) ? (
                <a href={`#${item.name}`} className="jsSmoothScroll">{item.name}</a>
               ) : (
                <a href={`${item.href}`} target="_blank" rel="noopener noreferrer">{item.name}</a>
               )}
            </li>
          )
        })}
      </ul>
    </nav>
  );
};

TopNav.propTypes = {
  locale: PropTypes.array
}

export default TopNav;
