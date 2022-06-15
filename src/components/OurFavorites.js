import {useState} from 'react'
import Book from './Book'

const OurFavorites = (props) => {

  return (
    <>
      <h1>Our Favorites</h1>
      <div className='scroll-flexbox'>
        {props.books.map((book) => {
            return(
              <>
                {book.id === 3 || book.id === 2 || book.id === 4 || book.id === 11 || book.id === 6 || book.id === 5 ?
                  <Book book={book} section={'Favorites'}/>
               : null}
             </>
           )
        })}
      </div>
    </>
  )
}

export default OurFavorites
