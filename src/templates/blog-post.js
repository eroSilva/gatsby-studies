import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"

export const query = graphql`
  query Posts($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
      }
      html
    }
  }
`

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </Layout>
  )
}

export default BlogPost
