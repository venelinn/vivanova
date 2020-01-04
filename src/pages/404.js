import React from "react"
import Helmet from 'react-helmet'

import Layout from "../components/layout"
import SEO from "../components/Seo"
import GlobalStyle from '../styles/global';

const NotFoundPage = props => (

  <Layout
    data={props.data}
    location={props.location}
  >
    <SEO title="404: Not found" />
    <Helmet>
      <body className="page__404" />
    </Helmet>
    <GlobalStyle />
    <div class="content">
      <p>Page not found - 404</p>
      <h1>There's no light here</h1>
    </div>
  </Layout>
)

export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundQuery {
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
