import {useState} from 'react'

const Review = (props, review) => {
  const [reviewData, setReviewData] = useState({...props.review})
  //console.log(reviewData);

  return (

    <>
      <div className="review-card" key={reviewData.id}>
        <h5>User: {reviewData.user}</h5>
        <h5>Review: {reviewData.review}</h5>
        <h5>review.id: {reviewData.id}</h5>
        {console.log(reviewData)}
      </div>
    </>
  )

}

export default Review
//{console.log(reviewData)}
