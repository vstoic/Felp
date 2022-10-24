class MakeChangesToBusinesses < ActiveRecord::Migration[5.2]
  def change
    change_table :businesses do |t|
      t.change :phone_number, :string
      t.change :cost, :string
    end
  end
end
