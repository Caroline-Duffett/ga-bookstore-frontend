import {useState} from 'react'
import Book from './Book'


const ShoppingCart = (props) => {

  //State:
    const [userCartBooks, setUserCartBooks] = useState([])
    
    // const [user, setUser] = useState('')
    // const [cart, setCart] = useState([])

  return (
    <>
      <button onClick={props.cartToggle} className="search-btn">Cart{userCartBooks.length})</button>
      <>
        {props.showCart ?
          <>
            {props.signedIn ?
              <>
                <div className="cart-modal-wrapper">
                  <div className="cart-modal">
                    <div className='cart-modal-x-div'>
                      <button className='cart-x-btn' onClick={props.cartToggle}>
                      x
                      </button>
                    </div>
                    <h3>Your Cart</h3>
                    <div className="cart-books-flexbox">
                      {userCartBooks.map((cartBook) => {
                        return (
                          <div className="cartBook">
                            <h3>{cartBook}</h3>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </>
              :
              <>
                <div className="sign-in-modal-wrapper">
                  <div className="sign-in-modal">
                    <h2 className="sign-in-message">Please Sign In or Create an Account to view cart</h2>
                    <div className='sign-in-x-btn-div'>
                      <button className='sign-in-x-btn' onClick={props.cartToggle}>
                      x
                      </button>
                    </div>
                  </div>
                </div>
              </>
            }
        </>
        :
        null}
      </>
    </>
  )
}

export default ShoppingCart

// CODE GRAVEYARD ------------------------------------>

{/* <h3>{cartBook}</h3> */}

  {/* {userCartBooks.map((cartBook) => { */}

  // const cartTotal = userCartBooks.reduce((total, {price = 0}) => total + price, 0)

//   <div>Total: ${cartTotal}</div>
// <div>
// <button onClick={() => setUserCartBooks([])}>Clear</button>
// </div>


// <button type="submit" onClick={() => removeFromCart(book)}>
// Remove
// </button>

  //   const getCartTotal = () => {
  //     return userCartBooks.reduce(
  //       (sum, { quantity }) => sum + quantity, 0);
  //   };

  //   const removeFromCart = (book) => {
  //     setUserCartBooks((currentCart) => {
  //       const indexOfBookToRemove = currentCart.findBook(
  //         (cartBook) => cartBook.id === book.id
  //       )

  //       if (indexOfBookToRemove === -1) {
  //         return currentCart
  //       }

  //       return [ 
  //         ...currentCart.slice(0, indexOfBookToRemove),
  //         ...currentCart.slice(indexOfBookToRemove + 1)
  //       ]
  //     })
  //   }

  //   const amountOfBooks = (id) => userCartBooks.filter((book) => book.id === id).length
    


 

// const [bookData, setBookData] = useState({...props.book})
//     const [books] = useState([bookData.title, bookData.price, bookData.cover_art])
    // const [userCartBooks, setUserCartBooks] = useState(['book 1', 'book 2', 'book 3']) 
    //temp. for testing purposes. Should be set to user.cart

    

    // const addToCart = (book) => setUserCartBooks((currentCart) => [...currentCart, book]);

    

    



// const listBooksInCart = () =>
// book.map((book) => (
//   <div key={bookData.title}>
//     ({amountOfBooks(book.id)} x {bookData.price}){bookData.title}
//     <button type="submit" onClick={() => removeFromCart(book)}>
//       Remove
//     </button>
//   </div>
// ));



// const PAGE_BOOKS = 'books'
// const PAGE_CART = 'userCartBooks'

// const [page, setPage] = useState(PAGE_BOOKS)

// const navigateTo = (nextPage) => {
//   setPage(nextPage)
// }



// const getSum = () => {
//   return userCartBooks.reduce(
//     (sum, {cost, quantity}) => sum + cost * quantity,
//     0
//   )
// }

// const emptyCart = () => {
//   setUserCartBooks([])
// }

// const setQuantity = (book, price) => {
//   const newCart = [...userCartBooks]
//   newCart.find(
//     (item) => item.title === book.title
//   ).quantity = price
//   setUserCartBooks(newCart)
// }

// const removeFromCart = (bookRemove) => {
//   setUserCartBooks(
//     userCartBooks.filter((book) => book !== bookRemove)
//   )
// }

{/* <button onClick={() => navigateTo(PAGE_CART)}>
Go to Cart ({getCartTotal()})
</button>  */}


{/* <button onClick={() => navigateTo(PAGE_BOOKS)}>
          View Products
        </button>
      
      {page === PAGE_BOOKS && (
        <Book userCartBooks={userCartBooks} setUserCartBooks={setUserCartBooks} />
      )}
      {page === PAGE_CART && (
        <ShoppingCart userCartBooks={userCartBooks} setUserCartBooks={setUserCartBooks} />
      )}



                       {userCartBooks.length > 0 && (
        <button onClick={emptyCart}>Clear cart</button>
      )}
      <div className="books">
        {userCartBooks.map((book) => (
          <div className="book" key={book.id}>
            <h3>{bookData.title}</h3>
            <h4>${bookData.price}</h4>
            <input
              value={book.quantity}
              onChange={(e) =>
                setQuantity(
                  book,
                  parseInt(e.target.value)
                )
              }
            />
            <img src={bookData.cover_art} alt='' />
            <button onClick={() => removeFromCart(book)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <div>Total Cost: ${getSum()}</div> */}