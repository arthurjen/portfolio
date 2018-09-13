import React from 'react';
import Layout from '../components/layout';
import styles from './contact.scss';

export default () => (
  <Layout>
    <section className={styles.contact}>
      <header>
        <h2>let's connect</h2>
      </header>
      <ul>
        <li>
          Email
        </li>
        <li>
          Linkedin
        </li>
        <li>
          GitHub
        </li>
        <li>
          Steam
        </li>
      </ul>
    </section>
  </Layout>
)