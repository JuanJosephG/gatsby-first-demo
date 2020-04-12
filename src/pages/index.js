import React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import Layout from '../component/layout'
import Title from '../component/title'
import Article from '../component/article'

export default ({data}) => (
    <Layout>
      <Title text="Welcome"/>
      <div>
          <Link to="/">Home</Link> | <Link to="/about">About me</Link>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet erat neque. Donec vitae eros aliquam, commodo ex sit amet, mattis leo. Aenean porta iaculis libero et finibus. Quisque nec ex diam. Cras volutpat suscipit ante sed volutpat. Sed sed ligula vel nulla ullamcorper vulputate ac vel tellus. Etiam dolor risus, faucibus eget volutpat ac, imperdiet id ligula. Vestibulum ultrices hendrerit vulputate. Fusce tincidunt velit id neque pulvinar posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent quis metus elementum justo condimentum tincidunt.
      </p>

      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Article id={node.id}
            to='/'
            keywords={node.frontmatter.keywords}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </Layout>
)

export const query = graphql `query{
    allMarkdownRemark(sort: {fields:[frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            image
            date(formatString: "MMMM YYYY")
          }
          excerpt
        }
      }
    }
  }`