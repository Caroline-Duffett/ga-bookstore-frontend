import react from 'react'
import {useReducer, useState} from 'react'
import Book from './Book'

// provides a consistent number of decimals
const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
}

 // toLocalString method converts total from a # to a string with 2 decimal places. this will return a localized string to display the total
 function getTotal(cart) {
    const total = cart.reduce((totalCost, item) => totalCost + item.price, 0)
    return total.toLocaleString(undefined, currencyOptions)
}

const books = ['book']

// reducer updates the state based on the current state
// take action as a second argument, can be add or remove
// switch used instead of if/then - handles different actions,makes code more readable
function cartReducer(state, action) {
    switch(action.type) {
        case 'add':
            return [...state, action.book]
        case 'remove':
            const bookIndex = state.findIndex(item => item.title === action.book.title)
            if(bookIndex < 0) {
                return state
            }
            const update = [...state]
            update.splice(bookIndex, 1)
            return update
            default:
                return state
    }
}

function totalReducer(state, action) {
    if (action.type === 'add') {
    return state + action.price
}
    return state - action.price
}

const BookItem = (props) => {
    const [book, setBook] = useState({...props.book})
    const [cart, setCart] = useReducer(cartReducer, [])
    const [total, setTotal] = useReducer(totalReducer, 0)

    //  function add(book) {
    //     const {title, price} = book
    //     setCart({title, type: 'add'})
    //     // setTotal({price, type: 'add'})
    //  }

    function remove(book) {
        const {title, price} = book
        setCart({title, type: 'remove'})
        // setTotal({price, type: 'remove'})
    }

    return(
        <div className="cart-wrapper">
            <div>
                {/* Shopping cart: {cart.length} */}
                <div>
                    <button onClick={props.cartToggle} className="search-btn">Cart{cart.length})</button>
                </div>
                    {props.showCart ?
                <>
                    {props.signedIn ?
                <>
                <div className="cart-modal-wrapper">
                  <div className="cart-modal">
                    <div className='cart-modal-x-div'>
                      <button className='cart-x-btn' onClick={props.cartToggle}>
                      Close
                      </button>
                    </div>
                        <h3>Your Cart</h3>
                    <div className="cart-books-flexbox">
                        {books.map((book) => {
                            return (
                            <div className="cartBook">
                                <h3>{book}</h3>
                            </div>
                            )
                        })}

                    <div>
                        {books.map(book => (
                        <div key={book.title}>
                            {/* <button onClick={() => add(book)}>Add</button> */}
                            <button onClick={() => remove(book)}>Remove</button>
                        </div>
                    ))}
                        </div>
                        <div>
                            Total: {getTotal(cart)}
                        </div>
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
      </div>
            {/* </div> */}
        {/* <div>
            Total: {getTotal(cart)}
        </div> */}

         {/* <div>
             {books.map(book => ( */}
               {/* <div key={book.title}> */}
            {/* <button onClick={() => add(book)}>Add</button> */}
            {/* <button onClick={() => remove(book)}>Remove</button>
        </div> */}
        {/* ))} */}
        {/* </div> */}
     </div>
    )
}

export default BookItem