import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import styles from './about.scss';

export default ({ img }) => (
  <Layout>
    <section className={styles.about}>
      <article>
        <header>
          <h2>hey it's me</h2>
        </header>
        <div>
          <Img fixed={img.file.childImageSharp.fixed} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <section>
          
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
      </article>
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