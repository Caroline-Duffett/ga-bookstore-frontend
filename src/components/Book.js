import {useState} from 'react'
import Edit from './Edit.js'

const Book = (props) => {
  //States:
    const [bookData, setBookData] = useState({...props.book})
    const [origin, setOrigin] = useState(props.origin)

    const handleShowModal = () => {
        console.log('handleShowmodal');
        if (origin === 'bookinfo') {
            props.renderBookInfoModal(bookData)
        }
    }

    const renderEdit = () => {
        console.log("renderedit");
        return(
            <>
                <Edit book={bookData}/>
                <button onClick={() => {props.handleDelete(bookData)}}> X </button>
            </>
        )
    }

  return (
      <>
        <div className='book' key={bookData.id}>
          <img src={bookData.cover_art} alt="book cover"
          onClick={() => {props.selectBook(bookData)}}
          />
          <h4>Title: {bookData.title}</h4>
          <h5>Author: {bookData.author_name}</h5>
          <h5>Price: {bookData.price}</h5>
        </div>
        {origin === 'bookinfo' ? {renderEdit} : null}
    </>
  )

}

export default Book


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
