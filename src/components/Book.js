

import {useState} from 'react'


const Book = (props) => {
  //States:
    const [bookData, setBookData] = useState({...props.book})


  return (
    <div className='book' key={bookData.id}>
      <img src={bookData.cover_art} alt="book cover"/>
      <h4>Title: {bookData.title}</h4>
      <h5>Author: {bookData.author_name}</h5>
      <h5>Price: {bookData.price}</h5>
    </div>
  )

}

export default Book
