import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { SignIn } from '../components/signin'

const IndexPage = () => (
  <Layout>
    <SEO title="Habits" keywords={[`gatsby`, `application`, `react`]} />
    <SignIn />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
  </Layout>
)

export default IndexPage
