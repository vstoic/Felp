import React, { useState, useEffect } from 'react';
import {AiFillStar } from "react-icons/ai";

export default function Star(props) {
    const [rating, setRating] = useState(null);

    useEffect(() => {
        getAverageRating();
        // distributeStars();
    });

    const getAverageRating = () => {
        let totalStars = 0;
        props.reviews.forEach(review => {totalStars += review.rating});
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
                    <div className='each-star'>
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