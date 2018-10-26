import React, { Component } from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import styles from './index.scss';

class Index extends Component {
  state = {
    projects: [
      {
        name: 'Project GitGrub',
        url: '/project-gitgrub'
      },
      {
        name: 'Bootcamp Companion',
        url: '/bootcamp-companion'
      },
      {
        name: 'HALchemy',
        url: '/halchemy'
      },
      {
        name: 'Snakes & Squirrels',
        url: '/snakes'
      },
    ]
  }
 

  render() {
    return (
      <Layout>
        <div>
          <main className={styles.app}>
            <section>
              {
                this.state.projects.map(({ name, url }, i) => (
                  <div key={i}>
                    <Link to={url}>
                      <h2>{name}</h2>
                    </Link>
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