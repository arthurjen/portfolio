import React, { Component } from "react"
// import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styles from './index.scss';
// import { Link } from 'gatsby';

class Index extends Component {
  state = {
    projects: [
      {
        name: 'Booxy',
        icon: 'fas fa-th-large'
      },
      {
        name: 'Project GitGrub',
        icon: 'far fa-lemon'
      },
      {
        name: 'Bootcamp Companion',
        icon: 'fas fa-tablet-alt'
      },
      {
        name: 'HALchemy',
        icon: 'fas fa-robot'
      },
      {
        name: 'Gorts',
        icon: 'fas fa-chess-knight'
      },
      {
        name: 'Mystical Tutor',
        icon: 'far fa-moon'
      },
      {
        name: 'Snakes & Squirrels',
        icon: 'fas fa-strikethrough'
      },
    ]
  }
  // static propTypes = {
  //   data: PropTypes.object.isRequired
  // };
  

  render() { 
    // const projects = this.props.data.allContentfulProject.edges.map(node => node.node);
    
    

    return (
      <Layout>
        <div>
          <main className={styles.app}>
            <section>
              {
                this.state.projects.map(({ name, icon }) => (
                  <div>
                    <i className={icon}></i>
                    <h2>{name}</h2>
                  </div>
                ))
              }
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