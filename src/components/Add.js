import {useState} from 'react'

const Add = (props) => {
  let emptyBook = {title: '', author_name: '', publisher: '', publication_date: '', genre: '', cover_art: '', page_count: '', language: '', ibsn: '', rating: ''}
  const [book, setBook] = useState(emptyBook)


  const handleChange = (event) => {
    setBook({...book, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(book)
    setBook({title: '', author_name: '', publisher: '', publication_date: '', genre: '', cover_art: '', page_count: '', language: '', ibsn: '', rating: ''})
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title: </label>
        <input type='text' name='title' value={book.title} onChange={handleChange}/>
        <br/>
        <br/>

        <label htmlFor='author_name'>Author: </label>
        <input type='text' name='author_name' value={book.author_name} onChange={handleChange}/>
        <br/>
        <br/>

        <label htmlFor='publisher'>Publisher: </label>
        <input type='text' name='publisher' value={book.publisher} onChange={handleChange}/>
        <br/>
        <br/>

        <label htmlFor='publication_date'>Publication date: </label>
        <input type='date' name='publication_date' value={book.team} onChange={handleChange}/>
        <br/>
        <br/>

        <label htmlFor='genre'>Genre: </label>
        <input type='text' name='genre' value={book.genre} onChange={handleChange}/>
        <br/>
        <br/>

        <label htmlFor='cover_art'>Cover image: </label>
        <input type='text' name='cover_art' value={book.cover_art} onChange={handleChange}/>
        <br/>
        <br/>

        <label htmlFor='page_count'>Page count: </label>
        <input type='number' name='page_count' value={book.page_count} onChange={handleChange}/>
        <br/>
        <br/>

        <label htmlFor='language'>Language: </label>
        <input type='text' name='language' value={book.language} onChange={handleChange}/>
        <br/>
        <br/>

        <label htmlFor='ibsn'>IBSN: </label>
        <input type='number' name='ibsn' value={book.ibsn} onChange={handleChange}/>
        <br/>
        <br/>

        <label htmlFor='rating'>Rating: </label>
        <input type='number' name='rating' value={book.rating} onChange={handleChange}/>
        <br/>
        <br/>

        <input type='submit'/>
      </form>
    </>
  )
}

export default Add
