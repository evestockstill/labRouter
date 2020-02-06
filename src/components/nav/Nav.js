import React, { Component } from 'react';
import styles from './Nav.css';
import logo from '../../image/rick.jpeg';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav className={styles.nav}>
        <img src={logo} alt='rick morty image' />
        <ul className={styles.nav_links}>
          <li>
            <Link to='/home' className={styles.nav_link}>
              Home
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
