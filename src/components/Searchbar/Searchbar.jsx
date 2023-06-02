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
  // const [openSearchResult, setOpenSearchResult] = useState(false);

  const searchBooks = async () => {
    // document.body.classList.add("search-results-open");
    const res = await bookService.search(query);
    setBooks(res);
    setBookResult(true);
    // setOpenSearchResult(true);
    // if (setBookResult) {
    //  var element = document.getElementById("bookList");
    //   if (element.classList.contains("bookListNone"))
    //     element.classList.remove("bookListNone");
 
    console.log(res);
  };
  return (
    <>
      <div
        className="search-overlay"
        onClick={() => {
          // setOpenSearchResult(false);
          // document.body.classList.remove("search-results-open");
          // var element = document.getElementById("bookList");
          // element.classList.add("bookListNone");
        }}
      ></div>
      <div className={styles.searchBarContainer}>
        <div className={styles.searchContainer}>
          <div className={styles.serachField}>
            <TextField
              size="small"
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
                <div className={`${styles.booksLists}`} id="bookList">
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
                                <p>
                                  {item.description.slice(0, 40) +
                                    (item.description.length > 40 ? "..." : "")}
                                </p>
                              </div>
                              <div className={styles.bookRight}>
                                <span className={styles.bookPrice}>
                                  {item.price}
                                </span>
                                <Link className={styles.addCart}>
                                  Add to cart
                                </Link>
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
    </>
  );
};

export default Searchbar;
