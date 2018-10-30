import React from 'react';
import Layout from '../components/layout';
import styles from './gitgrub.scss';

export default () => (
  <Layout>
    <section className={styles.gitgrub}>
      <hgroup>
        <h1>Project Gitgrub</h1>
      </hgroup>
      <div className="description">
        <p>Project Gitgrub.</p>
        <ul>
          <h4>Link:</h4>
          <p>
            <a href="https://teamcalendar.github.io/projectgitgrub/">Website</a> | <a href="https://github.com/teamcalendar/projectgitgrub">Github</a>
          </p>
          <h4>Front End:</h4>
          <p>JavaScript</p>
          <h4>Back End:</h4>
          <p>none</p>
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