import React from 'react';
import { graphql, navigate, withPrefix } from 'gatsby'
import { getUserLangKey } from 'ptz-i18n';

import SEO from "../components/Seo"

const RedirectIndex = props => {
  if (typeof window !== 'undefined') {
    const { langs, defaultLangKey } = props.data.site.siteMetadata.languages;
    const langKey = getUserLangKey(langs, defaultLangKey);
    const homeUrl = withPrefix(`/${langKey}/`);
    navigate(homeUrl);
  }
  return (
    <SEO title="Victoria Ivanova" />
  )
}

export default RedirectIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site{
      siteMetadata{
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;
