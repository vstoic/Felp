@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :rating, :review_body, :user_id, :business_id, :created_at
        json.reviwer_username review.reviewer.username
    end
end