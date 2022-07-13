import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <img className={styles.lgo_img}src="https://images.ctfassets.net/rpza41pe9ev5/4TnFsyHjX9DAEVP8nFa7Oi/233e6fa3394a5e42bd294c46c11b94e0/2022_native4a_logo______________1.svg" alt="hello"/>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
        影片製作
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          網站設計
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          SEO
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Backlink
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Google廣告
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          社交媒體廣告
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
