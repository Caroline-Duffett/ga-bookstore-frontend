import './App.css';
import { useState, useEffect} from 'react'
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

import BookCart from './components/BookCart'


function App() {

  
  //States:
  const [books, setBooks] = useState([])
  const [bookReviews, setBookReviews] = useState([])
  const [user, setUser] = useState('admin') //temp. for testing purposes
  const [userAccounts, setUserAccounts] = useState([]) // user accounts from the backend
  // boolean to show / hide book info modal, default false


  const [signedIn, setSignedIn] = useState(true) //temp. for testing purposes
  const [showCart, setShowCart] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)

  //testing user auth user login
  const [loggedInUser, setLoggedInuser] = useState({})

  // add to cart
  const [cart, setCart] = useState([])
  const [cartTotal, setCartTotal] = useState([])
  const [totalPrice, settotalPrice] = useState([])






  // Testing route to get user accounts
  const getUserAccounts = () => {
      //axios.get('https://ga-bookstore-backend.herokuapp.com/api/useraccount')
      axios.get("http://localhost:8000/api/books")
        .then(response => setUserAccounts(response.data),
            err => console.log(err)
        ).catch(error => console.error(error))
  }

  // pulls in the list of all reviews for the books
  // will filter this list when the bookInfoModal is opened
  const getBookreviews = () => {
      axios.get('http://localhost:8000/api/books/reviews')
      .then((response) => {
          // console.log(response.data);
          setBookReviews(response.data)
      })
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
     axios.get('https://ga-bookstore-backend.herokuapp.com/api/books')
    //  axios.get("http://localhost:8000/api/books")
     .then(response => setBooks(response.data),
     err=> console.log(err)
   )
   .catch(error=> console.error(error))
   }

   //Create Route
   const handleCreate = (addBook) => {
    axios.post('https://ga-bookstore-backend.herokuapp.com/api/books', addBook)
    // axios.post("http://localhost:8000/api/books", addBook)
    .then((response) => {
      setBooks([...books, response.data])
    })
  }

  //handles user sign in reuest
  const handleSignIn = (userObj) => {
      // console.log(userObj)
      axios.put(`https://ga-bookstore-backend.herokuapp.com/api/useraccount/login`, userObj)
          .then((response) => {
              console.log(response);
              setLoggedInuser(response.data)
          })
  }

  //Create New User Registration
  const handleRegistration = (newUser) => {
      console.log(`handleRegistration ${newUser.username}`);
      axios.post('https://ga-bookstore-backend.herokuapp.com/api/useraccount', newUser)
      .then((response) => {
          console.log(response);
          setUserAccounts([...userAccounts, response.data])
      })
  }

  //user/book cart route
  const getCart = (user_id) => {
    axios.get('https://ga-bookstore-backend.herokuapp.com/api/cart/')
    .then((response) => {
      setCart(response.data)
    })
  }

  //userbook update cart route
  // const cartUpdate = (editCartBook, quantity) => {
  //   setCartTotal(totalPrice + ((editCartBook.quantity-quantity) * editCartBook.price))
  //   axios.put('http://localhost:8000/api/cart/' + editCartBook.id, editCartBook)
    // axios.put('https://ga-bookstore-backend.herokuapp.com/api/cart' + editCartBook.id, editCartBook)
  //   .then((response) => {
  //     setBooks(books.map((book) => {
  //       return book.id !== response.data.id ? book : response.data
  //     }))
  //   })
  // }

  const addToCart = (book) => {
    setCart([...cart, book])
    // setTotal({price, type: 'add'})
    console.log('added to cart')
}

  const cartUpdate = (editCartBook) => {
    // setCartTotal(totalPrice + ((editCartBook) * editCartBook.price))
    // axios.put('http://localhost:8000/api/cart/' + editCartBook.id)
    setCart([...cart, editCartBook])
    axios.put('https://ga-bookstore-backend.herokuapp.com/api/cart/', {"items":cart})
    .then((response) => {
      // setBooks(books.map((book) => {
      //   return book.id !== response.data.id ? book : response.data
      // }))
      getCart(loggedInUser.id)
    })
  }
 
  //Update Route
  const handleUpdate = (editBook) => {
    axios.put('https://ga-bookstore-backend.herokuapp.com/api/books/' + editBook.id, editBook)
    // axios.put('http://localhost:8000/api/books/' + editBook.id, editBook)
    .then((response) => {
      setBooks(books.map((book) => {
        return book.id !== response.data.id ? book : response.data
      }))
    })
  }


  //Delete Route
  const handleDelete = (deletedBook) => {
    axios.delete('https://ga-bookstore-backend.herokuapp.com/api/books/' + deletedBook.id)
    // axios.delete('http://localhost:8000/api/books/' + deletedBook.id)
    .then((response) => {
      setBooks(books.filter(book => book.id !== deletedBook.id))
    })
  }

  //Gets all books then loads page
   useEffect(() => {
     getBooks()
     getBookreviews()
     getUserAccounts()
   }, [])

   return (
     <>
     <div className="wrapper">
       <div className="navigation">
       <SearchBar books={books}  searchToggle={searchToggle} showSearch={showSearch} />
        {user === 'admin' ?
        <Add handleCreate={handleCreate} addFormToggle={addFormToggle} showAddForm={showAddForm}/>
        : null}
        <UserRegistration handleRegistration={handleRegistration} signInToggle={signInToggle} showSignIn={showSignIn} signedIn={signedIn} handleSignIn={handleSignIn}/>
       </div>
        {/* <ShoppingCart signedIn={signedIn} cartToggle={cartToggle} showCart={showCart} user={loggedInUser}/> */}
        <BookCart signedIn={signedIn} cartToggle={cartToggle} showCart={showCart} user={loggedInUser}/>
        {/* <BookItem/> */}
        <BestSellers books={books}/>
        <OurFavorites books={books}/>
        <AllBooks books={books} addToCart={addToCart} bookReviews={bookReviews} origin={'allbooks'}/>
     </div>
     </>
   )
}

export default App;

// CODE GRAVEYARD ------------------------------------>

    // const handleAddToCart = () => {
    //   return renderCart()
    // }

    // const handleRemoveFromCart = (book) => {
    //   let indexOfBook = 
    //   current
    //   [ 
    //     ...currentCart.slice(0, indexOfBookToRemove),
    //     ...currentCart.slice(indexOfBookToRemove + 1)
    //   ]
      
    // }

    // renderContent() {
      
    //       return (
    //         <Book book={book}
    //         addToCart={handleAddToCart}/>
    //       )
          
    //         return renderCart()
    // }
