import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import * as styles from '../styles/index.module.css'

import StarRatings from "react-star-ratings";

import background from '../img/Ellipse_53.png';
import Native_Awards from '../img/Native_Awards1.png';
import Native_Awards2 from '../img/Native_Awards2.png';
import hket from '../img/logo_hket.png';
import TheStandard from '../img/The_Standard_Logo.svg_.png';
import section2image from '../img/20943885.png';
import Moving_Company from '../img/搬屋公司.png';
import Interior_design from '../img/室內設計.png';
import century21 from '../img/21.png';
import RH_Curtain from '../img/RH_Curtain.png';
import accolade from '../img/accolade.png';
import Tind from '../img/TIND_logo.jpg';
import alessandro_logo from '../img/alessandro_logo.png';
import accolade_logo from '../img/accolade_logo.png';
import esey_logo from '../img/esey_logo.png';
import refined_logo from '../img/refined_logo.png';
import NORA_logo from '../img/NORA_logo.png';
import Gas_logo from '../img/煤氣達人_logo.png';
import LAFAYETTE_logo from '../img/LAFAYETTE_logo.png';
import JACO_logo from '../img/JACO_logo.png';
import LOST_logo from '../img/LOST_logo.png';
import PHK_logo from '../img/鉑康LOGO.png';
import taste_logo from '../img/taste_logo.png';
import health_logo from '../img/health_logo.png';
import emmas_logo from '../img/emmas_logo.png';
import bay247_logo from '../img/bay247_logo(2).png';
import Annetso_Shop_logo from '../img/Annetso_Shop_logo.png'
import Cardhero_Logo from '../img/Cardhero_Logo.png'
import easy_transportation_logo from '../img/easy_transportation_logo.jpg'
import c21_logo from '../img/c21.png'
import RefinedHouse_logo from '../img/RefinedHouse_logo.jpg'
import accolade_logo_s from '../img/accolade_logo_s.png'
//import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    //const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [homePage] = get(this, 'props.data.allContentfulHomePage.nodes')

    return (
      <Layout location={this.props.location}>
      <section className={styles.container}>
        <div className="grid grid-cols-2 gap-4 flex justify-center">
          <div >
            <div className="pt-16">
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
      </section>
      <section className={styles.section2_wrap}>
        <div className={styles.container}>
          <div className='grid grid-cols-3 grid-row-2'>
            <div>
              <p className="underline decoration-yellow-400 underline-offset-4 decoration-2"><b>服務範圍</b></p>
              <h2 className='text-4xl pt-3 pb-4'>我們將「創意好橋」<br/>盡情發揮。</h2>
              <p className="text-xl">有「橋」，都要有渠道，看看我們擅長的領域。</p>
            </div>
            <div className='shadow m-9 p-9 rounded'>
              <img src={section2image} alt="service_Video_Production"/>
              <h3 className='text-2xl font-bold'>影片製作</h3>
              <p className='text-md'>用影片，直接表達產品的優勝之處。</p>
              <button className='mt-11 sticky top-[100vh]'>立即報價</button>
            </div>
            <div className='shadow m-9 p-9 rounded'>
              <img src={section2image} alt="service_Video_Production"/>
              <h3 className='text-2xl font-bold'>Google廣告</h3>
              <p className='text-md'>在Google投放廣告包括：關鍵字搜索、GDN多煤體廣告、購物廣告、YouTube廣告等。</p>
              <button className='mt-11 sticky top-[100vh]'>立即報價</button>
            </div>
            <div className='shadow m-9 p-9 rounded'>
              <img src={section2image} alt="service_Video_Production"/>
              <h3 className='text-2xl font-bold'>社交媒體廣告</h3>
              <p className='text-md'>在Facebook & IG投放廣告，圖片廣告、多圖輪播、影片廣告。</p>
              <button className='mt-11 sticky top-[100vh]'>立即報價</button>
            </div>
            <div className='shadow m-9 p-9 rounded'>
              <img src={section2image} alt="service_Video_Production"/>
              <h3 className='text-2xl font-bold'>SEO & Backlinks</h3>
              <p className='text-md'>透過自然排名上升，在Google上獲得大量的免費點擊和商譽提升。</p>
              <button className='mt-11 sticky top-[100vh]'>立即報價</button>
            </div>
            <div className='shadow m-9 p-9 rounded'>
              <img src={section2image} alt="service_Video_Production"/>
              <h3 className='text-2xl font-bold'>網站設計及開發</h3>
              <p className='text-md'>設計創意和精美的網站，使品牌贏在起跑線。</p>
              <button className='mt-11 sticky top-[100vh]'>立即報價</button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section3an4_wrap}>
        <div className={styles.container}>
          <div className='grid grid-rows-2 items-center'>
            <h2 className='text-center text-4xl underline decoration-yellow-400'>客戶見證我們成長</h2>
            <div className='grid grid-cols-5'>
              <div className='px-3'>
                <img className='rounded-sm' src={Interior_design} alt="service_Video_Production"/>
                <p className='text-md pt-5 text-center px-4'>NATIVE4A的專業知識協助我們提升了對網站的推廣。</p>
                <div className='grid grid-cols-8 p-4'>
                  <img className='rounded-sm col-start-1 col-end-3 rounded-full' src={Tind} alt="service_Video_Production"/>
                  <div className='px-4 col-start-3 col-end-9'>
                    <p><b>Lo Ng</b></p>
                    <p>Taste Design CEO</p>
                    <div>
                      <StarRatings
                        rating={5}
                        starRatedColor="#ffaa22"
                        starHoverColor="#ffaa22"
                        starDimension="18px"
                        starSpacing="4px"
                        numberOfStars={5}
                        name="rating"
                        svgIconViewBox="0 0 1024 1024"
                        svgIconPath="M1008.056 454.562c-72.046 87.755-199.442 232.63-199.442 232.63s20.836 159.064 32.514 267.717c5.077 55.339-34.822 79.272-80.005 57.7-85.98-43.192-216.818-110.113-246.25-125.192-29.952 14.928-162.103 80.744-248.973 123.836-45.705 21.52-86.082-2.408-80.945-57.647 11.833-108.493 32.883-267.403 32.883-267.403S88.979 541.633 16.098 453.99c-25.758-31.83-9.219-77.076 41.57-85.395 103.567-19.581 264.104-50.79 264.104-50.79S409.58 155.963 465.134 56.846c30.576-60.313 51.728-53.35 55.345-51.574 9.423 3.246 24.295 14.975 43.712 51.626 54.923 99.27 141.74 261.326 141.74 261.326s158.649 31.212 261.012 50.842c50.178 8.368 66.564 53.666 41.113 85.496z"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='px-3'>
                <img className='rounded-sm' src={Moving_Company} alt="service_Video_Production"/>
                <p className='text-md pt-5 text-center px-4'>NATIVE4A的專業知識協助我們提升了對網站的推廣。</p>
                <div className='grid grid-cols-8 p-4'>
                  <img className='rounded-sm col-start-1 col-end-3 rounded-full' src={easy_transportation_logo} alt="service_Video_Production"/>
                  <div className='px-4 col-start-3 col-end-9'>
                    <p><b>兆哥</b></p>
                    <p>搬屋易Founder</p>
                    <div>
                      <StarRatings
                        rating={5}
                        starRatedColor="#ffaa22"
                        starHoverColor="#ffaa22"
                        starDimension="18px"
                        starSpacing="4px"
                        numberOfStars={5}
                        name="rating"
                        svgIconViewBox="0 0 1024 1024"
                        svgIconPath="M1008.056 454.562c-72.046 87.755-199.442 232.63-199.442 232.63s20.836 159.064 32.514 267.717c5.077 55.339-34.822 79.272-80.005 57.7-85.98-43.192-216.818-110.113-246.25-125.192-29.952 14.928-162.103 80.744-248.973 123.836-45.705 21.52-86.082-2.408-80.945-57.647 11.833-108.493 32.883-267.403 32.883-267.403S88.979 541.633 16.098 453.99c-25.758-31.83-9.219-77.076 41.57-85.395 103.567-19.581 264.104-50.79 264.104-50.79S409.58 155.963 465.134 56.846c30.576-60.313 51.728-53.35 55.345-51.574 9.423 3.246 24.295 14.975 43.712 51.626 54.923 99.27 141.74 261.326 141.74 261.326s158.649 31.212 261.012 50.842c50.178 8.368 66.564 53.666 41.113 85.496z"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='px-3'>
                <img className='rounded-sm' src={century21} alt="service_Video_Production"/>
                <p className='text-md pt-5 text-center px-4'>NATIVE4A的專業知識協助我們提升了對網站的推廣。</p>
                <div className='grid grid-cols-8 p-4'>
                  <img className='rounded-sm col-start-1 col-end-3 rounded-full' src={c21_logo} alt="service_Video_Production"/>
                  <div className='px-4 col-start-3 col-end-9'>
                    <p><b>Max Hung</b></p>
                    <p>世紀21業務經理</p>
                    <div>
                      <StarRatings
                        rating={5}
                        starRatedColor="#ffaa22"
                        starHoverColor="#ffaa22"
                        starDimension="18px"
                        starSpacing="4px"
                        numberOfStars={5}
                        name="rating"
                        svgIconViewBox="0 0 1024 1024"
                        svgIconPath="M1008.056 454.562c-72.046 87.755-199.442 232.63-199.442 232.63s20.836 159.064 32.514 267.717c5.077 55.339-34.822 79.272-80.005 57.7-85.98-43.192-216.818-110.113-246.25-125.192-29.952 14.928-162.103 80.744-248.973 123.836-45.705 21.52-86.082-2.408-80.945-57.647 11.833-108.493 32.883-267.403 32.883-267.403S88.979 541.633 16.098 453.99c-25.758-31.83-9.219-77.076 41.57-85.395 103.567-19.581 264.104-50.79 264.104-50.79S409.58 155.963 465.134 56.846c30.576-60.313 51.728-53.35 55.345-51.574 9.423 3.246 24.295 14.975 43.712 51.626 54.923 99.27 141.74 261.326 141.74 261.326s158.649 31.212 261.012 50.842c50.178 8.368 66.564 53.666 41.113 85.496z"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='px-3'>
                <img className='rounded-sm' src={RH_Curtain} alt="service_Video_Production"/>
                <p className='text-md pt-5 text-center px-4'>NATIVE4A的專業知識協助我們提升了對網站的推廣。</p>
                <div className='grid grid-cols-8 p-4'>
                  <img className='rounded-sm col-start-1 col-end-3 rounded-full' src={RefinedHouse_logo} alt="service_Video_Production"/>
                  <div className='px-4 col-start-3 col-end-9'>
                    <p><b>Tony</b></p>
                    <p>RH Curtain CEO</p>
                    <div>
                      <StarRatings
                        rating={5}
                        starRatedColor="#ffaa22"
                        starHoverColor="#ffaa22"
                        starDimension="18px"
                        starSpacing="4px"
                        numberOfStars={5}
                        name="rating"
                        svgIconViewBox="0 0 1024 1024"
                        svgIconPath="M1008.056 454.562c-72.046 87.755-199.442 232.63-199.442 232.63s20.836 159.064 32.514 267.717c5.077 55.339-34.822 79.272-80.005 57.7-85.98-43.192-216.818-110.113-246.25-125.192-29.952 14.928-162.103 80.744-248.973 123.836-45.705 21.52-86.082-2.408-80.945-57.647 11.833-108.493 32.883-267.403 32.883-267.403S88.979 541.633 16.098 453.99c-25.758-31.83-9.219-77.076 41.57-85.395 103.567-19.581 264.104-50.79 264.104-50.79S409.58 155.963 465.134 56.846c30.576-60.313 51.728-53.35 55.345-51.574 9.423 3.246 24.295 14.975 43.712 51.626 54.923 99.27 141.74 261.326 141.74 261.326s158.649 31.212 261.012 50.842c50.178 8.368 66.564 53.666 41.113 85.496z"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='px-3'>
                <img className='rounded-sm' src={accolade} alt="service_Video_Production"/>
                <p className='text-md pt-5 text-center px-4'>NATIVE4A的專業知識協助我們提升了對網站的推廣。</p>
                <div className='grid grid-cols-8 p-4'>
                  <img className='rounded-sm col-start-1 col-end-3 rounded-full' src={accolade_logo_s} alt="service_Video_Production"/>
                  <div className='px-4 col-start-3 col-end-9'>
                    <p><b>Paul Lu</b></p>
                    <p>Accolade COO</p>
                    <div>
                      <StarRatings
                        rating={5}
                        starRatedColor="#ffaa22"
                        starHoverColor="#ffaa22"
                        starDimension="18px"
                        starSpacing="4px"
                        numberOfStars={5}
                        name="rating"
                        svgIconViewBox="0 0 1024 1024"
                        svgIconPath="M1008.056 454.562c-72.046 87.755-199.442 232.63-199.442 232.63s20.836 159.064 32.514 267.717c5.077 55.339-34.822 79.272-80.005 57.7-85.98-43.192-216.818-110.113-246.25-125.192-29.952 14.928-162.103 80.744-248.973 123.836-45.705 21.52-86.082-2.408-80.945-57.647 11.833-108.493 32.883-267.403 32.883-267.403S88.979 541.633 16.098 453.99c-25.758-31.83-9.219-77.076 41.57-85.395 103.567-19.581 264.104-50.79 264.104-50.79S409.58 155.963 465.134 56.846c30.576-60.313 51.728-53.35 55.345-51.574 9.423 3.246 24.295 14.975 43.712 51.626 54.923 99.27 141.74 261.326 141.74 261.326s158.649 31.212 261.012 50.842c50.178 8.368 66.564 53.666 41.113 85.496z"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section3an4_wrap}>
        <div className={styles.container}>
          <div className='grid grid-rows-2 items-center'>
            <h2 className='text-center text-4xl underline decoration-yellow-400'>更多合作客戶</h2>
            <div className='grid grid-cols-4 items-center'>
              <div>
                <img className='rounded-sm w-72 p-11' src={PHK_logo} alt="service_Video_Production"/>
              </div>
              <div>
                <img className='rounded-sm w-72 p-11' src={esey_logo} alt="service_Video_Production"/>
              </div>
              <div>
                <img className='rounded-sm w-72 p-11' src={taste_logo} alt="service_Video_Production"/>
              </div>
              <div>
                <img className='rounded-sm w-72 p-11' src={accolade_logo} alt="service_Video_Production"/>
              </div>
            </div>
            <div className='grid grid-cols-4 items-center'>
              <div>
                <img className='rounded-sm w-72 p-11' src={LOST_logo} alt="service_Video_Production"/>
              </div>
              <div>
                <img className='rounded-sm w-72 p-11' src={JACO_logo} alt="service_Video_Production"/>
              </div>
              <div>
                <img className='rounded-sm w-72 p-11' src={refined_logo} alt="service_Video_Production"/>
              </div>
              <div>
                <img className='rounded-sm w-72 p-11' src={Gas_logo} alt="service_Video_Production"/>
              </div>
            </div>
            <div className='grid grid-cols-4 items-center'>
              <div>
                <img className='rounded-sm w-72 p-11' src={health_logo} alt="service_Video_Production"/>
              </div>
              <div>
                <img className='rounded-sm w-64 p-11' src={bay247_logo} alt="service_Video_Production"/>
              </div>
              <div>
                <img className='rounded-sm w-72 p-11' src={emmas_logo} alt="service_Video_Production"/>
              </div>
              <div>
                <img className='rounded-sm w-72 p-11' src={LAFAYETTE_logo} alt="service_Video_Production"/>
              </div>
            </div>
            <div className='grid grid-cols-4 justify-items-center items-center'>
              <div>
                <img className='rounded-sm w-72 p-11' src={NORA_logo} alt="service_Video_Production"/>
              </div>
              <div>
                <img className='rounded-sm w-60 p-11' src={alessandro_logo} alt="service_Video_Production"/>
              </div>
              <div>
                <img className='rounded-sm w-72 p-11' src={Annetso_Shop_logo} alt="service_Video_Production"/>
              </div>
              <div>
                <img className='rounded-sm w-72 p-11' src={Cardhero_Logo} alt="service_Video_Production"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Layout>
    )
  }
}
/*
  ===========blog post============
  <ArticlePreview posts={posts} />

  ===========multi class============
  <div className={`${styles.container} ${styles.bg_write}`}>
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
