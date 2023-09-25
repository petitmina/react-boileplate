import React from "react";
import { Link } from  'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav1}>
        <Link to="/" className={styles.link1}>Home</Link> 
      </div>
     <div className={styles.nav2}>
      <Link to="/login" className={styles.link2}>Login</Link>
      <Link to="/register" className={styles.link2}>회원가입</Link>
     </div>
      
    </nav>
  );
};

export default Nav;
