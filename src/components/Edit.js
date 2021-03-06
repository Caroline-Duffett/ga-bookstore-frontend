import {useState} from 'react'

const Edit = (props) => {
  //--- State:
  const [book, setBook] = useState({...props.bookData})

  //--- Functions:
  //registers a change in all input fields
  const handleChange = (event) => {
    setBook({...book, [event.target.name]: event.target.value})
  }

  //submit for editing a book
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(book)
  }

  return (
    <>
    <div className="edit-input">
        <h3>Edit Book</h3>
        <form  onSubmit={handleSubmit}>
          <label htmlFor='title'>Title: </label>
          <input type='text' name='title' defaultValue={book.title} onChange={handleChange}/>
          <br/>
          <br/>

          <label htmlFor='author_name'>Author: </label>
          <input type='text' name='author_name' defaultValue={book.author_name} onChange={handleChange}/>
          <br/>
          <br/>

          <label htmlFor='publisher'>Publisher: </label>
          <input type='text' name='publisher' defaultValue={book.publisher} onChange={handleChange}/>
          <br/>
          <br/>

          <label htmlFor='publication_date'>Publication date: </label>
          <input type='date' name='publication_date' defaultValue={book.team} onChange={handleChange} />
          <br/>
          <br/>

          <label htmlFor='genre'>Genre: </label>
          <input type='text' name='genre' defaultValue={book.genre} onChange={handleChange}/>
          <br/>
          <br/>

          <label htmlFor='cover_art'>Cover image: </label>
          <input type='text' name='cover_art' defaultValue={book.cover_art} onChange={handleChange}/>
          <br/>
          <br/>

          <label htmlFor='page_count'>Page count: </label>
          <input type='number' name='page_count' defaultValue={book.page_count} onChange={handleChange}/>
          <br/>
          <br/>

          <label htmlFor='language'>Language: </label>
          <input type='text' name='language' defaultValue={book.language} onChange={handleChange}/>
          <br/>
          <br/>

          <label htmlFor='isbn'>ISBN: </label>
          <input type='number' name='isbn' defaultValue={book.isbn} onChange={handleChange}/>
          <br/>
          <br/>

          <label htmlFor='rating'>Rating: </label>
          <input type='number' name='rating' defaultValue={book.rating} onChange={handleChange}/>
          <br/>
          <br/>

          <label htmlFor='price'>Price: </label>
          <input type='text' name='price' defaultValue={book.price} onChange={handleChange}/>
          <br/>
          <br/>

          <input type='submit'/>
        </form>
        </div>
        <div className="back-edit-info">
        <button className="back-edit-info" onClick={props.editFormToggle}>&larr; Back</button>
        </div>
    </>
  )
}

export default Edit
