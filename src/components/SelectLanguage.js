import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';

/*
 * Rather than hide this, a better way would
 * be a tooltip and even in the unselected lang.
 * But, it's not recommended to call the API
 * directly, so consider removing entirely also.
 */

const SelectLanguage = (props) => {
  const links = props.langsMenu.map(lang =>
    <Link
      to={lang.link}
      key={lang.langKey}
      activeClassName="active"
      >
      <span selected={lang.selected}>
        {lang.langKey === 'en' ? 'English' : 'Français'}
      </span>
    </Link>
  );

  return (
    <>
      <span className="is-accessible"><FormattedMessage id="selectLanguage" /></span>
      {links}
    </>
  );
};

SelectLanguage.propTypes = {
  langsMenu: PropTypes.array
};

export default SelectLanguage;