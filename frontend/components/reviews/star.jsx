import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function Star(props) {
    
    // console.log(props.reviews)
    
    const handleStars = () => {
        let totalStars = 0;
        props.reviews.forEach(review => {
            totalStars += review.rating;
        })
        let averageStars = Math.ceil(totalStars / props.reviews.length);
        switch (averageStars) {
            case averageStars >= 4 && averageStars <= 5:
                return distributeStars(5);
            case averageStars >= 3 && averageStars < 4:
                return distributeStars(4);
            case averageStars >= 2 && averageStars < 3:
                return distributeStars(3);
            case averageStars >= 1 && averageStars < 2:
                return distributeStars(2);
            case averageStars >= 0 && averageStars < 1:
                return distributeStars(1);
            default:
                return distributeStars(0);
        }
    }
    const distributeStars = (avgRating) => {
        return (
            <div className="stars">
                <div>
                    <AiFillStar />
                </div>
                {/* {Array(avgRating).fill().map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                            <AiFillStar
                                className="stars"
                                color={ratingValue <= (avgRating) ? "#ffc107" : "#e4e5e9"}
                                size={25} />
                    )
                })} */}
            </div>
        )
    }

    return (
    <div className="star">
        {handleStars()}
    </div>
   )

}
