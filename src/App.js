import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/Add'
import BestSellers from './components/BestSellers'
import OurFavorites from './components/OurFavorites'
import SearchBar from './components/SearchBar'
import AllBooks from './components/AllBooks'
import Book from './components/Book.js'
import BookInfoModal from './components/BookInfoModal.js'



function App() {
  //States:
  const [books, setBooks] = useState([])

  const [user, setUser] = useState('admin') //temp. for testing purposes
  const [userAccounts, setUserAccounts] = useState([]) // user accounts from the backend
  // boolean to show / hide book info modal, default false


  // Testing route to get user accounts
  const getUserAccounts = () => {
      axios.get('https://ga-bookstore-backend.herokuapp.com/api/useraccount')
        .then(response => setUserAccounts(response.data),
            err => console.log(err)
        ).catch(error => console.error(error))
  }


  //Read Route
   const getBooks = () => {
     axios.get('https://ga-bookstore-backend.herokuapp.com/api/books')
     .then(response => setBooks(response.data),
     err=> console.log(err)
   )
   .catch(error=> console.error(error))
   }

   //Create Route
   const handleCreate = (addBook) => {
    axios.post('https://ga-bookstore-backend.herokuapp.com/api/books', addBook)
    .then((response) => {
      setBooks([...books, response.data])
    })
  }

  //Update Route
  const handleUpdate = (editBook) => {
    axios.put('https://ga-bookstore-backend.herokuapp.com/api/books/' + editBook.id, editBook)
    .then((response) => {
      setBooks(books.map((book) => {
        return book.id !== response.data.id ? book : response.data
      }))
    })
  }

  //Delete Route
  const handleDelete = (deletedBook) => {
    axios.delete('https://ga-bookstore-backend.herokuapp.com/api/books/' + deletedBook.id)
    .then((response) => {
      setBooks(books.filter(book => book.id !== deletedBook.id))
    })
  }

  //Gets all books then loads page
   useEffect(() => {
     getBooks()
     getUserAccounts()
   }, [])

   return (
     <>
        <SearchBar books={books}/>
        {user === 'admin' ?
        <Add handleCreate={handleCreate}/>
        : null}
        <BestSellers books={books}/>
        <OurFavorites books={books}/>
        <AllBooks books={books} origin={'allbooks'}/>
     </>
   )
}

export default App;


// <Book
//     book={book}
    // handleUpdate={handleUpdate}
    // handleDelete={handleDelete}
    // closeBookInfoModal={() => setShowBookInfoModal(false)}
//     origin={'bookinfo'}
// />
