import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import styles from './Header.module.css'
import logo from '../images/logo.svg'
import Searchbar from "./Searchbar/Searchbar";
import { useAuthContext } from "../context/auth";
import { Button, List } from "@material-ui/core";

const Header = () => {
  const authContext = useAuthContext();
   const logOut = () => {
     authContext.signOut();
   };
  
  
  return (
    <div className={styles.headerWrapper}>
      <AppBar
        position="static"
        className={styles.header}
        style={{ boxShadow: "none" }}
      >
        <div className={styles.headerContainer}>
          <img src={logo} alt="logo" className={styles.logo} />
          <div className={styles.mainNavRight}>
            <Toolbar className={styles.navRight} color="secondary">
              <Link to="/register" className={styles.link}>
                Register
              </Link>
              <Link to="/login" className={styles.link}>
                Login
              </Link>
            </Toolbar>
            {authContext.user.id ? (
              <button
                onClick={logOut}
                variant="outlined"
                color="primary"
                className={styles.logoutBtn}
              >
                Log out
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </AppBar>
      {authContext.user.id ? <Searchbar />:<></>}
    </div>
  );
};

export default Header;
