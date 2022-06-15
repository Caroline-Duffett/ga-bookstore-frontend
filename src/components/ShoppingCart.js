import {useState} from 'react'

const ShoppingCart = (props) => {
  //State:
  const [showCart, setShowCart] = useState(false)

  //Functions:
  //hides/shows Cart form
  const cartToggle = () => {
    if (showCart === false) {
      setShowCart(true)
    } else {
      setShowCart(false)
    }
  }


  return(
    <>
    <button onClick={cartToggle} className="search-btn">Cart</button>
    {showCart ?
      <>
        <div className="cart-modal-wrapper">
          <div className="cart-modal">
            <div className='cart-modal-x-div'>
              <button className='cart-x-btn' onClick={cartToggle}>
              x
              </button>
            </div>
            <h3>Your Cart</h3>
            <div className="cart-books-flexbox">
              <h5 className="item">Item 1</h5>
              <h5 className="item">Item 2</h5>
              <h5 className="item">Item 3</h5>
            </div>
          </div>
        </div>
      </>
    : null}

    </>
  )
}

export default ShoppingCart
