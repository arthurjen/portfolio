import React from 'react';
import Layout from '../components/layout';
import styles from './halchemy.scss';

export default () => (
  <Layout>
    <section className={styles.halchemy}>
      <hgroup>
        <h1>HALchemy</h1>
      </hgroup>
      <div className="description">
        <p>HALchemy is a chatbot game.</p>
        <ul>
          <h4>Link:</h4>
          <a href="https://halchemy.herokuapp.com">Website</a>
          <h4>Front End:</h4>
          <p>none</p>
          <h4>Back End:</h4>
          <p>MongoDB, NodeJS</p>
        </ul>
      </div>
      <div className="screenshots">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  </Layout>
)