# json.set! @business.id do 
#     json.extract! @business, :id, :name, :address, :city, :zip_code, :phone_number, :website, :open, :close, :cost
# end

json.business do
    json.partial! 'business', business: @business
end