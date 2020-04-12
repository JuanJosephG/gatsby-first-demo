import React from "react"
import { Link } from "gatsby"
import Layout from '../component/layout'
import Title from '../component/title'

export default ({data}) => (
    <Layout>
        <Title text={data.site.siteMetadata.title}/>
        <div>
            <Link to="/">Home</Link> | <Link to="/about">About me</Link>
        </div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet erat neque. Donec vitae eros aliquam, commodo ex sit amet, mattis leo. Aenean porta iaculis libero et finibus. Quisque nec ex diam. Cras volutpat suscipit ante sed volutpat. Sed sed ligula vel nulla ullamcorper vulputate ac vel tellus. Etiam dolor risus, faucibus eget volutpat ac, imperdiet id ligula. Vestibulum ultrices hendrerit vulputate. Fusce tincidunt velit id neque pulvinar posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent quis metus elementum justo condimentum tincidunt.
        </p>
    </Layout>
)

export const query = graphql `query{
    site {
      siteMetadata {
        title
      }
    }
  }`