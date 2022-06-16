import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/Add'
import BestSellers from './components/BestSellers'
import OurFavorites from './components/OurFavorites'
import SearchBar from './components/SearchBar'
import AllBooks from './components/AllBooks'
import Book from './components/Book.js'
// import BookInfoModal from './components/BookInfoModal.js'
import ShoppingCart from './components/ShoppingCart.js'
import UserRegistration from './components/UserRegistration.js'
// import ShowModal from './components/ShowModal'

import Review from './components/Review'


function App() {
  //States:
  const [books, setBooks] = useState([])
  const [reviews, setReviews] = useState([])
  const [user, setUser] = useState('admin') //temp. for testing purposes
  const [userAccounts, setUserAccounts] = useState([]) // user accounts from the backend
  // boolean to show / hide book info modal, default false


  const [signedIn, setSignedIn] = useState(true) //temp. for testing purposes
  const [showCart, setShowCart] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)


  // Testing route to get user accounts
  const getUserAccounts = () => {
      //axios.get('https://ga-bookstore-backend.herokuapp.com/api/useraccount')
      axios.get("http://localhost:8000/api/books")
        .then(response => setUserAccounts(response.data),
            err => console.log(err)
        ).catch(error => console.error(error))
  }

  //hides/shows Cart form
    const cartToggle = () => {
      if (showCart === false) {
        setShowCart(true)
        setShowSearch(false)
        setShowAddForm(false)
        setShowSignIn(false)
      } else {
        setShowCart(false)
      }
    }

  //hides/shows searchbar
    const searchToggle = () => {
      if (showSearch === false) {
        setShowSearch(true)
        setShowAddForm(false)
        setShowCart(false)
        setShowSignIn(false)
      } else {
        setShowSearch(false)
      }
    }

  //hides/shows Add form
    const addFormToggle = () => {
      if (showAddForm === false) {
        setShowAddForm(true)
        setShowSearch(false)
        setShowCart(false)
        setShowSignIn(false)
      } else {
        setShowAddForm(false)
      }
    }

  //hides/shows Add form
    const signInToggle = () => {
      if (showSignIn === false) {
        setShowSignIn(true)
        setShowAddForm(false)
        setShowSearch(false)
        setShowCart(false)
      } else {
        setShowSignIn(false)
      }
    }


  //Read Route
   const getBooks = () => {
     //axios.get('https://ga-bookstore-backend.herokuapp.com/api/books')
     axios.get("http://localhost:8000/api/books")
     .then(response => setBooks(response.data),
     err=> console.log(err)
   )
   .catch(error=> console.error(error))
   }

   //Read Route for reviews
   const getReviews = () => {
     //axios.get('https://ga-bookstore-backend.herokuapp.com/api/books')
     axios.get("http://localhost:8000/api/books/reviews")
     .then(response => setReviews(response.data),
     err=> console.log(err)
   )
   .catch(error=> console.error(error))
   }

   //Create Route
   const handleCreate = (addBook) => {
    //axios.post('https://ga-bookstore-backend.herokuapp.com/api/books', addBook)
    axios.post("http://localhost:8000/api/books", addBook)
    .then((response) => {
      setBooks([...books, response.data])
    })
  }

  //Create New User Registration
  const handleRegistration = (newUser) => {
      console.log(`handleRegistration ${newUser.username}`);
      axios.post('https://ga-bookstore-backend.herokuapp.com/api/useraccount', newUser)
      .then((response) => {
          setUserAccounts([...userAccounts, response.data])
      })
  }

  //Update Route
  const handleUpdate = (editBook) => {
    //axios.put('https://ga-bookstore-backend.herokuapp.com/api/books/' + editBook.id, editBook)
    axios.put('http://localhost:8000/api/books/' + editBook.id, editBook)
    .then((response) => {
      setBooks(books.map((book) => {
        return book.id !== response.data.id ? book : response.data
      }))
    })
  }

  //Delete Route
  const handleDelete = (deletedBook) => {
    //axios.delete('https://ga-bookstore-backend.herokuapp.com/api/books/' + deletedBook.id)
    axios.delete('http://localhost:8000/api/books/' + deletedBook.id)
    .then((response) => {
      setBooks(books.filter(book => book.id !== deletedBook.id))
    })
  }

  //Gets all books then loads page
   useEffect(() => {
     getReviews()
     getBooks()
     getUserAccounts()
   }, [])

   return (
     <>
        <SearchBar books={books}  searchToggle={searchToggle} showSearch={showSearch} />
        {user === 'admin' ?
        <Add handleCreate={handleCreate} addFormToggle={addFormToggle} showAddForm={showAddForm}/>
        : null}
        <UserRegistration handleRegistration={handleRegistration} signInToggle={signInToggle} showSignIn={showSignIn} signedIn={signedIn}/>
        <ShoppingCart signedIn={signedIn} cartToggle={cartToggle} showCart={showCart}/>
        <BestSellers books={books}/>
        <OurFavorites books={books}/>
        <AllBooks books={books} origin={'allbooks'} reviews={reviews}/>
     </>
   )
}

export default App;

//<Reviews reviews={reviews}/>
