import React, {useState, useContext } from 'react';
import Book from './Book'

// Components
import Item from './ShoppingCartItem';

// Contexts
import CartContext from '../contexts/CartContext';
import ProductContext from '../contexts/ProductContext';

const ShoppingCart = (props) => {
  const { cart, removeItem } = useContext(CartContext);

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <>
      <div>
        <button
           onClick={props.cartToggle}
           className="search-btn">
             Cart ({cart.length})
         </button>
      </div>
     <>
        {props.showCart ?
              <>
               <div className="cart-modal-wrapper">
                 <div className="cart-modal">
                    <div className='cart-modal-x-div'>
                       <button className='cart-x-btn' onClick={props.cartToggle}>
                       {/* <button className='cart-x-btn' onClick={props.onClose}> */}
                       x
                       </button>
                    </div>
                   <h3>Your Cart</h3>
                   <div className="cart-books-flexbox">
                    <div className="shopping-cart">
                      {cart.map(book => (
                        <Item
                        key={book.id}
                        {...book}
                        removeItem={removeItem}
                        />
                      ))}
                        <div className="shopping-cart__checkout">
                          <p>Total: ${getCartTotal()}</p>
                          <button>
                            {props.loggedInUser.username ?
                              <>Checkout</>
                            :
                              <>Guest Checkout</>
                            }
                          </button>
                        </div>
                    </div>
                   </div>
                 </div>
               </div>
              </>
        :null}
      </>
    </>
  )
 }

export default ShoppingCart;

// //=================================================================================================================//
// //                                      CODE BEFORE COMBINING CART TOGGLE (Please keep for ref)
// //=================================================================================================================//

//     <div className="shopping-cart">
//       {cart.map(book => (
//         <Item key={book.id} {...book} removeItem={removeItem} />
//       ))}

//       <div className="shopping-cart__checkout">
//         <p>Total: ${getCartTotal()}</p>
//         <button>Checkout</button>
//       </div>
//     </div>
//   );
// };

// //=================================================================================================================//
// //                                       OLD SHOPPING CART CODE
// //=================================================================================================================//


