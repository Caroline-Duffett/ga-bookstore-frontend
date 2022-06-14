import {useState} from 'react'
import Edit from './Edit'

const BooksIndex = (props) => {


  return (
    <>
      <h1>All Books</h1>
      <div className='all-books-flexbox'>
        {props.books.map((book) => {
          return(
            <div className='book' key={book.id}>
              <img src={book.cover_art} alt="book cover"/>
              <h4>Title: {book.title}</h4>
              <h5>Author: {book.author_name}</h5>
              <h5>Price: {book.price}</h5>
              {props.user === 'admin' ?
                <>
                  <Edit handleUpdate={props.handleUpdate} book={book}/>
                  <button onClick={() => {props.handleDelete(book)}}>
                  X
                  </button>
                </>
                : null}
           </div>
         )
        })}
      </div>
    </>
)}

export default BooksIndex

//==============================================================================//
//                                Grave Yard
//==============================================================================//
//----------------------------------------- Displays Taken Out for Index Page --//
  // <h5>Publisher: {book.publisher}</h5>
  // <h5>Publication date: {book.publication_date}</h5>
  // <h5>Genre: {book.genre}</h5>
  // <h5>Page count: {book.page_count}</h5>
  // <h5>Language: {book.language}</h5>
  // <h5>ISBN: {book.isbn}</h5>
  // <h5>Rating: {book.rating}</h5>
//------------------------------------------------------------------------------//