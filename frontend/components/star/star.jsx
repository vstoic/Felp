import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";


function Star(props) {
  const [rating, setRating] = useState(null);

  // const dispatch = useDispatch();

  useEffect(() => {
    const fetchReviews = (businessId) =>
      $.ajax({
        method: "GET",
        url: `/api/businesses/${businessId}/reviews`,
      });

    fetchReviews(props.businessId).then((reviews) => getAverageRating(reviews));
  }),
    [];

  const getAverageRating = (reviews) => {
    let totalStars = 0;
    Object.values(reviews).forEach((review) => {
      totalStars += review.rating;
    });
    let averageStars = Math.ceil(totalStars / Object.keys(reviews).length);
    setRating(averageStars);
  };

  return (
    <div className="star-rating-container">
      {Array(5)
        .fill()
        .map((_, i) => {
          const ratingValue = i + 1;
          return (
            <div className="each-star" key={ratingValue}>
              <AiFillStar
                className="star"
                color={ratingValue <= rating ? "#d32322" : "#e4e5e9"}
                size={24}
              />
            </div>
          );
        })}
    </div>
  );
}
export default Star;
