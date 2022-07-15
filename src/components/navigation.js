import React from 'react'
import { Link } from 'gatsby'

import * as styles from '../styles/navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <img class="text-2xl font-medium text-blue-500" src="https://images.ctfassets.net/rpza41pe9ev5/4TnFsyHjX9DAEVP8nFa7Oi/233e6fa3394a5e42bd294c46c11b94e0/2022_native4a_logo______________1.svg" alt="hello"/>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/blog/">
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
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
</svg>
  </nav>
)

export default Navigation
