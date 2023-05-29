import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import styles from "./Searchbar.module.css";
import searchIcon from "../../images/search.png";
const Searchbar = () => {
  const [query, setQuery] = useState("");

  const searchBooks = () => {};
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchContainer}>
        <div className={styles.serachField}>
          <TextField
            id="searchText"
            name="searchText"
            placeholder="What are you looking for..."
            variant="outlined"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.searchInput}
            style={{ minWidth: 400, maxWidth: 500, padding: "0" }}
          />
        </div>
        <button
          className={styles.searchBtn}
          type="submit"
          variant="contained"
          color="primary"
          disableElevation
          onClick={searchBooks}
        >
          <em>
            <img src={searchIcon} alt="search" />
          </em>
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
