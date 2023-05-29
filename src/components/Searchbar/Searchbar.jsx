import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./Searchbar.module.css";
import searchIcon from "../../images/search.png";
import bookService from "../../service/book-service";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [bookResult, setBookResult] = useState(false);
  const [books, setBooks] = useState([]);

  const searchBooks = async () => {
    const res = await bookService.search(query);
    console.log(res);
    setBooks(res);
    setBookResult(true);
  };
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
            style={{ minWidth: 500, maxWidth: 600, padding: "0" }}
          />
          {bookResult && (
            <>
              <div className={styles.booksLists}>
                {books.length === 0 ? (
                  <p className={styles.noBook}>No product found</p>
                ) : (
                  <ul className={styles.relativeBooks}>
                    {books.map((item, i) => {
                      return (
                        <li key={i}>
                          <div className={styles.book}>
                            <div className={styles.bookLeft}>
                              <span className={styles.bookTitle}>
                                {item.name}
                              </span>
                              <p>{item.description}</p>
                            </div>
                            <div className={styles.bookRight}>
                              <span className={styles.bookPrice}>
                                {item.price}
                              </span>
                              <Link className={styles.addCart}>Add to cart</Link>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </>
          )}
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
