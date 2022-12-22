import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {AiFillStar } from "react-icons/ai";
import { fetchReviews } from '../../actions/review_actions';

export default function Star(props) {
    const [rating, setRating] = useState(null);
    // const [reviews, setReview] = useState(props.reviews)

    const dispatch = useDispatch();

    useEffect(() => {
        useDispatch(fetchReviews(props.business.id));
        console.log(props)
        // getAverageRating();
    });

    const getAverageRating = () => {
        let totalStars = 0;
        reviews.forEach(review => {totalStars += review.rating});
        let averageStars = Math.ceil(totalStars / props.reviews.length);
        setRating(averageStars);
    }

    // const distributeStars = () => {
    //     Array(5).fill().map((_, i) => {
    //         const ratingValue = i + 1;
    //         // console.log(rating)
    //         return (
    //             <div>
    //                 <p>hi</p>
    //                 {/* <AiFillStar
    //                     className='star'
    //                     color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
    //                     size={25} /> */}
    //             </div>
    //         )
    //     })
    // }

    return (
        <div className='star-rating-container'>
            {Array(5).fill().map((_, i) => {
                const ratingValue = i + 1;
                return (
                    <div className='each-star' key={ratingValue}>
                        <AiFillStar
                                className='star'
                                color={ratingValue <= rating ? '#d32322' : '#e4e5e9'}
                                size={25} />
                    </div>
                )
            })}
        </div>
   );
};