//
//
// import {useState} from 'react'
// import Book from './Book'
//
//
// const ShoppingCart = (props) => {
//
//   //State:
//     const [userCartBooks, setUserCartBooks] = useState([])
//
//     // const [user, setUser] = useState('')
//     // const [cart, setCart] = useState([])
//
//   return (
//     <>
//       <button onClick={props.cartToggle} className="search-btn">Cart{userCartBooks.length})</button>
//       <>
//         {props.showCart ?
//           <>
//             {console.log("ShoppingCart loggedInUser: ")}
//             {console.log(props.loggedInUser)}
//             {props.loggedInUser.username ?
//               <>
//                 <div className="cart-modal-wrapper">
//                   <div className="cart-modal">
//                     <div className='cart-modal-x-div'>
//                       <button className='cart-x-btn' onClick={props.cartToggle}>
//                       x
//                       </button>
//                     </div>
//                     <h3>Your Cart</h3>
//                     <div className="cart-books-flexbox">
//                       {userCartBooks.map((cartBook) => {
//                         return (
//                           <div className="cartBook">
//                             <h3>{cartBook}</h3>
//                           </div>
//                         )
//                       })}
//                     </div>
//                   </div>
//                 </div>
//               </>
//               :
//               <>
//                 <div className="sign-in-modal-wrapper" onClick={props.cartToggle}>
//                   <div className="sign-in-modal" onClick={e => e.stopPropagation()}>
//                     <h2 className="sign-in-message">Please Sign In or Create an Account to view cart</h2>
//                     <div className='sign-in-x-btn-div'>
//                       <button className='sign-in-x-btn' onClick={props.cartToggle}>
//                       x
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             }
//         </>
//         :
//         null}
//       </>
//     </>
//   )
// }
//
// export default ShoppingCart
//
// CODE GRAVEYARD ------------------------------------>
//
// {/* <h3>{cartBook}</h3> */}
//
//   {/* {userCartBooks.map((cartBook) => { */}
//
//   const cartTotal = userCartBooks.reduce((total, {price = 0}) => total + price, 0)
//
//   <div>Total: ${cartTotal}</div>
// <div>
// <button onClick={() => setUserCartBooks([])}>Clear</button>
// </div>
//
//
// <button type="submit" onClick={() => removeFromCart(book)}>
// Remove
// </button>
//
//     const getCartTotal = () => {
//       return userCartBooks.reduce(
//         (sum, { quantity }) => sum + quantity, 0);
//     };
//
//     const removeFromCart = (book) => {
//       setUserCartBooks((currentCart) => {
//         const indexOfBookToRemove = currentCart.findBook(
//           (cartBook) => cartBook.id === book.id
//         )
//
//         if (indexOfBookToRemove === -1) {
//           return currentCart
//         }
//
//         return [
//           ...currentCart.slice(0, indexOfBookToRemove),
//           ...currentCart.slice(indexOfBookToRemove + 1)
//         ]
//       })
//     }
//
//     const amountOfBooks = (id) => userCartBooks.filter((book) => book.id === id).length
//
//
//
//
//
// const [bookData, setBookData] = useState({...props.book})
//     const [books] = useState([bookData.title, bookData.price, bookData.cover_art])
//     const [userCartBooks, setUserCartBooks] = useState(['book 1', 'book 2', 'book 3'])
//     temp. for testing purposes. Should be set to user.cart
//
//
//
//     const addToCart = (book) => setUserCartBooks((currentCart) => [...currentCart, book]);
//
//
//
//
//
//
//
// const listBooksInCart = () =>
// book.map((book) => (
//   <div key={bookData.title}>
//     ({amountOfBooks(book.id)} x {bookData.price}){bookData.title}
//     <button type="submit" onClick={() => removeFromCart(book)}>
//       Remove
//     </button>
//   </div>
// ));
//
//
//
// const PAGE_BOOKS = 'books'
// const PAGE_CART = 'userCartBooks'
//
// const [page, setPage] = useState(PAGE_BOOKS)
//
// const navigateTo = (nextPage) => {
//   setPage(nextPage)
// }
//
//
//
// const getSum = () => {
//   return userCartBooks.reduce(
//     (sum, {cost, quantity}) => sum + cost * quantity,
//     0
//   )
// }
//
// const emptyCart = () => {
//   setUserCartBooks([])
// }
//
// const setQuantity = (book, price) => {
//   const newCart = [...userCartBooks]
//   newCart.find(
//     (item) => item.title === book.title
//   ).quantity = price
//   setUserCartBooks(newCart)
// }
//
// const removeFromCart = (bookRemove) => {
//   setUserCartBooks(
//     userCartBooks.filter((book) => book !== bookRemove)
//   )
// }
//
// {/* <button onClick={() => navigateTo(PAGE_CART)}>
// Go to Cart ({getCartTotal()})
// </button>  */}
//
//
// {/* <button onClick={() => navigateTo(PAGE_BOOKS)}>
//           View Products
//         </button>
//
//       {page === PAGE_BOOKS && (
//         <Book userCartBooks={userCartBooks} setUserCartBooks={setUserCartBooks} />
//       )}
//       {page === PAGE_CART && (
//         <ShoppingCart userCartBooks={userCartBooks} setUserCartBooks={setUserCartBooks} />
//       )}
//
//
//
//                        {userCartBooks.length > 0 && (
//         <button onClick={emptyCart}>Clear cart</button>
//       )}
//       <div className="books">
//         {userCartBooks.map((book) => (
//           <div className="book" key={book.id}>
//             <h3>{bookData.title}</h3>
//             <h4>${bookData.price}</h4>
//             <input
//               value={book.quantity}
//               onChange={(e) =>
//                 setQuantity(
//                   book,
//                   parseInt(e.target.value)
//                 )
//               }
//             />
//             <img src={bookData.cover_art} alt='' />
//             <button onClick={() => removeFromCart(book)}>
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//
//       <div>Total Cost: ${getSum()}</div> */}
