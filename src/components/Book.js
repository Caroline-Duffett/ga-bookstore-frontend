// //=================================================================================================================//
// //                                This version of code goes through reviews table
// //=================================================================================================================//
// import {useState, useEffect, useCallback} from 'react'
// import Edit from './Edit.js'
// import ShowModal from './ShowModal'
// import ShoppingCart from './ShoppingCart'
// import axios from 'axios'
// import ReviewsModal from './ReviewsModal'
//
//
// const Book = (props, book) => {
//   //--- State:
//   const [bookData, setBookData] = useState({...props.book})
//   const[show, setShow] = useState(false)
//   // const [showReviews, setShowReviews] = useState(false)
//   // const [reviews, setReviews] = useState([])
//   const [bookReviews, setBookReviews] = useState([])
//
//   //--- Functions:
//   // //toggles the reviews form
//   // const reviewToggle = () => {
//   //   if (showReviews === false) {
//   //     setShowReviews(true)
//   //   } else {
//   //     setShowReviews(false)
//   //   }
//   // }
//
//   // //Read Route for reviews
//   // const getBookReviews = () => {
//   //   //axios.get('https://ga-bookstore-backend.herokuapp.com/api/reviews')
//   //   axios.get("http://localhost:8000/api/books/reviews")
//   //   .then(response => setReviews(response.data),
//   //     err=> console.log(err)
//   //   ).catch(error=> console.error(error))
//   // }
//
//   return (
//       <>
//         <div className='book' key={bookData.id}>
//           <img src={bookData.cover_art} alt="book cover"
//           onClick={() => {
//             setShow(true)
//           }}
//           />
//           <ShowModal title={bookData.title} onClose={() => setShow(false)} show={show}>
//           <img src={bookData.cover_art} alt="book cover"/>
//           <h5>Author: {bookData.author_name}</h5>
//           <h5>Publisher: {bookData.publisher}</h5>
//           <h5>Publication Date: {bookData.publication_date}</h5>
//           <h5>Pages: {bookData.page_count}</h5>
//           <h5>Genre: {bookData.genre}</h5>
//           <h5>Rating: {bookData.rating}</h5>
//           <br/>
//           <h5>${bookData.price}</h5>
//           <input type="number" placeholder="Qty"/>
//           {props.user === 'admin' ?
//             <>
//               <Edit handleUpdate={props.handleUpdate} book={book}/>
//               <button onClick={() => {props.handleDelete(book)}}>
//               Delete
//               </button>
//             </>
//           : null}
//           <ReviewsModal bookData={bookData}/>
//           </ShowModal>
//         </div>
//     </>
//   )
// }
//
// export default Book
//
// //showReviews={showReviews} reviewToggle={reviewToggle} reviews={reviews}
// //=================================================================================================================//











// //=================================================================================================================//
// //                                This version of code goes through reviews table
// //=================================================================================================================//
import {useState, useEffect, useCallback} from 'react'
import Edit from './Edit.js'
import ShowModal from './ShowModal'
import ShoppingCart from './ShoppingCart'
import axios from 'axios'
import ReviewsModal from './ReviewsModal'


const Book = (props, book) => {
  //--- State:
  const [bookData, setBookData] = useState({...props.book})
  const[show, setShow] = useState(false)
  const [bookReviews, setBookReviews] = useState([])
  const [bookInfo, setBookInfo] = useState(true)
  const [reviews, setReviews] = useState([])




  //--- Functions
  //Toggles between the book info and the reviews in modal
  const bookInfoReviewToggle = () => {
    if (bookInfo === true) {
      setBookInfo(false)
    } else {
      setBookInfo(true)
    }
  }


  //Create Route for reviews (works only for reviews table)
  const handleReviewCreate = (addReview) => {
   //axios.post('https://ga-bookstore-backend.herokuapp.com/api/reviews', addReview)
   axios.post("http://localhost:8000/api/books/reviews", addReview)
   .then((response) => {
     setReviews([...reviews, response.data])
   })
  }

  //Read Route for reviews
  const getBookReviews = () => {
    //axios.get('https://ga-bookstore-backend.herokuapp.com/api/reviews')
    axios.get("http://localhost:8000/api/books/reviews")
    .then(response => setReviews(response.data),
      err=> console.log(err)
    ).catch(error=> console.error(error))
  }

  //Update Route for reviews
  const handleUpdateReview = (editReview) => {
    //axios.put('http://localhost:8000/api/books/reviews/' + editReview.id, editReview)
    axios.put('http://localhost:8000/api/books/reviews/' + editReview.id, editReview)
    .then((response) => {
      setReviews(reviews.map((review) => {
        return review.id !== response.data.id ? review : response.data
      }))
    })
  }

  //Delete Route for reviews
  const handleReviewDelete = (deletedReview) => {
    axios.delete('http://localhost:8000/api/books/reviews/' + deletedReview.id)
    .then((response) => {
      setReviews(reviews.filter(review => review.id !== deletedReview.id))
    })
  }




  return (
      <>
        <div className='book' key={bookData.id}>
          <img src={bookData.cover_art} alt="book cover"
          onClick={() => {
            setShow(true)
          }}
          />
          <ShowModal title={bookData.title} onClose={() => setShow(false)} show={show}>
          {bookInfo ?
            <>
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
              {props.user === 'admin' ?
                <>
                  <Edit handleUpdate={props.handleUpdate} book={book}/>
                  <button onClick={() => {props.handleDelete(book)}}>
                  Delete
                  </button>
                </>
              : null}
              <button
              onClick={() => {
                //reviewToggle()
                getBookReviews()
                bookInfoReviewToggle()
              }}>See Reviews</button>
            </>
            : <ReviewsModal bookData={bookData} handleReviewDelete={handleReviewDelete} handleUpdateReview={handleUpdateReview}
            handleReviewCreate={handleReviewCreate}/>}
          </ShowModal>
        </div>
    </>
  )
}

