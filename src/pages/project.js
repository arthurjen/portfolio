import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import styles from './project.scss';

class Project extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired
  }

  render() { 
    return (
      <Layout>
        <section className={styles.project}>
          <div>
            <header>
              <h2>Booxy</h2>
            </header>
            <p>about the project</p>
       
            <img src="something" alt="project photo"/>>
          </div>
        </section>
      </Layout>
    );
  }
}
 
export default Project;