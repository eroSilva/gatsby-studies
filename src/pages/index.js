import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      background="red"
      category="Misc"
      date="13 de Janeiro de 2020"
      timeToRead="5"
      title="Estudando desenvolvimento de sites estáticos com GatsbyJS"
      description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel doloribus quaerat deleniti eligendi omnis officia nisi veniam iste animi hic obcaecati autem nam, temporibus voluptatum beatae voluptatem optio ratione dolorum?"
    />
  </Layout>
)

export default IndexPage
