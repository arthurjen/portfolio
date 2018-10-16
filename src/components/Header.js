import React from "react"
import { Link } from 'gatsby';
import styles from './Header.scss';

const activeLink = {
  borderBottom: '4px solid rgb(21, 187, 253)'
}

export default () => (
  <header className={styles.header}>
    <hgroup>
      <h1>Arthur Jen</h1>
    </hgroup>
    
    <nav>
      <Link activeStyle={activeLink} to="/">Work</Link>
      <Link activeStyle={activeLink} to="/about">About</Link>
    </nav>
  </header>
)