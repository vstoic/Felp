export const fetchReview = (businessId, reviewId) => (
    $.ajax({
        method: 'GET',
        url: `/api/businesses/${businessId}/reviews/${reviewId}`
    })
);
export const fetchReviews = (businessId) => (
    $.ajax({
        method: 'GET',
        url: `/api/businesses/${businessId}/reviews`
    })
);
export const createReview = (review, businessId) => (
    $.ajax({
        method: 'POST',
        url: `/api/businesses/${businessId}/reviews`,
        data: { review }
    })
);
export const editReview = (reviewId, businessId) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/businesses/${businessId}/reviews/${reviewId}`,
        data: { review }
    })
);
export const deleteReview = reviewId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/reviews/${reviewId}`
    })
);

