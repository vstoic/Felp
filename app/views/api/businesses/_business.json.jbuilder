json.extract! business, :id, :name, :address, :city, :zip_code, :phone_number, :website, :open, :close, :cost, :lat, :lng
json.photo_urls business.photos.map { |photo| url_for(photo) }
json.reviews business.reviews