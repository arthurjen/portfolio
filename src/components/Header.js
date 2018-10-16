import React, { Component } from 'react';
import { Link } from 'gatsby';
import styles from './Header.scss';

const activeLink = {
  borderBottom: '4px solid rgb(21, 187, 253)'
}


class Header extends Component {
  state = {  }
  render() { 
    return (
      <header className={styles.header}>
        <h1>Arthur Jen</h1>
        <div>

        </div>
        <i className="fas fa-bars" onClick={() => this.setState({ menu: true })}></i>
        <nav>
          <Link activeStyle={activeLink} to="/">WORK</Link>
          <Link activeStyle={activeLink} to="/about">ABOUT</Link>
        </nav>
      </header>
    );
  }
}
 
export default Header;
  
