class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address
      t.string :city
      t.string :state
      t.string :zip_code
      t.string :phone_number
      t.string :website
      t.integer :cost
      t.string :open
      t.string :close
      t.timestamps
    end
  end
end
