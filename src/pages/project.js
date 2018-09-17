import React, { Component } from 'react';
import Layout from '../components/layout';
import styles from './project.scss';

class Project extends Component {
  state = {  }
  render() { 
    return (
      <Layout>
        <section className={styles.project}>
          <div>
            <header>
              <h2>Booxy</h2>
            </header>
            <p>about the project</p>
            <h1> AJ </h1>
            <img src="something" alt="project photo"/>>
          </div>
        </section>
      </Layout>
    );
  }
}
 
export default Project;