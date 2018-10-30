import React, { Component } from 'react';
import { Link } from 'gatsby';
import styles from './Header.scss';


class Header extends Component {
  state = {
    menu: false
  };

  render() { 

    const activeLink = {
      borderBottom: '1px solid #574FBF',
      borderRight: '1px solid #574FBF'
    }

    return (
      <header className={styles.header}>
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <nav>
          <Link activeStyle={activeLink} to="/">work</Link>
          <Link activeStyle={activeLink} to="/about/">about</Link>
        </nav>
      </header>
    );
  }
}
 
export default Header;
  
