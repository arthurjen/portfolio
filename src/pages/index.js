import React from "react"
import Layout from '../components/layout';
import styles from './index.scss';

export default () => (
  <Layout>
    <div >
      <main className={styles.app}>
        <header>
          <h1>ARTHUR JEN</h1>
          <hgroup>
            <h4>software developer</h4>
            <h4>+ engineer</h4>
          </hgroup>
        </header>
        <section id="work">
          <div>
            <h2>Booxy</h2>
          </div>
          <div>
            <h2>GitGrub Game</h2>
          </div>
          <div>
            <h2>Bootcamp Companion App</h2>
          </div>
          <div>
            <h2>HALchemy Chatbot Game</h2>
          </div>
          <div>
            <h2>Gorts</h2>
          </div>
          <div>
            <h2>Mystical Tutor</h2>
          </div>
        </section>
      </main>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query {
    allContentfulProject {
      edges {
        node {
          title,
          github,
          description {
            description
          },
          deployedSite,
          monthYear,
          imageUrl,
          technologies
        }
      }
    }
  }
`