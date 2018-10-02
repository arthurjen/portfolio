import React, { Component } from "react"
// import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styles from './index.scss';
// import { Link } from 'gatsby';

class Index extends Component {
  // static propTypes = {
  //   data: PropTypes.object.isRequired
  // };

  render() { 
    // const projects = this.props.data.allContentfulProject.edges.map(node => node.node);
    
    return (
      <Layout>
        <div>
          <main className={styles.app}>
            <section id="work">
              <div>
                <i className="fas fa-th-large"></i>
                <h2>Booxy</h2>
              </div>
              <div className="project-name">
                <i className="far fa-lemon"></i>
                <h2>GitGrub Game</h2>
              </div>
              <div>
                <i className="fas fa-tablet-alt"></i>
                <h2>Bootcamp Companion App</h2>
              </div>
              <div>
                <i className="fas fa-robot"></i>
                <h2>HALchemy Chatbot Game</h2>
              </div>
              <div>
                <i className="fas fa-chess-knight"></i>
                <h2>Gorts</h2>
              </div>
              <div>
                <i className="far fa-moon"></i>
                <h2>Mystical Tutor</h2>
              </div>
              <div>
                <i className="fas fa-strikethrough"></i>
                <h2>Snakes &amp; Squirrels</h2>
              </div>
            </section>
          </main>
        </div>
      </Layout>
    );
  }
}
 
export default Index;



export const getAllProjects = graphql`
  query {
    allContentfulProject {
      edges {
        node {
          id,
          title,
          github,
          description {
            description
          },
          deployedSite,
          monthYear,
          technologies,
          summary,
          image {
            file {
              url
            }
          },
          splash {
            file {
              url
            }
          }
        }
      }
    }
  }
`