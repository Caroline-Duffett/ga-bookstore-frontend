import {useState} from 'react'
import axios from 'axios'
import AddReview from './AddReview'
import EditReview from './EditReview'

const ReviewsModal = (props) => {
  //--- State:
  const [reviews, setReviews] = useState([])
  const [bookData, setBookData] = useState({...props.bookData})


  //--- Functions:
  //Create Route for reviews (works only for reviews table)
  const handleReviewCreate = (addReview) => {
   //axios.post('https://ga-bookstore-backend.herokuapp.com/api/reviews', addReview)
   axios.post("http://localhost:8000/api/books/reviews", addReview)
   .then((response) => {
     setReviews([...reviews, response.data])
   })
  }


  //Update Route for reviews
  const handleUpdateReview = (editReview) => {
    //axios.put('http://localhost:8000/api/books/reviews/' + editReview.id, editReview)
    axios.put('http://localhost:8000/api/books/reviews/' + editReview.id, editReview)
    .then((response) => {
      setReviews(reviews.map((review) => {
        return review.id !== response.data.id ? review : response.data
      }))
    })
  }

  //Delete Route for reviews
  const handleReviewDelete = (deletedReview) => {
    axios.delete('http://localhost:8000/api/books/reviews/' + deletedReview.id)
    .then((response) => {
      setReviews(reviews.filter(review => review.id !== deletedReview.id))
    })
  }



  return (
    <div className="all-reviews-div">
      {props.showReviews ?
      <div className="reviews-modal-wrapper">
        <div className="reviews-modal">
          <AddReview handleReviewCreate={handleReviewCreate} bookData={bookData}/>
          <h3>Reviews</h3>
          <div className='all-reviews-flexbox'>
          {reviews.map((review) => {
            if (review.book_id === bookData.id) {
              return (
                <>
                  <div className="review-card" key={review.id}>
                     <h5>User: {review.user_id}</h5>
                     <h5>Review: </h5>
                     <p>{review.review}</p>
                     <EditReview handleUpdateReview={handleUpdateReview} review={review}/>
                     <button onClick={() => {handleReviewDelete(review)}}>
                     x
                     </button>
                  </div>
                </>
              )
            }
          })}
          </div>
        </div>
      </div>
      : null}
    </div>
  )

}

export default ReviewsModal
