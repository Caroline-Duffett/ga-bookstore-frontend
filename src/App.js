import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/Add'

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
              <h5>IBSN: {book.isbn}</h5>
              <h5>Rating: {book.rating}</h5>
           </div>
         )
       })}
     </>
   )
}

export default App;
