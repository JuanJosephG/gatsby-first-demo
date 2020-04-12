import React from "react"
import Layout from '../component/layout'
import Title from '../component/title'

export default () => (
    <Layout>
        <Title text='This is the about page'/>
        <div>
            <a href="/">Home</a> | <a href="/about">About me</a>
        </div>
        <p> 
            Lorem ipsum dolor sit amet, cosectetur adipiscing elit
        </p>
    </Layout>
)