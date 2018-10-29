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
        <p>HALchemy is a chatbot game. Primarily built as a back end project, HALchemy integrates wit.ai to parse user intents. Whatever you type, HAL first figures out what you mean before delivering the perfect response! Shoutout to Sarah Rehmer and Mark Myers for making this a possibility.</p>
        <ul>
          <h4>Link:</h4>
          <p>
            <a href="https://halchemy.herokuapp.com">Website</a> | <a href="https://github.com/team-dart/HALchemy">Github</a>
          </p>
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