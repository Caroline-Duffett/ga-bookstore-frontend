import {useState} from 'react'
import Edit from './Edit'


const BestSellers = (props) => {
  //States
  const [user, setUser] = useState('admin') //temp., just for testing. Waiting for user auth to be finished
  const [query, setQuery] = useState("")

  const [bestseller, setBestseller] = useState('')


  return (
    <>
      <h1>Best Sellers</h1>
      <div className="search-bar-div">
        <input className="search-bar" placeholder="Search" onChange={event => setQuery(event.target.value)}/>
      </div>
      {props.books.filter(book => {
        if (query === '') {
          return book
        } else if (book.title.toLowerCase().includes(query.toLowerCase())) {
          return book
        } else if (book.author_name.toLowerCase().includes(query.toLowerCase())) {
          return book
        } else if (book.genre.toLowerCase().includes(query.toLowerCase())) {
          return book
        }
      }).map((book) => {
          return(
            <>
            {book.id === 36 || book.id === 35 || book.id === 34 || book.id === 33 ?
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

export default BestSellers
