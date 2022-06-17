import {useState} from 'react'

const SearchBar = (props) => {

  //State:
  const [query, setQuery] = useState("")

  return (
    <>
      <button onClick={props.searchToggle} className="search-btn">Search</button>
      {props.showSearch ?
        <>
          <div className="modal-wrapper"  onClick={props.searchToggle}>
            <div className="search-bar-modal" onClick={e => e.stopPropagation()}>
              <div className='search-bar-x-btn-div'>
                <button className='search-bar-x-btn' onClick={props.searchToggle}>
                x
                </button>
              </div>
              <div className="search-bar-div">
                <input className="search-bar" placeholder="Search by Title, Author, Genre" onChange={event => setQuery(event.target.value)}/>
              </div>
              {query === "" ? null:
                <div className="search-flexbox">
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
                      <div className='book searchbook' key={book.id}>
                        <img className="searchbook-img" src={book.cover_art} alt="book cover"/>
                        <h4>Title: {book.title}</h4>
                        <h5>Author: {book.author_name}</h5>
                        <h5>Price: {book.price}</h5>
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
