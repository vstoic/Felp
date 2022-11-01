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
require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
