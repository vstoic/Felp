
@businesses.each do |business|
json.set! business.id do
    # json.extract! business, :id, :name, :address, :city, :zip_code, :phone_number, :website, :open, :close, :cost
    json.partial! 'business', business: business
    json.photo_urls business.photos.map { |photo| url_for(photo) }
    end
end

# json.businesses do
#     @businesses.each do |business|
#         json.set! business.id do
#             json.partial! 'business', business: business
#         end
#     end
# end