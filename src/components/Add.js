import {useState} from 'react'

const Add = (props) => {
  //--- State:
  let emptyBook = {title: '', author_name: '', publisher: '', publication_date: '', genre: '', cover_art: '', page_count: '', language: '', isbn: '', rating: '', price: ''}
  const [book, setBook] = useState(emptyBook)


  //--- Functions:
  //registers a change in all input fields
  const handleChange = (event) => {
    setBook({...book, [event.target.name]: event.target.value})
  }

  //submit for adding a new book
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(book)
    setBook(emptyBook)
  }


  return(
    <>
    <button onClick={props.addFormToggle} className="search-btn">Add</button>
    {props.showAddForm ?
      <>
        <div className="modal-wrapper" onClick={props.addFormToggle}>
          <div className="add-book-modal" onClick={e => e.stopPropagation()}>
            <div className='add-book-x-btn-div'>
              <button className='add-book-x-btn' onClick={props.addFormToggle}>
              x
              </button>
            </div>
            <h3>Add a New Book</h3>
            <div className="Add-form-div">
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

                <label htmlFor='isbn'>ISBN: </label>
                <input type='number' name='isbn' value={book.isbn} onChange={handleChange}/>
                <br/>
                <br/>

                <label htmlFor='rating'>Rating: </label>
                <input type='number' name='rating' value={book.rating} onChange={handleChange}/>

                <br/>
                <br/>

                <label htmlFor='price'>Price: </label>
                <input type='text' name='price' value={book.price} onChange={handleChange}/>
                <br/>
                <br/>

                <div className='add-submit-btn-div'>
                  <input type='submit'/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    : null}

    </>
  )
}

export default Add





//==============================================================================//
//                                Grave Yard
//==============================================================================//

// <fieldset className="rate">
// <label htmlFor='rating1' title="5 stars">Rating: </label>
// <input type='radio' id="rating2" name='rating' value={book.rating} onChange={handleChange}/>
// <label htmlFor='rating1' title="5 stars"></label>
// <input type='radio' id="rating2" name='rating' value={book.rating} onChange={handleChange}/>
// </fieldset>

// //https://dmitripavlutin.com/react-useref-guide/
// document.addEventListener(
//   "click",
//   function(event) {
//     if (!event.target.matches(".add-book-modal")) {
//       closeModal()
//     }
//   }, false
// )
//
//
// const closeModal = () => {
//   document.querySelector(".add-book-modal")
// }
