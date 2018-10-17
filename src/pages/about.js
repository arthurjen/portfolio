import React from 'react';
import Layout from '../components/layout';
import styles from './about.scss';

export default ({ img }) => (
  <Layout>
    <section className={styles.about}>
      <section className="bio">
        <header>
          <h2><span>hey</span> it's me</h2>
        </header>
        <div>
          <p>I am a full stack software developer.</p>
          <p>Machine learning is the <em>future</em>.</p>
          <p>And I want to help</p>
          <p>make it a <em>reality</em>.</p>
        </div>
      </section>
      <section className="links">
          <h2>let's</h2>
        <ul>
          <h2>connect</h2>
          <li>
            email:
            <a href="mailto:arthurljen@gmail.com">
              <i className="fas fa-envelope-square"></i>
            </a>
          </li>
          <li>
            linkedin:
            <a href="https://www.linkedin.com/in/arthurjen/">
              <abbr title="Linkedin"><i className="fab fa-linkedin"></i></abbr>
            </a>
          </li>
          <li>
            github:
            <a href="https://github.com/arthurjen">
              <abbr title="Github"><i className="fab fa-github-square"></i></abbr>
            </a>
          </li>
          <li>
            steam:
            <a href="https://steamcommunity.com/id/wallaroo">
            <abbr title="Let's play some Dota!"><i className="fab fa-steam-square"></i></abbr>
            </a>
          </li>
        </ul>
      </section>
      
    </section>
  </Layout>
)