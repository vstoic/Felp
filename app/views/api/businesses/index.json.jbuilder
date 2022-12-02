@businesses.each do |business|
    json.set! business.id do
        # json.extract! business, :id, :name, :address, :city, :zip_code, :phone_number, :website, :open, :close, :cost
        json.partial! 'business', business: business
        json.reviews business.reviews
    end
end


#json.set! is setting a new key and setting it to a value
#json.extract! is extracting the values from the business object and setting them to the keys
#partial! is rendering the business partial and setting it to the key business