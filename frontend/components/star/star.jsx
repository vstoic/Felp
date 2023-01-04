import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { fetchReviews } from "../../Actions/ReviewActions";

function Star(props) {
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState(null);
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


  //try 1
  useEffect(() => {
    const fetchedReviews = fetchReviews(props.businessId);
    setReview(fetchedReviews);
  }, []);

  //try 2
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await dispatch(fetchReviews(props.businessId));
  //     setReview(data);
  //   };
  //   fetchData();
  //   console.log(review)
    // console.log(props);
    // getAverageRating();
  // }),
  //   [];

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
          const style = {
            backgroundColor: ratingValue <= rating ? "#d32322" : "#e4e5e9",
            color: "#ffffff",
            height: "1.2vw",
            width: "1.2vw",
            borderRadius: "6px",
            marginLeft: "2.5px",
            padding: "4px",
          };
          return (
            <div className="each-star" key={ratingValue}>
              <AiFillStar
                className="star"
                style={style}
                // backgroundColor="#e4e5e9"
              />
            </div>
          );
        })}
    </div>
  );
}
export default Star;