export default Book
//=================================================================================================================//















//==============================================================================//
//                                Grave Yard
//==============================================================================//

//Read Route for reviews tablereviews
// const getReviews = () => {
//   //axios.get('https://ga-bookstore-backend.herokuapp.com/api/books')
//   const brl = {
//                 bookId: bookData.id,
//               }
//   axios.get("http://localhost:8000/api/books/reviews/list", brl)
//   .then((response) => {
//         console.log(response.data);
//         // setReviews(response.data.map((review) => {
//         //     return bookData.id == review.book_id ? review:null
//         // }))
//   }
// )
// .catch(error=> console.error(error))
// }

// <button onClick={() => addToCart(book.id, "book")}>Add</button>

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





//----------- Attempt -----------//
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


    //
    // {showReviews ?
    //   <>
    //     <h3>Reviews</h3>
    //     <div className='all-reviews-flexbox'>
    //     {reviews.map((review) => {
    //       return (
    //         <>
    //           <div className="review-card" key={review.id}>
    //             <h5>User: {review.user_id}</h5>
    //             <h5>Review: {review.review}</h5>
    //             <h5>review.id: {review.id}</h5>
    //           </div>
    //         </>
    //       )
    //     })
    //   }
    //     </div>
    //   </>
    // : null}





    //console.log(reviews);
    //const [reviews, setReviews] = useState([{...props.reviews}])
    //console.log(props.reviews);
    //console.log(...props.reviews);
    //console.log(reviews);


    // <div className='all-reviews-flexbox'>
    // {reviews.map((review) => {
    //   return (
    //     <>
    //     {bookData.reviews.map((bookDataReview) => {
    //       if (bookDataReview === review.id) {
    //         return (
    //           <div className="review-card" key={review.id}>
    //             <h5>User: {review.user_id}</h5>
    //             <h5>Review: {review.review}</h5>
    //             <h5>review.id: {review.id}</h5>
    //             <button onClick={() => {handleReviewDelete(review)}}>
    //             x
    //             </button>
    //           </div>
    //         )
    //       }
    //     })}
    //     </>
    //   )
    // })
    // }
    // </div>
//----------- Attempt -----------//


//=================================================================================================================//
//                               This is the code that works in postman not react (backend try)
//=================================================================================================================//
   //  //Read Route for reviews tablereviews
   //  const getReviews = () => {
   //    console.log(bookData.id);
   //    //axios.get('https://ga-bookstore-backend.herokuapp.com/api/books')
   //    axios.get(`http://localhost:8000/api/books/reviews/list`, {"bookID":bookData.id})
   //    .then((response) => {
   //      //setReviews(response.data)
   //      console.log({...response})
   //    }
   // )
   //  .catch(error=> console.error(error))
   //  //fetch('http://localhost:8000/api/books/reviews/list').then(res => res.json()).then(res => console.log(res))
   //  }

  // const getReviews = () => {
  //   console.log('clicked');
  //   axios({
  //     method: 'GET',
  //     url: `http://localhost:8000/api/books/reviews/list`,
  //     header: {'Content-Type': 'application/json',
  //       "Access-Control-Allow-Origin": "*"},
  //     data: {
  //       "bookID": bookData.id
  //     }
  //   }).then((response) => {
  //     console.log(response);
  //   }).catch(error=> console.error(error))
  // }
//=================================================================================================================//


// //Read Route for reviews
// const getBookReviews = () => {
//   //axios.get('https://ga-bookstore-backend.herokuapp.com/api/books')
//   axios.get("http://localhost:8000/api/books/reviews")
//   .then(response => setReviews(response.data),
//     err=> console.log(err)
//   ).catch(error=> console.error(error))
// }


// const handleChosenBook = (chosenBook) => {
//   axios.get("http://localhost:8000/api/books/" + chosenBook)
//   .then(response => setBookData(response.data),
//      err=> console.log(err)
//    )
//    .catch(error=> console.error(error))
// }

