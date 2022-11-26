class RemoveIndexFromReviews < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :businesses_id
    add_column :reviews, :business_id, :integer, null: false
  end
end
