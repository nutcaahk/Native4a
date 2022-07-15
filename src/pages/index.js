import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import * as styles from '../styles/index.module.css'
//import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    //const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [homePage] = get(this, 'props.data.allContentfulHomePage.nodes')

    return (
      <Layout location={this.props.location}>
      <div className="flex justify-center">
        <div className="grid grid-flow-col auto-cols-max box-decoration-clone">
          <div>
            <h1 className={styles.title}>{homePage.title}</h1>
            <h2 className={styles.title}>{homePage.subTitle}</h2>  
            <div className="border-b-2 border-amber-400 w-11/12"></div>
            <p className="py-5">{homePage.titleDescription.titleDescription}</p>
            <button class="rounded-none bg-blue-600 text-white px-7 py-1.5 rounded-md font-black text-xl">立即報價</button>
          </div>
          <div className='relative w-96'>
            <img src={homePage.nativeBanner.url} alt="Native4A banner"/>
          </div>
        </div>
      </div>
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
        nativeBanner {
          url
        }
      }
    }
  }
`
