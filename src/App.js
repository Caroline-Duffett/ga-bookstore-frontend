import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/Add'
import Book from './components/Book'


// import modals
import ShowModal from './components/ShowModal'


function App() {
  const [books, setBooks] = useState([])

  // show modal
  const [show, setShow] = useState(false)

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
        <Book books={books} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
     </>
   )
}

export default App;
