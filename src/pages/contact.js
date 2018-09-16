import React from 'react';
import Layout from '../components/layout';
import styles from './contact.scss';

export default () => (
  <Layout>
    <section className={styles.contact}>
      <div>
        <header>
          <h2>let's <span>connect</span></h2>
        </header>
        <ul>
          <li>
          <a href="mailto:arthurljen@gmail.com">Email</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/arthurjen/">Linkedin</a>
          </li>
          <li>
            <a href="https://github.com/arthurjen">Github</a>
          </li>
        </ul>
      </div>
      <div>
        <header>
          <h2>or let's <span>play</span></h2>
        </header>
        <ul>
          <li>
            <a href="https://steamcommunity.com/id/wallaroo">Steam</a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
)