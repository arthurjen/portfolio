import React from 'react';
import Layout from '../components/layout';
import styles from './snakes.scss';

export default () => (
  <Layout>
    <section className={styles.snakes}>
      <hgroup>
        <h1>Snakes &amp; Squirrels</h1>
      </hgroup>
      <div className="description">
        <p>Snakes &amp; Squirrels is a turn-based bluffing game for up to 4 players. We integrated Google Firebase's real-time database into the traditional MERN stack to achieve instantaneous updates for chatting, queuing for games, and in-game state management. Thanks to my teammates Bobby and Carmen for their incredible work.</p>
        <ul>
          <h4>Link:</h4>
          <p>
            <a href="https://snakesgame.herokuapp.com">Website</a> | <a href="https://github.com/teamDice">Github</a>
          </p>
          <h4>Front End:</h4>
          <p>React, Redux</p>
          <h4>Back End:</h4>
          <p>MongoDB, NodeJS, Firebase</p>
        </ul>
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