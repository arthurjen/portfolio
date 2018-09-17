import React from 'react';
import { graphql } from 'gatsby';
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
      <section className="skills">
        <header>
          <h3>skills</h3>
        </header>
        <ul>
          <li>Javascript</li>
          <li>Python</li>
          <li>HTML / <abbr title="Cascading Style Sheets">CSS</abbr></li>

          <li>Vue</li>
          <li>React</li>
          <li>Redux</li>

          <li>SQL</li>
          <li>MongoDB</li>
          <li>Firebase</li>
        </ul>
      </section>
      
    </section>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "src/assets/Rubick_icon.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`