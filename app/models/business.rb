# == Schema Information
#
# Table name: businesses
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  address      :string           not null
#  city         :string           not null
#  state        :string           not null
#  zip_code     :string           not null
#  phone_number :integer
#  website      :string
#  cost         :integer          not null
#  open         :string           not null
#  close        :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Business < ApplicationRecord
    # validates :name, presence: true, uniqueness: true
    # validates :address, :city, :state, :zip_code, 
    # validates :phone_number, uniqueness:true
end
