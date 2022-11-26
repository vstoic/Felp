class AddIndexToReviews < ActiveRecord::Migration[5.2]
  def change
    add_index :reviews, :business_id
  end
end
