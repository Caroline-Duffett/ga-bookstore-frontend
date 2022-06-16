import {useState} from 'react'

const ShoppingCart = (props) => {

  //State:
    const [userCartBooks, setUserCartBooks] = useState(['book 1', 'book 2', 'book 3']) //temp. for testing purposes. Should be set to user.cart


  return(
    <>
      <button onClick={props.cartToggle} className="search-btn">Cart</button>
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
