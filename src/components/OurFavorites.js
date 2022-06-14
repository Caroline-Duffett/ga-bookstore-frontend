import {useState} from 'react'
import BooksIndex from './BooksIndex'


const OurFavorites = (props) => {

  return (
    <>
      <h1>Our Favorites</h1>
      <div className='scroll-flexbox'>
        {props.books.map((book) => {
            return(
              <>
              {book.id === 3 || book.id === 2 || book.id === 4 || book.id === 11 || book.id === 6 || book.id === 5 ?
              <div className='book' key={book.id}>
                <img src={book.cover_art} alt="book cover"/>
                <h4>Title: {book.title}</h4>
                <h5>Author: {book.author_name}</h5>
                <h5>Price: {book.price}</h5>
             </div>
             : null}
             </>
           )
        })}
      </div>
    </>
  )
}

export default OurFavorites
