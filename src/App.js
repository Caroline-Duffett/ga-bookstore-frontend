import './App.css';
import { useState, useEffect} from 'react'

// import { Route } from 'react-router-dom';

import axios from 'axios'
import Add from './components/Add'
import BestSellers from './components/BestSellers'
import OurFavorites from './components/OurFavorites'
import SearchBar from './components/SearchBar'
import AllBooks from './components/AllBooks'
import Book from './components/Book.js'
import ShoppingCart from './components/ShoppingCart.js'
import UserRegistration from './components/UserRegistration.js'
import ShowModal from './components/ShowModal'
// import BookInfoModal from './components/BookInfoModal.js'
// import BookCart from './components/BookCart'

//Contexts
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

function App() {
  //--- State:
  const [books, setBooks] = useState([])
  const [bookReviews, setBookReviews] = useState([])
  //const [user, setUser] = useState('admi') //temp. for testing purposes
  const [userAccounts, setUserAccounts] = useState([]) // user accounts from the backend
  // boolean to show / hide book info modal, default false
  const [signedIn, setSignedIn] = useState(true) //temp. for testing purposes
  const [showCart, setShowCart] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)
  //testing user auth user login
  const [loggedInUser, setLoggedInuser] = useState({})
  //add to cart
  const [cart, setCart] = useState([])
  //old states for cart
  // const [cartTotal, setCartTotal] = useState([])
  // const [totalPrice, settotalPrice] = useState([])

  // Testing route to get user accounts
  const getUserAccounts = () => {
      axios.get('https://ga-bookstore-backend.herokuapp.com/api/useraccount')
      //axios.get("http://localhost:8000/api/books")
        .then(response => setUserAccounts(response.data),
            err => console.log(err)
        ).catch(error => console.error(error))
  }

  // pulls in the list of all reviews for the books
  // will filter this list when the bookInfoModal is opened
  const getBookreviews = () => {
      //axios.get('http://localhost:8000/api/books/reviews')
      axios.get('https://ga-bookstore-backend.herokuapp.com/api/books/reviews')
      .then((response) => {
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

   //Create Route for books
   const handleCreate = (addBook) => {
    axios.post('https://ga-bookstore-backend.herokuapp.com/api/books', addBook)
    // axios.post("http://localhost:8000/api/books", addBook)
    .then((response) => {
      setBooks([...books, response.data])
    })
  }

  //handles user sign in reuest
  const handleSignIn = (userObj) => {
      axios.put(`https://ga-bookstore-backend.herokuapp.com/api/useraccount/login`, userObj)
          .then((response) => {
              console.log(response);
              console.log(response.data);
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

  const addItem = book => {
    if (!cart.find(cartItem => cartItem.id === book.id)) {
      setCart([...cart, book]);
    }
  };

  const removeItem = id => {
    setCart(cart.filter(book => book.id !== id));
  };

   return (
     <>
     <div className="wrapper">
     <ProductContext.Provider value={{ books, addItem, loggedInUser }}>
      <CartContext.Provider value={{ cart, removeItem, cartToggle }}>
       <div className="navigation">
         <p className="logo">&#x212C; &#x2134; &#x2134;  &#x212A; &int;</p>
        <ShoppingCart
        signedIn={signedIn}
        cartToggle={cartToggle}
        showCart={showCart}
        user={loggedInUser}
        setCart={setCart}
        />
        {loggedInUser.staff === true ?
       <Add
       handleCreate={handleCreate}
       addFormToggle={addFormToggle}
       showAddForm={showAddForm}
       />
          : null}
       <UserRegistration
       handleRegistration={handleRegistration}
       signInToggle={signInToggle}
       showSignIn={showSignIn}
       signedIn={signedIn}
       handleSignIn={handleSignIn}
       />
         <SearchBar
       books={books}
       searchToggle={searchToggle}
       showSearch={showSearch}
       />
        </div>
        <div className="search-container">
        {/* <SearchBar
       books={books}
       searchToggle={searchToggle}
       showSearch={showSearch}
       /> */}
        </div>
      
       <BestSellers books={books}/>
       <OurFavorites books={books}/>
       <AllBooks
       books={books}
      //  addToCart={addToCart}
       bookReviews={bookReviews}
       origin={'allbooks'}
       getBooks={getBooks}
       loggedInUser={loggedInUser}
       handleDelete={handleDelete}
       handleUpdate={handleUpdate}
       />
     </CartContext.Provider>
     </ProductContext.Provider>
     </div>
     </>
   )
}

export default App;

// //=================================================================================================================//
// //                                      CODE GRAVEYARD - ALT CART FUNCTIONS (Please keep for ref)
// //=================================================================================================================//

// ALT CART FUNCTION
  //  const addToCart = (item) => {
  //   const productList = [...cart];
  //   if(!productList.includes(item)) {
  //     productList.push(item);
  //   }
  //   const index = productList.indexOf(item);
  //   productList[index].quantity++;
  //   setCart(productList);
  //   localStorage.setItem("cart", JSON.stringify(productList));
  // }

  // ALT CART FUNCTION
//user/book cart route
  // const getCart = (user_id) => {
  //   axios.get('https://ga-bookstore-backend.herokuapp.com/api/cart/')
  //   .then((response) => {
  //     setCart(response.data)
  //   })
  // }

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

//   const addToCart = (book) => {
//     setCart([...cart, book])
//     // setTotal({price, type: 'add'})
//     console.log('added to cart')
// }

  // const cartUpdate = (editCartBook) => {
    // setCartTotal(totalPrice + ((editCartBook) * editCartBook.price))
    // axios.put('http://localhost:8000/api/cart/' + editCartBook.id)
    // setCart([...cart, editCartBook])
    // axios.put('https://ga-bookstore-backend.herokuapp.com/api/cart/', {"items":cart})
    // .then((response) => {
      // setBooks(books.map((book) => {
      //   return book.id !== response.data.id ? book : response.data
      // }))
  //     getCart(loggedInUser.id)
  //   })
  // }
