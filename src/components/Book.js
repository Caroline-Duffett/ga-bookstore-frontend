import {useState} from 'react'
import Edit from './Edit.js'
import ShowModal from './ShowModal'
import ShoppingCart from './ShoppingCart'
//import Review from './Review'
import axios from 'axios'





const Book = (props, book) => {


  //States:
    const [bookData, setBookData] = useState({...props.book})
    const[show, setShow] = useState(false)
    const [showReviews, setShowReviews] = useState(false)

    const [reviews, setReviews] = useState([])
    const [bookReviews, setBookReviews] = useState([])
    //console.log(reviews);
    //const [reviews, setReviews] = useState([{...props.reviews}])
    //console.log(props.reviews);
    //console.log(...props.reviews);
    //console.log(reviews);

    const reviewToggle = () => {
      if (showReviews === false) {
        // getReviews()
        console.log(props.bookReviews);
        setShowReviews(true)
        //console.log(reviews);
      } else {
        setShowReviews(false)
      }
    }


    // only grabs the reviews that have this book's ID as the book_id
    const getBookReviews = () => {
      setBookReviews(props.bookReviews.filter(review => review.book_id == bookData.id))
    }


  return (
      <>
        <div className='book' key={bookData.id}>

          <img src={bookData.cover_art} alt="book cover"
          onClick={() => {
            setShow(true)
            getBookReviews()
          }}
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


// {props.reviews.map((review) => {
//   return(
//     <>
//       {showReviews ?
//         <>
//           {bookdatareview === review._id ?
//             <div className="review-div">
//               {review.user}
//               {review.review}
//             </div>
//           : null}
//         </>
//       : null}
//     </>
//   )
// })}

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





//<button onClick={() => addToCart(book.id, "book")}>Add</button>




//----------- Attempt








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



    // const matchReviews = (newReviews) => {
    //   //console.log(newReviews);
    //   newReviews.map((review) => {
    //     //console.log(review.book_id + " " + bookData.id);
    //     if (review.book_id == bookData.id) {
    //         //console.log(review);
    //       setReviews([...reviews, review])
    //     }
    //   })
    // }
    //
    // //Read Route for reviews
    // const getReviews = () => {
    //   //axios.get('https://ga-bookstore-backend.herokuapp.com/api/books')
    //   axios.get("http://localhost:8000/api/books/reviews")
    //   .then(response => matchReviews(response.data),
    //   err=> console.log(err)
    // )
    // .catch(error=> console.error(error))
    // }

//----------- Attempt
    // const matchReviews = (newReviews) => {
    //   //console.log(newReviews);
    //   newReviews.map((review) => {
    //     //console.log(review.book_id + " " + bookData.id);
    //     if (review.book_id == bookData.id) {
    //         //console.log(review);
    //       setReviews([...reviews, review])
    //     }
    //   })
    // }

    // //Read Route for reviews
    // const getReviews = () => {
    //   //axios.get('https://ga-bookstore-backend.herokuapp.com/api/books')
    //   axios.get(`http://localhost:8000/api/books/${bookData.id}/reviews`)
    //   .then(response => setReviews(response.data),
    //   err=> console.log(err)
    // )
    // .catch(error=> console.error(error))
    // }
