import React from 'react';
import Layout from '../components/layout';
import styles from './about.scss';

export default ({ img }) => (
  <Layout>
    <section className={styles.about}>
      <section className="bio">
        <header>
          <h2>hey it's me</h2>
        </header>
        <div>
          <p>I am a full stack software developer with a background in architecture. I am passionate about making a big impact by being a part of the technological frontier of machine learning and AI.</p>
          <p>I believe natural language processing, computer vision, and artificial general intelligence are going to be an integral part of all of our lives in the near future, and I want to help make that happen.</p>
        </div>
      </section>
      <section className="links">
        <header>
          <h2>let's <span>connect</span></h2>
        </header>
        <ul>
          <li>
            <a href="mailto:arthurljen@gmail.com">
              <abbr title="Email"><i className="fas fa-envelope-square"></i></abbr>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/arthurjen/">
              <abbr title="Linkedin"><i className="fab fa-linkedin"></i></abbr>
            </a>
          </li>
          <li>
            <a href="https://github.com/arthurjen">
              <abbr title="Github"><i className="fab fa-github-square"></i></abbr>
            </a>
          </li>
          <li>
            <a href="https://steamcommunity.com/id/wallaroo">
            <abbr title="Let's play some Dota!"><i className="fab fa-steam-square"></i></abbr>
            </a>
          </li>
        </ul>
      </section>
      
    </section>
  </Layout>
)