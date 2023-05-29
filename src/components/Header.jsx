import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import styles from './Header.module.css'
import logo from '../images/logo.svg'
const Header = () => {

  return (
    <div className={styles.headerWrapper}>
      <AppBar
        position="static"
        className={styles.header}
        style={{ boxShadow: "none" }}
      >
        <div className={styles.headerContainer}>

            <img src={logo} alt="logo" className={styles.logo} />


          <Toolbar className={styles.navRight} color="secondary">
            <Link to="/register" className={styles.link}>
              Register
            </Link>
            <Link to="/login" className={styles.link}>
              Login
            </Link>
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
};

export default Header;
