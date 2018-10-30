import React from 'react';
import Layout from '../components/layout';
import styles from './companion.scss';

export default () => (
  <Layout>
    <section className={styles.companion}>
      <hgroup>
        <h1>Bootcamp Companion App</h1>
      </hgroup>
      <div className="description">
        <p>Bootcamp Companion App helps make life at Alchemy Code Lab better. Everyone can contribute resources and advice to help each other. Upvote, save, and comment on cool topics. I had a blast making this with Easton Gorishek, Ryan Luras, and Antreo Pukay.</p>
        <ul>
          <h4>Link:</h4>
          <p>
            <a href="https://alchemy-companion.herokuapp.com/#/">Website</a> | <a href="https://github.com/team-denim">Github</a>
          </p>
          <h4>Front End:</h4>
          <p>Vue</p>
          <h4>Back End:</h4>
          <p>NodeJS, PostgresSQL</p>
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