import {useState} from 'react'

const EditReview = (props) => {
  //--- State:
  const [review, setReview] = useState({...props.review})


  //--- Functions:
  //registers a change in all input fields
  const handleChange = (event) => {
    setReview({...review, [event.target.name]: event.target.value})
  }

  //Sumbit for editing a review
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdateReview(review)
  }

  return (
    <details>
      <summary>Edit Review</summary>
      <div className="edit-review-form-div">
        <form onSubmit={handleSubmit}>
          <label htmlFor='review'>Review: </label><br/>
          <textarea name='review' value={review.review} onChange={handleChange}></textarea>
          <br/>
          <br/>
          <div className='editrev-submit-btn-div'>
            <input type='submit'/>
          </div>
        </form>
      </div>
    </details>
  )
}

export default EditReview
