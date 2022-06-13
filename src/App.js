import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'

function App() {
  const [books, setBooks] = useState([])

   const getBooks = () => {
     axios.get('https://ga-bookstore-backend.herokuapp.com/api/books')
     .then(response => setBooks(response.data),
     err=> console.log(err)
   )
   .catch(error=> console.error(error))
   }

   const handleCreate = (addBook) => {
    axios.post('https://ga-bookstore-backend.herokuapp.com/api/books', addBook)
    .then((response) => {
      setBooks([...books, response.data])
    })
  }

  const handleUpdate = (editBook) => {
    axios.put('https://ga-bookstore-backend.herokuapp.com/api/books/' + editBook.id, editBook)
    .then((response) => {
      setBooks(books.map((book) => {
        return book.id !== response.data.id ? book : response.data
      }))
    })
  }

  const handleDelete = (deletedBook) => {
    axios.delete('https://ga-bookstore-backend.herokuapp.com/api/books/' + deletedBook.id)
    .then((response) => {
      setBooks(books.filter(book => book.id !== deletedBook.id))
    })
  }


   useEffect(() => {
     getBooks()
   }, [])


   return (
     <>
        <h1>Books</h1>
        <Add handleCreate={handleCreate}/>
        {books.map((book) => {
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
              <Edit handleUpdate={handleUpdate} book={book}/>
              <button onClick={() => {handleDelete(book)}}>
              X
              </button>
           </div>
         )
       })}
     </>
   )
}

export default App;
