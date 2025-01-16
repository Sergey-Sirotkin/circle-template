import React from "react"
import AboutHeader from "../components/about/aboutHeader"
import AboutMore from "../components/about/aboutMore"
import AboutTeamBigCard from "../components/about/aboutTeamBigCard"

import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <AboutHeader></AboutHeader>
      <AboutMore></AboutMore>
      <AboutTeamBigCard></AboutTeamBigCard>
    </Layout>
  )
}

export default About
