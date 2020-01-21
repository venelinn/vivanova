import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import TopBar from './TopBar';
import { IntlProvider, addLocaleData } from 'react-intl';
import 'intl';

import en from 'react-intl/locale-data/en';
import 'intl/locale-data/jsonp/en';
import de from 'react-intl/locale-data/de';
import 'intl/locale-data/jsonp/de';

//import favicon from '../images/favicon.png';

import "../styles/style.scss"

// add concatenated locale data
addLocaleData([...en, ...de]);

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('.jsSmoothScroll');
}

class Layout extends Component {
  constructor(props) {
    super(props);
    this.children = this.props.children;
    const data = this.props.data;
    const location = this.props.location;
    const url = location.pathname;
    const { langs, defaultLangKey } = data.site.siteMetadata.languages;
    this.langKey = getCurrentLangKey(langs, defaultLangKey, url);
    this.homeLink = `/${this.langKey}/`;
    this.langsMenu = getLangs(langs, this.langKey, getUrlForLang(this.homeLink, url));
    // get the appropriate message file based on langKey
    // at the moment this assumes that langKey will provide us
    // with the appropriate language code
    this.i18nMessages = require(`../data/messages/${this.langKey}`);

  }
  render() {
    const { menu } = this.props
    const menuLang = this.langsMenu.map(item => {
      return {
        name: item.langKey,
        href: item.link,
        active: item.selected
      }
    });

    //const menu = [...this.props.menu, ...menu3].filter(item => item.active === true);
    //const menu1 = menu.concat(menu3);

    ///const menu1 = [...menu, ...menuLang].filter(item => !item.active);
    let menu1 = [...menu, ...menuLang].filter(item => !item.active);

    return (
      <IntlProvider
        locale={this.langKey}
        messages={this.i18nMessages}

      >
        <main className="page">
         <TopBar
          menu={menu1}
         />
          {this.children}
        </main>

      </IntlProvider>
    );
  }
}

export default Layout
