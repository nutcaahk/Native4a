import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import * as styles from '../styles/index.module.css'
import background from '../img/Ellipse_53.png';
import Native_Awards from '../img/Native_Awards1.png';
import Native_Awards2 from '../img/Native_Awards2.png';
import hket from '../img/logo_hket.png';
import TheStandard from '../img/The_Standard_Logo.svg_.png';
import section1image from '../img/20943885.png';
//import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    //const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [homePage] = get(this, 'props.data.allContentfulHomePage.nodes')

    return (
      <Layout location={this.props.location}>
      <div className={styles.container}>
        <div className="grid grid-cols-2 gap-4 flex justify-center">
          <div >
            <div className=''>
              <h1 className={styles.title}>{homePage.title}</h1>
              <h1 className={styles.title}>{homePage.subTitle}</h1>  
              <div className="border-b-2 border-amber-400 w-11/12"></div>
              <p className="py-5 text-2xl">{homePage.titleDescription.titleDescription}</p>
              <button class="rounded-none bg-blue-600 text-white px-7 py-1.5 rounded-md font-black text-xl">立即報價</button>
              <h4 className='text-2xl pt-12 pb-4'>「Native4a」品牌 - <mark>獲獎的廣告公司</mark></h4>
            </div>
            <div>
              <div className='grid grid-cols-2'>
                <div>
                  <p className="underline px-4 decoration-yellow-400 underline-offset-4 decoration-2"><b>年度獎項</b></p>
                  <div className='grid grid-cols-2 pt-5'>
                    <div className='drop-shadow'>
                      <img className='' src={Native_Awards} alt="Native_Awards"/>
                    </div>
                    <div className='drop-shadow'>
                      <img className='' src={Native_Awards2} alt="Native_Awards"/>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="underline px-4 decoration-yellow-400 underline-offset-4 decoration-2"><b>媒體報導</b></p>
                  <div className='pt-5'>
                    <div className='w-48'>
                      <img className='px-5 pb-5' src={hket} alt="Native_Awards"/>
                      <img className='px-5' src={TheStandard} alt="Native_Awards"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={homePage.nativeBanner.url} alt="Native4A banner"/>
            <img className={styles.Yellow_Ellipse} src={background} alt="Native4A bannerbg"/>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className='grid grid-cols-3 grid-row-2'>
          <div>
            <p className="underline decoration-yellow-400 underline-offset-4 decoration-2"><b>服務範圍</b></p>
            <h2 className='text-4xl pt-3 pb-4'>我們將「創意好橋」<br/>盡情發揮。</h2>
            <p className="text-xl">有「橋」，都要有渠道，看看我們擅長的領域。</p>
          </div>
          <div>
            <img src={section1image} alt="service_Video_Production"/>
            <h3 className='text-2xl font-bold'>影片製作</h3>
            <p className='text-md'>用影片，直接表達產品的優勝之處。</p>
            <button>立即報價</button>
          </div>
          <div>
          <img src={section1image} alt="service_Video_Production"/>
            <h3 className='text-2xl font-bold'>影片製作</h3>
            <p className='text-md'>用影片，直接表達產品的優勝之處。</p>
            <button>立即報價</button>
          </div>
          <div>
          <img src={section1image} alt="service_Video_Production"/>
            <h3 className='text-2xl font-bold'>影片製作</h3>
            <p className='text-md'>用影片，直接表達產品的優勝之處。</p>
            <button>立即報價</button>
          </div>
          <div>
          <img src={section1image} alt="service_Video_Production"/>
            <h3 className='text-2xl font-bold'>影片製作</h3>
            <p className='text-md'>用影片，直接表達產品的優勝之處。</p>
            <button>立即報價</button>
          </div>
          <div>
          <img src={section1image} alt="service_Video_Production"/>
            <h3 className='text-2xl font-bold'>影片製作</h3>
            <p className='text-md'>用影片，直接表達產品的優勝之處。</p>
            <button>立即報價</button>
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
