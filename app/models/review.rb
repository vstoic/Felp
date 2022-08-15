# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  review_body   :string           not null
#  rating        :integer          not null
#  user_id       :integer          not null
#  businesses_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Review < ApplicationRecord
    # validates :review_body, :rating, presence: true 

    # belongs_to :reviewer,
    # foreign_key: :user_id, 
    # class_name: :User

    # has_one :buisness,
    # class_name: :Business
end
