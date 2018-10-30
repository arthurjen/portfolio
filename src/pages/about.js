import React from 'react';
import Layout from '../components/layout';
import styles from './about.scss';

export default ({ img }) => (
  <Layout>
    <section className={styles.about}>
      <section className="bio">
        <header>
          <h2>Hey there</h2>
        </header>
        <div>
          <p>I am a full stack software developer.</p>
          <p>Machine learning is the <em>future</em>.</p>
          <p>And I'm going to help make it a <em>reality</em>.</p>
          <p>How? Still figuring that out.</p>
        </div>
      </section>
      <section className="links">
        <h2>Let's connect</h2>
        <ul>
          <li>
            <span>email:</span>
            <a href="mailto:arthurljen@gmail.com">
              <i className="fas fa-envelope-square"/>
            </a>
          </li>
          <li>
            <span>linkedin:</span>
            <a href="https://www.linkedin.com/in/arthurjen/">
              <i className="fab fa-linkedin"/>
            </a>
          </li>
          <li>
            <span>github:</span>
            <a href="https://github.com/arthurjen">
              <i className="fab fa-github-square"/>
            </a>
          </li>
        </ul>
      </section>
      
    </section>
  </Layout>
)