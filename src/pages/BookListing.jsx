import React, { useEffect,useState } from 'react'
import styles from './BookListing.module.css'
import { Typography, TextField, MenuItem, Select,InputLabel,FormControl, Button } from "@material-ui/core";
import bookService from '../service/book-service';

const BookListing = () => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    bookService.allBooks().then((res) => {
      setBooks(res)
      console.log(res)
  })
    
  },[])
  return (
    <div className={styles.container}>
      <Typography variant="h3" className={styles.heading}>
        Book Listing
      </Typography>
      <div className={styles.bookListsContainer}>
        <div className={styles.bookHeader}>
          <div className={styles.totalBooks}>
            <p className={styles.totalText}>
              Total
              <span> - 12 items</span>
            </p>
          </div>
          <div className={styles.rightSearch}>
            <div className={styles.searchBox}>
              <TextField
                id="text"
                className={styles.search}
                name="text"
                placeholder="Search..."
                variant="outlined"
                inputProps={{ className: "small" }}
                size="small"
              />
            </div>
            <div className={styles.sortingContainer} variant="outlined">
              <span htmlFor="select">Sort By</span>
              <Select className={styles.customSelect}>
                <MenuItem value="a-z">a - z</MenuItem>
                <MenuItem value="z-a">z - a</MenuItem>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.booksContainer}>
        {books.map((book) => (
          <div className={styles.card}>
            <img
              src={book.base64image}
              alt="card img"
              className={styles.cardImg}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                {book.name.slice(0, 14) +
                  (book.name.length > 14 ? "..." : "")}
              </h3>
              <p className={styles.category}>{book.category}</p>
              <p className={styles.desc}>
                {book.description.slice(0, 35) +
                  (book.description.length > 35 ? "..." : "")}
              </p>
              <p className={styles.price}>
                MRP &#8377; <span>{book.price}</span>
              </p>
              <Button
                className={styles.btn}
                type="submit"
                color="secondary"
                variant="contained"
              >
                Add to cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookListing