import {useState} from 'react'
import axios from 'axios'

const AddReview = (props) => {
  //--- State:
  const [bookData, setBookData] = useState({...props.bookData})

  const [loggedInUser, setLoggedInUser] = useState(props.loggedInUser)
  let emptyReview = {review: '', user_id: loggedInUser.id, username: loggedInUser.username, book_id: bookData.id} //user is hardcoded for testing
  const [review, setReview] = useState(emptyReview)

  //--- Functions:
  //registers a change in all input fields
  const handleChange = (event) => {
    setReview({...review, [event.target.name]: event.target.value})
  }

  //to submit add review form
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleReviewCreate(review)
    setReview(emptyReview)
    props.addReviewToggle()
  }

  return (
    <div className="leave-review-div">
      {props.showAddReview ?
        <>
          {props.loggedInUser.id ?
            <>
              <h3>Leave a Review</h3>
              <div className="review-form-div">
                <form onSubmit={handleSubmit}>
                  <label htmlFor='review'>Review: </label>
                  <br/>
                  <textarea
                  name='review'
                  value={review.review}
                  onChange={handleChange}
                  required
                  >
                  </textarea>
                  <br/>
                  <br/>
                  <div className='lr-submit-btn-div'>
                    <input type='submit'/>
                  </div>
                </form>
              </div>
            </>
          :
            <>
              <h2 className="sign-in-message">Please Sign in or create an account to leave a review.</h2>
            </>
          }
        </>
      :null}
    </div>
  )
}

export default AddReview







//==============================================================================//
//                                Grave Yard
//==============================================================================//
// console.log("review.book_id: ");
// console.log(review.book_id);
//props.handleChosenBook(review.book_id)


//  // const handleChosenBook = (chosenBook) => {
  //   axios.get("http://localhost:8000/api/books/" + chosenBook)
  //   .then(response => setBookData(response.data),
  //      err=> console.log(err)
  //    )
  //    .catch(error=> console.error(error))
  // }
