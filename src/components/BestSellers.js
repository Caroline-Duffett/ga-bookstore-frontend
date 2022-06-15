import {useState} from 'react'
import Book from './Book'

const BestSellers = (props) => {

  return (
    <>
      <h1 className="best-sellers-heading">Best Sellers</h1>
      <div className='scroll-flexbox'>
        {props.books.map((book) => {
            return(
              <>
              {book.id === 36 || book.id === 35 || book.id === 34 || book.id === 33 || book.id === 37 || book.id === 38 || book.id === 40 || book.id === 41 || book.id === 42 || book.id === 43 || book.id === 44 ?
              <Book book={book} section={"bestsellers"}/>  
             : null}
             </>
           )
        })}
      </div>
    </>
  )
}

export default BestSellers
