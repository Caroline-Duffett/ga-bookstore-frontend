import {useState, useEffect, useCallback} from 'react'
import Edit from './Edit.js'
import ShowModal from './ShowModal'
import ShoppingCart from './ShoppingCart'


const Book = (props, book) => {
  //States:
    const [bookData, setBookData] = useState({...props.book})
    const[show, setShow] = useState(false)

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

  return (
      <>
        <div className='book' key={bookData.id}>

          <img src={bookData.cover_art} alt="book cover"
          onClick={() => setShow(true)}
          />
          <ShowModal title={bookData.title} onClose={() => setShow(false)} show={show}>
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

          {/* <ShoppingCart></ShoppingCart> */}

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
