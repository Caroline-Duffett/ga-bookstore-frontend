import {useState} from 'react'
import Book from './Book'


const AllBooks = (props) => {

  //--- State:
  const [bookReviews, setBookReviews] = useState(["blank"])
  const [getBooks, setGetBooks] = useState(props.getBooks)
  const [loggedInUser, setLoggedInUser] = useState(props.loggedInUser)



  return (
    <>
      <h1>All Books</h1>
      <div className='all-books-flexbox'>
        {props.books.map((book) => {
          //console.log(loggedInUser);
          return(
            <Book
            book={book}
            section={'allbooks'}
            selectBook={props.selectBook}
            bookReviews={props.bookReviews}
            getBooks={getBooks}
            loggedInUser={loggedInUser}
            handleDelete={props.handleDelete}
            handleUpdate={props.handleUpdate}
            />
          )
        })}
      </div>
    </>
  )
}

export default AllBooks





//==============================================================================//
//                                Grave Yard
//==============================================================================//
//----------------------------------------- Displays Taken Out for Index Page --//
  // <h5>Publisher: {book.publisher}</h5>
  // <h5>Publication date: {book.publication_date}</h5>
  // <h5>Genre: {book.genre}</h5>
  // <h5>Page count: {book.page_count}</h5>
  // <h5>Language: {book.language}</h5>
  // <h5>ISBN: {book.isbn}</h5>
  // <h5>Rating: {book.rating}</h5>
//------------------------------------------------------------------------------//

//----------------------------------- Admin ternary for editing and deleting  --//
// {props.user === 'admin' ?
//   <>
//     <Edit handleUpdate={props.handleUpdate} book={book}/>
//     <button onClick={() => {props.handleDelete(book)}}>
//     X
//     </button>
//   </>
//   : null}
//------------------------------------------------------------------------------//


//------------------------------------------------- Original Books Index page --//
// import {useState} from 'react'
//
// const BooksIndex = (props) => {
//
//
//   return (
//     <>
//       <h1>All Books</h1>
//       <div className='all-books-flexbox'>
//         {props.books.map((book) => {
//           return(
//             <div className='book' key={book.id}>
//               <img src={book.cover_art} alt="book cover"/>
//               <h4>Title: {book.title}</h4>
//               <h5>Author: {book.author_name}</h5>
//               <h5>Price: {book.price}</h5>
//            </div>
//          )
//         })}
//       </div>
//     </>
// )}
//
// export default BooksIndex
//------------------------------------------------------------------------------//


//
// <div className='all-reviews-flexbox'>
//   {props.reviews.map((review) => {
//     return(
//       <Review
//       review={review}
//       section={'allbooks'}
//       />
//     )
//   })}
// </div>
