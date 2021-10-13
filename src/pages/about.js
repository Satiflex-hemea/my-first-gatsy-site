// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <p>My name is <b>Satiflex</b>, <i>master of Lycia...</i></p>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage