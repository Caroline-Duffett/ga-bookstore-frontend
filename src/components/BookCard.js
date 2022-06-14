import {useState} from 'react'

const BookCard = (props) => {


  return (
    <>
      <h1>Book Card</h1>
      <div className='all-books-flexbox'>
        {props.books.map((book) => {
          return(
            <div className='book' key={book.id}>
              <img src={book.cover_art} alt="book cover"/>
              <h4>Title: {book.title}</h4>
              <h5>Author: {book.author_name}</h5>
              <h5>Price: {book.price}</h5>
           </div>
         )
        })}
      </div>
    </>
)}

export default BookCard
