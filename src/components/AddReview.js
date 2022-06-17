import {useState} from 'react'

const AddReview = (props) => {
  //State:
  let emptyReview = {review: '', user_id: 1, book_id: 7}
  const [review, setReview] = useState(emptyReview)
  const [showAddReview, setShowAddReview] = useState(false)


  //Functions:
  const handleChange = (event) => {
    setReview({...review, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleReviewCreate(review)
    setReview(emptyReview)
  }

  //toggles the add form
  const addReviewToggle = () => {
    if (showAddReview === false) {
      setShowAddReview(true)
    } else {
      setShowAddReview(false)
    }
  }


  return (
    <div className="leave-review-div">
      <button onClick={addReviewToggle}>Add Review</button>
      {showAddReview ?
        <>
          <h3>Leave a Review</h3>
          <div className="review-form-div">
            <form onSubmit={handleSubmit}>
              <label htmlFor='review'>Review: </label><br/>
              <textarea name='review' value={review.review} onChange={handleChange}></textarea>
              <br/>
              <br/>
              <div className='lr-submit-btn-div'>
                <input type='submit'/>
              </div>
            </form>
          </div>
        </>
      :null}
    </div>
  )
}

export default AddReview
