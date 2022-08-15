class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip_code, null: false
      t.integer :phone_number
      t.string :website
      t.integer :cost, null: false
      t.string :open, null: false
      t.string :close, null: false
      t.timestamps
    end
    add_index :businesses, :name, unique: true
  end
end
