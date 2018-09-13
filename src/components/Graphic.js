import React from 'react';
import styles from './Graphic.scss';

export default () => (
  <div className={styles.graphic}>
    <div className="trail">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className="explosion">

    </div>
    <div id="planet" className={['animated', 'shake', 'slower'].join(' ')}>

    </div>

  </div>
)