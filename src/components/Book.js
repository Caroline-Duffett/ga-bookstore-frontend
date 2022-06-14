import {useState} from 'react'
import Edit from './Edit.js'

const Book = (props) => {

  //States
  const [user, setUser] = 'admin' //temp., just for testing. Waiting for user auth to be finished
  const [query, setQuery] = useState("")

  return (
    <>
      <div className="search-bar-div">
        <input className="search-bar" placeholder="Search" onChange={event => setQuery(event.target.value)}/>
      </div>
      {props.books.filter(book => {
        if (query === '') {
          return book
        } else if (book.title.toLowerCase().includes(query.toLowerCase())) {
          return book
        } else if (book.author_name.toLowerCase().includes(query.toLowerCase())) {
          return book
        }
      }).map((book) => {
        return(
          <div className='book' key={book.id}>
            <img src={book.cover_art} alt="book cover"/>
            <h4>Title: {book.title}</h4>
            <h5>Author: {book.author_name}</h5>
            <h5>Publisher: {book.publisher}</h5>
            <h5>Publication date: {book.publication_date}</h5>
            <h5>Genre: {book.genre}</h5>
            <h5>Page count: {book.page_count}</h5>
            <h5>Language: {book.language}</h5>
            <h5>ISBN: {book.isbn}</h5>
            <h5>Rating: {book.rating}</h5>
            <h5>Price: {book.price}</h5>
            {user === 'admin' ?
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
    </>
)}

export default Book
