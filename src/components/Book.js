import {useState} from 'react'
import Edit from './Edit.js'
import ShowModal from './ShowModal'
import ShoppingCart from './ShoppingCart'
import AllBooks from './AllBooks.js'






const Book = (props, book) => {
  
  
   //States:
    const [bookData, setBookData] = useState({...props.book})
    const[show, setShow] = useState(false)
    





    
  




















  return (
      <>
        <div className='book' key={bookData.id}>
        
          <img src={bookData.cover_art} alt="book cover"
          onClick={() => setShow(true)}
          />



          <ShowModal title={bookData.title} OnClose={() => setShow(false)} onClose={() => setShow(false)} show={show}>
          <img src={bookData.cover_art} alt="book cover"/>
          <h5>Author: {bookData.author_name}</h5>
          <h5>Publisher: {bookData.publisher}</h5>
          <h5>Publication Date: {bookData.publication_date}</h5>
          <h5>Pages: {bookData.page_count}</h5>
          <h5>Genre: {bookData.genre}</h5>
          <h5>Rating: {bookData.rating}</h5>
          <br/>
          <h5>${bookData.price}</h5>
          <input type="number" placeholder="Qty"/>
          <button onClick={() => addToCart(book)}>Add</button> 
         
        

          {props.user === 'admin' ?
      <>
          <Edit handleUpdate={props.handleUpdate} book={book}/>
          <button onClick={() => {props.handleDelete(book)}}>
          Delete
          </button>
      </>
          : null}
          
          </ShowModal>
        </div>
        
        
    </>
  )
}

export default Book

//==============================================================================//
//                                Grave Yard
//==============================================================================//

// const [cart, setCart] = useState([])
// const [userCartBooks, setUserCartBooks] = useState([])

// appending book
// const addToCart = (book) => {
//   console.log('we are in addToCart')
//   setUserCartBooks([...userCartBooks, book])
// }
//   setUserCartBooks((currentCart, ))

    // const [books] = useState([bookData.title, bookData.price, bookData.cover_art])

    // const addToCart = (book) => setUserCartBooks((currentCart) => [...currentCart, book]);

// const listBooksToBuy = () => 
// book.map((book) => (
  
//   <div key={book.id}>
//     {book.title} - {book.price}
//     <button onClick={() => addToCart(book)}>Add to cart</button> 
//   </div>
// ))

{/* <button onClick={props.cartToggle} className="search-btn">Cart({userCartBooks.length})</button> */}

{/* <div>{listBooksToBuy}</div> */}

   // let newCart = [...userCartBooks]
      // let bookInCart = newCart.find(
      //   (book) => bookData.title === book.title
      // )
      // if (bookInCart) {
      //   bookInCart.quantity++
      // } else {
      //   bookInCart = {
      //     ...book,
      //     quantity: 1
      //   }
      //   newCart.push(bookInCart)
      // }
      // setUserCartBooks(newCart)
      // }


    // const renderBooks =

    // const [books] = useState([...props.book

    // ])

    // const [cartAmount, setCartAmount] = useState(0)

    // const addToCart = () => {
    //   setCartAmount((prevCartAmount) => prevCartAmount + 1)
    // }

//     const AddBook = useCallback(() => {
//       const book = createRandomBook();
//       setCart((prev) => [...prev, book]);
//     }, []);

//     let id = 0;
// const createRandomBook = () => {
//   id = id + 1;
//   return {
//     id,
//     qty: 1,
//     desc: `Book number: ${id}`,
//     price: Number((Math.random() * 10 + 1).toFixed(2))
//   };
// };

    // useEffect

// import BookInfoModal from './BookInfoModal'

  // const [origin, setOrigin] = useState(props.origin)

    // const handleShowModal = () => {
    //     console.log('handleShowmodal');
    //     if (origin === 'bookinfo') {
    //         props.renderBookInfoModal(bookData)
    //     }
    // }

    // const renderEdit = () => {
    //     console.log("renderedit");
    //     return(
    //         <>
    //             <Edit book={bookData}/>
    //             <button onClick={() => {props.handleDelete(bookData)}}> X </button>
    //         </>
    //     )
    // }

// <img src={bookData.cover_art} alt="book cover"
// onClick={() => {props.selectBook(bookData)}}
// /> 

// {origin === 'bookinfo' ? {renderEdit} : null}


// const renderBookInfoModal = (book) => {
//     console.log('renderBookInfoModal');
//     setShowBookInfoModal(true)
//     return(
//         <>
//          <h1> {book.title} </h1>
//              <
//              BookInfoModal book={book}
//              handleUpdate={handleUpdate}
//              handleDelete={handleDelete}
//              closeBookInfoModal={() => setShowBookInfoModal(false)}
//              />
//         </>
//     )
// }
//
// const [showBookInfoModal, setShowBookInfoModal] = useState(false)
//
// {showBookInfoModal ?
//     <
//     BookInfoModal book={selectedBook}
//     handleUpdate={handleUpdate}
//     handleDelete={handleDelete}
//     closeBookInfoModal={() => setShowBookInfoModal(false)}
//     />
//     :
//     null
// }
