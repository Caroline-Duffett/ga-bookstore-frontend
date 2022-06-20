import {useState, useContext} from 'react'
import Book from './Book'
import ProductContext from '../contexts/ProductContext';

const OurFavorites = (props) => {
  const { books, addItem } = useContext(ProductContext);

  return (
    <>
      <h1>Our Favorites</h1>
      <div className='scroll-flexbox'>
        {props.books.map((book) => {
            return(
              <>
                {book.id === 3 || book.id === 2 || book.id === 4 || book.id === 11 || book.id === 6 || book.id === 5 ?
                  <Book 
                  book={book} 
                  section={'Favorites'}
                  addItem={addItem}
                  />
               : null}
             </>
           )
        })}
      </div>
    </>
  )
}

export default OurFavorites
