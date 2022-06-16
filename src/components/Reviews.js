import {useState} from 'react'

const Reviews = (props) => {

  return (
    <>
      <h1>Reviews</h1>
      <div className='reviews-flexbox'>
        {props.reviews.map((review) => {
          return(
            <div className="review">
              {review.review}
            </div>
          )
        })}
      </div>
    </>
)}

export default Reviews
