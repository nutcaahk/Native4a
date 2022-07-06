import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
    {/* Block Comments */}
    Copyright © 2021 native4a . All Rights Reserved. Privacy-Policy｜Terms of Business
    </div>
  </Container>
)

export default Footer
