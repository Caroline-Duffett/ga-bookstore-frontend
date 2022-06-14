import {useState} from 'react'
import Edit from './Edit'


const OurFavorites = (props) => {
  //States
  const [user, setUser] = useState('admin') //temp., just for testing. Waiting for user auth to be finished

  return (
    <>
      <h1>Our Favorites</h1>
      {props.books.map((book) => {
          return(
            <>
            {book.id === 3 || book.id === 2 || book.id === 4 || book.id === 11 || book.id === 6 || book.id === 5 ?
            <div className='book' key={book.id}>
              <img src={book.cover_art} alt="book cover"/>
              <h4>Title: {book.title}</h4>
              <h5>Author: {book.author_name}</h5>
              <h5>Price: {book.price}</h5>
              {user === 'admin' ?
                <>
                  <Edit handleUpdate={props.handleUpdate} book={book}/>
                  <button onClick={() => {props.handleDelete(book)}}>
                  X
                  </button>
                </>
                : null}
           </div>
           : null}
           </>
         )
      })}
    </>
  )
}

export default OurFavorites
