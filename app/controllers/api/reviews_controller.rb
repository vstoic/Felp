# class Api::ReviewsController < ApplicationController
#   before_action :require_logged_in, only [:create, :update, :destroy]

#   def index
#     @reviews = Review.all.where(business_id: params[:business_id])
#   end

#   def create
#     @review = current_user.reviews.new(review_params)

#     if @review.save
#       render :show
#     else
#       render json: @review, status: :unprocessable_entity
#     end
#   end

#   def show 
#     @review = Review.find(review_params)
#     render :show
#   end

#   def update
#     @review = Review.find(params[:id])
#     if @review.update(review_params)
#         render :show
#     else
#         render json: ["edit not complete"], status: 422
#     end
#   end

#   def destroy
#     @review = review.find_by(id: params[:id])
#     if @review && @review.destroy
#     end

#   end

#   private

#   def review_params
#     params.require(:review).permit(:review_body, :rating, :user_id, :business_id)
#   end
# end