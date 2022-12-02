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
#  phone_number :string
#  website      :string
#  cost         :string           not null
#  open         :string           not null
#  close        :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  lat          :decimal(, )
#  lng          :decimal(, )
#
class Business < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :address, :city, :state, :zip_code, :cost, :open, :close, presence: true

    has_many :reviews,
    foreign_key: :business_id

    has_many_attached :photos
    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng > ?", bounds[:southWest][:lng])
            .where("lng < ?", bounds[:northEast][:lng])
    end
end
