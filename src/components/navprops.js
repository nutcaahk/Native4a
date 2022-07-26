import React from 'react'
import { Link } from 'gatsby'


import * as styles from '../styles/navprops.module.css'

const Navprops = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">
        影片製作
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">
          網站設計
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">
          SEO
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">
          Backlink
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">
          Google廣告
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" >
          社交媒體廣告
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navprops
