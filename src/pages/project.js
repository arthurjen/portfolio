import React from 'react';
import Layout from '../components/layout';
import styles from './project.scss';

export default () => (
  <Layout>
    <section className={styles.project}>
      <div>
        <header>
          <h2>Project <span>TITLE</span></h2>
        </header>
        <p>about the project</p>
        <img src="something" alt="project photo"/>>
      </div>
    </section>
  </Layout>
)