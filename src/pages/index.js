import React, { Component } from 'react';
import Layout from '../components/layout';
import styles from './index.scss';

class Index extends Component {
  state = {
    projects: [
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
        name: 'Snakes & Squirrels',
        icon: 'fas fa-strikethrough'
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
                this.state.projects.map(({ name, icon }, i) => (
                  <div key={i}>
                    <i className={icon}/>
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