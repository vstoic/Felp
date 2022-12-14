class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :review_body, null: false
      t.integer :rating, null: false
      t.integer :user_id, null: false 
      t.integer :businesses_id, null: false
      t.timestamps
    end
    add_index :reviews, :user_id
    add_index :reviews, :businesses_id
  end
end
