import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
//import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    //const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [homePage] = get(this, 'props.data.allContentfulHomePage.nodes')

    return (
      <Layout location={this.props.location}>
        <Hero
          title={homePage.title}
          subtitle={homePage.subTitle}
          titleDes={homePage.titleDescription.titleDescription}
          logo={homePage.nativeLogo.url}
        />

      </Layout>
    )
  }
}

/*
  ===========blog post============
  <ArticlePreview posts={posts} />
*/

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          raw
        }
        title
        heroImage: image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1180
          )
        }
        company
      }
    }
    allContentfulHomePage {
      nodes {
        title
        subTitle
        nativeLogo {
          url
        }
        titleDescription {
          titleDescription
        }
      }
    }
  }
`
