# json.set! @business.id do 
#     json.extract! @business, :id, :name, :address, :city, :zip_code, :phone_number, :website, :open, :close, :cost
# end

# json.reviews @business.reviews.map {|review| review}

json.partial! 'business', business: @business

# line 5 has errors but need to view reviews