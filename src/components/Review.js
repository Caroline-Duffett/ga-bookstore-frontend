import {useState} from 'react'

const Review = (props, review) => {
  const [reviewData, setReviewData] = useState({...props.review})

  return (
    <>
      <div className="review-card" key={reviewData.id}>
        <h5>User: {reviewData.user}</h5>
        <h5>{reviewData.review}</h5>
        <h5>review.id: {reviewData.id}</h5>
      </div>
    </>
  )

}

export default Review
