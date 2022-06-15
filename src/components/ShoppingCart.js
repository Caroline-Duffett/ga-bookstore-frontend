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
      <>
        {showCart ?
          <>
            {props.signedIn ?
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
              :
              <>
                <div className="sign-in-modal-wrapper">
                  <div className="sign-in-modal">
                    <h2 className="sign-in-message">Please Sign In or Create an Account to view cart</h2>
                    <div className='sign-in-x-btn-div'>
                      <button className='sign-in-x-btn' onClick={cartToggle}>
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
