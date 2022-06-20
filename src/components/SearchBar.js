import {useState, useContext} from 'react'
import ProductContext from '../contexts/ProductContext';
import Book from './Book.js'

const SearchBar = (props) => {

  //--- State:
  const [query, setQuery] = useState("")
  const { books, addItem, loggedInUser } = useContext(ProductContext);

  return (
    <>
      <button
      onClick={props.searchToggle}
      className="search-btn">
         {/* &#x1F50D; */} Search
        </button>
      {props.showSearch ?
        <>
          <div className="modal-wrapper"  onClick={props.searchToggle}>
            <div className="search-bar-modal" onClick={e => e.stopPropagation()}>
              <div className='search-bar-x-btn-div'>
                <button className='search-bar-x-btn' onClick={props.searchToggle}>
                &#x2715;
                </button>
              </div>
              <div className="search-bar-div">
                <input className="search-bar" placeholder="Search by title, author, or genre" onChange={event => setQuery(event.target.value)}/>
              </div>
              {query === "" ? null:
                <div className="search-flexbox">
                  {books.filter(book => {
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

                      <div key={book.id}>
                      <Book
                      book={book}
                      bookReviews={props.bookReviews}
                      loggedInUser={loggedInUser}
                      cartUpdate={props.cartUpdate}
                      addItem={addItem}
                      />
                      </div>
                    )
                  })}
              </div>}
            </div>
          </div>
        </>
      : null}
    </>
  )
}

export default SearchBar
