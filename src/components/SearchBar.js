import {useState} from 'react'

const SearchBar = (props) => {

  //State:
  const [query, setQuery] = useState("")
  const [showSearch, setShowSearch] = useState(false)

  //Functions:
  const searchToggle = () => {
    if (showSearch === false) {
      setShowSearch(true)
    } else {
      setShowSearch(false)
    }
  }

  return (
    <>
      <button onClick={searchToggle}>Search</button>
      {showSearch ?
        <>
          <h1>Search bar</h1>
          <div className="search-bar-div">
            <input className="search-bar" placeholder="Search by Title, Author, Genre" onChange={event => setQuery(event.target.value)}/>
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
              <div className='book' key={book.id}>
                <img src={book.cover_art} alt="book cover"/>
                <h4>Title: {book.title}</h4>
                <h5>Author: {book.author_name}</h5>
                <h5>Price: {book.price}</h5>
              </div>
            )
          })}
        </>
      : null}
    </>
  )
}

export default SearchBar
