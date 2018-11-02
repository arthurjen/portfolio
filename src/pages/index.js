import React, { Component } from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import styles from './index.scss';
import './main.css';

class Index extends Component {
  state = {
    projects: [
      {
        name: 'Project GitGrub',
        url: '/gitgrub'
      },
      {
        name: 'Bootcamp Companion',
        url: '/companion'
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
                  <Link key={i} to={url}>
                    <div>
                      <h2>{name}</h2>
                    </div>
                  </Link>
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