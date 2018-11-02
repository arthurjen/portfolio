import React, { Component } from 'react';
import { Link } from 'gatsby';
import styles from './Header.scss';


class Header extends Component {
  state = {
    menu: false
  };

  render() { 

    const activeLink = {
      background: 'rgba(255, 211, 20, 0.5)'
    }

    return (
      <header className={styles.header}>
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <nav>
          <Link activeStyle={activeLink} to="/">Work</Link>
          <Link activeStyle={activeLink} to="/about/">About</Link>
        </nav>
      </header>
    );
  }
}
 
export default Header;
  
