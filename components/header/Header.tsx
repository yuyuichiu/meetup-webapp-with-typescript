import React, { Fragment } from 'react';
import Link from 'next/link';

import styles from './Header.module.css'

const Header: React.FC = (props) => {
  return (<Fragment>
    <nav className={styles.header}>
      <div>
        <h2>Next.js Meetups App</h2>
      </div>
      <div className={styles.navigation}>
        <Link href='/'>All Meetups</Link>
        <Link href='/add-meetup'>Add a meetup</Link>
      </div>
    </nav>
    <div className={styles.headerSpace}></div>
  </Fragment>)
}

export default Header