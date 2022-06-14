import {useState} from 'react'

const BestSellers = (props) => {

  return (
    <>
      <h1 className="best-sellers-heading">Best Sellers</h1>
      <div className='scroll-flexbox'>
        {props.books.map((book) => {
            return(
              <>
              {book.id === 36 || book.id === 35 || book.id === 34 || book.id === 33 || book.id === 37 || book.id === 38 ?
              <div className='book' key={book.id + 'bestseller'}>
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

export default BestSellers
