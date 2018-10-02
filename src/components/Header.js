import React from "react"
import { Link } from 'gatsby';
import styles from './Header.scss';

export default () => (
  <header className={styles.header}>
    <hgroup>
      <h1>Arthur Jen</h1>
    </hgroup>
    <nav>
      <Link activeStyle={{ borderBottom: '4px solid rgb(21, 187, 253)' }} to="/">Projects</Link>
      <Link activeStyle={{ borderBottom: '4px solid rgb(21, 187, 253)' }} to="/about">About</Link>
      <Link activeStyle={{ borderBottom: '4px solid rgb(21, 187, 253)' }} to="/contact">Contact</Link>
    </nav>
    <ul>
      <li>
        <a href="mailto:arthurljen@gmail.com">
          <abbr title="Email"><i className="fas fa-envelope-square"></i></abbr>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/arthurjen/">
          <abbr title="Linkedin"><i className="fab fa-linkedin"></i></abbr>
        </a>
      </li>
      <li>
        <a href="https://github.com/arthurjen">
          <abbr title="Github"><i className="fab fa-github-square"></i></abbr>
        </a>
      </li>
      <li>
        <a href="https://steamcommunity.com/id/wallaroo">
        <abbr title="Let's play some Dota!"><i className="fab fa-steam-square"></i></abbr>
        </a>
      </li>
    </ul>
  </header>
)