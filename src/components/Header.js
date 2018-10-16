import React, { Component } from 'react';
import { Link } from 'gatsby';
import styles from './Header.scss';


class Header extends Component {
  state = {
    menu: false
  };

  render() { 

    const activeLink = {
      borderBottom: '1px solid rgb(21, 187, 253)',
      borderRight: '1px solid rgb(21, 187, 253)'
    }

    return (
      <header className={styles.header}>
        <h1>Arthur Jen</h1>
        <nav>
          <Link activeStyle={activeLink} to="/">WORK</Link>
          <Link activeStyle={activeLink} to="/about/">ABOUT</Link>
        </nav>
      </header>
    );
  }
}
 
export default Header;
  
