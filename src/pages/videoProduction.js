import React from 'react'
import Seo from '../components/seo'

import Layout from '../components/layout'


class videoProduction extends React.Component {
    render() {
      return (
        <Layout location={this.props.location}>
          <Seo title="Blog" />
        </Layout>
      )
    }
  }

export default videoProduction