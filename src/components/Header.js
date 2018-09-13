import React from "react"
import { Link } from 'gatsby';
import styles from './Header.scss';

export default () => (
  <header className={styles.header}>
    <hgroup>
      <h1>AJ</h1>
    </hgroup>
    <nav>
      <Link to="/">Work</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/arthurjen/">
          <i className="fas fa-envelope-square"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/arthurjen/">
          <i className="fab fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/arthurjen">
          <i className="fab fa-github-square"></i>
        </a>
      </li>
      <li>
        <a href="https://steamcommunity.com/id/wallaroo">
          <i className="fab fa-steam-square"></i>
        </a>
      </li>
    </ul>
  </header>
)