import React from 'react'

import Container from './container'
import * as styles from '../styles/footer.module.css'

import Native_logo from '../img/Native_logo.svg';
import googlePartner from '../img/googlePartnerBadge.png'


const Footer = () => (
  <Container as="footer">
    {/* Block Comments */}
    <section className={styles.container}>
      <div className='grid grid-rows-2 items-center my-20'>
        <h2 className='text-center text-4xl'>Native 讓你站在巨人肩上。</h2>
        <div className='rounded-t-lg overflow-hidden text-center p-4 mt-3'>
          <button type="button" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 border border-blue-700 rounded'>立即報價</button>
        </div>
      </div>
    </section>
    <section className='bg-neutral-200 px-11'>
      <div className='grid grid-cols-6'>
        <div className=''>
          <img className='rounded-sm' src={Native_logo} alt="service_Video_Production"/>
        </div>
        <div className='col-span-4 text-left flex items-center'>
          <p>Copyright © 2021 native4a . All Rights Reserved. Privacy-Policy｜Terms of Businesshello</p>
        </div>
        <div className=''>
        <img className='rounded-sm' src={googlePartner} alt="service_Video_Production"/>
        </div>
      </div>
    </section>
  </Container>
)

export default Footer
