import React from "react"
import Header from '../components/header'
import { graphql } from "gatsby";
import Layout from '../components/layout';

export default ({data}) => (
  <Layout>
    <div style={{ color: `teal` }}>
        <Header headerText={data.site.siteMetadata.title}/>
        <p>Such wow. Very React.</p>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
