import React from 'react';
import Layout from '../components/layout';
import styles from './snakes.scss';

export default () => (
  <Layout>
    <section className={styles.snakes}>
      <div>
        <h1>Snakes &amp; Squirrels</h1>
        <p>Snakes and Squirrels is a quick turn-based bluffing game for up to 4 players. Built with React and Redux, Firebase, and MongoDB/Express. Thanks to my teammates Bobby and Carmen for making this possible.</p>
      </div>
      <div className="screenshots">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  </Layout>
)