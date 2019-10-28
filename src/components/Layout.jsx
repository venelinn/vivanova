import React, { Component } from 'react'
//import PropTypes from "prop-types"
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider, addLocaleData } from 'react-intl';
import 'intl';

import en from 'react-intl/locale-data/en';
import 'intl/locale-data/jsonp/en';
import de from 'react-intl/locale-data/de';
import 'intl/locale-data/jsonp/de';

import "../styles/style.scss"

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
    const location = this.props.location;
    const url = location.pathname;
    const { langs, defaultLangKey } = this.props.data.site.siteMetadata.languages;
    this.langKey = getCurrentLangKey(langs, defaultLangKey, url);
    this.homeLink = `/${this.langKey}/`;
    this.langsMenu = getLangs(langs, this.langKey, getUrlForLang(this.homeLink, url));
    // get the appropriate message file based on langKey
    // at the moment this assumes that langKey will provide us
    // with the appropriate language code
    this.i18nMessages = require(`../data/messages/${this.langKey}`);
  }
  render() {
    //console.log(this.props.data.site.siteMetadata.languages);
    return (
      <IntlProvider
        locale={this.langKey}
        messages={this.i18nMessages}
      >
        <>
        {this.children}
        </>
      </IntlProvider>
    );
  }
}

export default Layout