// // only grabs the reviews that have this book's ID as the book_id
// const getBookReviews = () => {
//   //console.log('getbookreviews function ran');
//   setBookReviews(props.bookReviews)
//   console.log("bookReviews without the filter" + {bookReviews})
//
//   setBookReviews(props.bookReviews.filter(review => review.book_id == bookData.id))
//   //console.log("props.bookReviews from getBookReviews in Book.js: " + props.bookReviews);
//   console.log("bookReviews from getBookReviews in Book.js: " + {bookReviews})
// }


// useEffect(() => {
//   getReviews()
// }, [])


//=================================================================================================================//
//                                This version of code goes through book.reviews
//                              (can add reviews to page but only after page load)
//                                    (can delete but only after page load)
//=================================================================================================================//
// import {useState, useEffect, useCallback} from 'react'
// import Edit from './Edit.js'
// import ShowModal from './ShowModal'
// import ShoppingCart from './ShoppingCart'
// import axios from 'axios'
// import AddReview from './AddReview'
//
//
// const Book = (props, book) => {
//   //--- State:
//   const [bookData, setBookData] = useState({...props.book})
//   const[show, setShow] = useState(false)
//   const [showReviews, setShowReviews] = useState(false)
//   const [reviews, setReviews] = useState([])
//   const [bookReviews, setBookReviews] = useState([])
//
//
//   //--- Functions:
//   //toggles list of book's reviews
//   const reviewToggle = () => {
//     if (showReviews === false) {
//       setShowReviews(true)
//     } else {
//       setShowReviews(false)
//     }
//   }
//
//
//   //Create Route for reviews
//   const handleReviewCreate = (addReview) => {
//    //axios.post('https://ga-bookstore-backend.herokuapp.com/api/books', addBook)
//    axios.post("http://localhost:8000/api/books/reviews", addReview)
//    .then((response) => {
//      setReviews([...reviews, response.data])
//    })
//   }
//
//   //function the accesses books.reviews
//   const getBookReviews = () => {
//     setBookReviews(props.bookReviews)
//   }
//
//   //Delete Route for reviews
//   const handleReviewDelete = (deletedReview) => {
//     axios.delete('http://localhost:8000/api/books/reviews/' + deletedReview.id)
//     .then((response) => {
//       setReviews(reviews.filter(review => review.id !== deletedReview.id))
//     })
//   }
//
//   return (
//       <>
//         <div className='book' key={bookData.id}>
//           <img src={bookData.cover_art} alt="book cover"
//           onClick={() => {
//             setShow(true)
//           }}
//           />
//           <ShowModal title={bookData.title} onClose={() => setShow(false)} show={show}>
//           <h2>{bookData.id}</h2>
//           <img src={bookData.cover_art} alt="book cover"/>
//           <h5>Author: {bookData.author_name}</h5>
//           <h5>Publisher: {bookData.publisher}</h5>
//           <h5>Publication Date: {bookData.publication_date}</h5>
//           <h5>Pages: {bookData.page_count}</h5>
//           <h5>Genre: {bookData.genre}</h5>
//           <h5>Rating: {bookData.rating}</h5>
//           <br/>
//           <h5>${bookData.price}</h5>
//           <input type="number" placeholder="Qty"/>
//           {props.user === 'admin' ?
//             <>
//               <Edit handleUpdate={props.handleUpdate} book={book}/>
//               <button onClick={() => {props.handleDelete(book)}}>
//               Delete
//               </button>
//             </>
//           : null}
//           <div className="all-reviews-div">
//             <button
//             onClick={() => {
//               reviewToggle()
//               getBookReviews()
//             }}>See Reviews</button>
//             {showReviews ?
//               <>
//                 <AddReview handleReviewCreate={handleReviewCreate}/>
//                 <h3>Reviews</h3>
//                 <div className='all-reviews-flexbox'>
//                 {bookReviews.map((review) => {
//                   if (review.book_id === bookData.id) {
//                     return (
//                       <div className="review-card" key={review.id}>
//                         <h5>User: {review.user_id}</h5>
//                         <h5>Review: {review.review}</h5>
//                         <h5>review.id: {review.id}</h5>
//                         <button onClick={() => {handleReviewDelete(review)}}>
//                         x
//                         </button>
//                       </div>
//                     )
//                   }
//                 })}
//                 </div>
//               </>
//             : null}
//           </div>
//           </ShowModal>
//         </div>
//     </>
//   )
// }
//
// export default Book
//=================================================================================================================//


// {bookData.reviews.map((bookDataReview) => {
//   if (bookDataReview === review.id) {
//     return (
//       <div className="review-card" key={review.id}>
//         <h5>User: {review.user_id}</h5>
//         <h5>Review: {review.review}</h5>
//         <h5>review.id: {review.id}</h5>
//         <EditReview handleUpdateReview={handleUpdateReview} review={review}/>
//         <button onClick={() => {handleReviewDelete(review)}}>
//         x
//         </button>
//       </div>
//     )
//   }
// })}


// <button
// onClick={() => {
//   reviewToggle()
//   getBookReviews()
// }}>See Reviews</button>
