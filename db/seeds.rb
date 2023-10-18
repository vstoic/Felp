# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bundle exec rails db:seed command (or created alongside the database with db:setup).
# heroku run rails db:seed
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'open-uri'

# User.destroy_all
# Review.destroy_all
# Business.destroy_all

# business1 = Business.create!(name: "ChongQing Lao Zao", address: "37-041 Prince St", city: "Flushing", state: "NY", zip_code: "11354", phone_number: "(917) 563-7171", website: "https://www.chongqinglaozao.com/", open: "12:00 PM", close: "11:00 PM", cost: "$$$", lat: 40.76068220846901, lng: -73.83302248127391)
# business1.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/chongching/hotpot-1.jpeg'), filename: 'CQLZ1.jpeg')
# business1.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/chongching/hotpot-2.jpeg'), filename: 'CQLZ2.jpeg')
# business1.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/chongching/hotpot-3.jpeg'), filename: 'CQLZ3.jpeg')
# business1.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/chongching/hotpot-4.jpeg'), filename: 'CQLZ4.jpeg')


# business2 = Business.create!(name: "The Uncommons", address: "230 Thompson St", city: "New York", state: "NY", zip_code: "10012", phone_number: "(646) 543-9215", website: "http://uncommonsnyc.com", open: "11:00 AM", close: "11:00 PM", cost: "$", lat: 40.7294115645435, lng: -73.99870513138013)
# business2.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/uncommons/uncommons1.jpeg'), filename: 'uncommons1.jpeg')
# business2.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/uncommons/uncommons2.jpeg'), filename: 'uncommons2.jpeg')
# business2.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/uncommons/uncommons3.jpeg'), filename: 'uncommons3.jpeg')
# business2.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/uncommons/uncommons4.jpeg'), filename: 'uncommons4.jpeg')

# business3 = Business.create!(name: "Rubirosa", address: "235 Mulberry St", city: "New York", state: "NY", zip_code: "10012", phone_number: "(212) 965-0500", website: "http://rubirosanyc.com", open: "11:00 AM", close: "10:00PM", cost: "$$", lat: 40.72274297522276, lng: -73.9961321626137)
# business3.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/ruby/ruby1.jpeg'), filename: 'rubys1.jpeg')
# business3.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/ruby/ruby2.jpg'), filename: 'rubys2.jpeg')
# business3.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/ruby/ruby3.jpg'), filename: 'rubys3.jpeg')
# business3.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/ruby/ruby4.jpeg'), filename: 'rubys4.jpeg')
# business3.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/ruby/ruby5.jpeg'), filename: 'rubys5.jpeg')

# business4 = Business.create!(name: "Southdown Coffee", address: "149 Glen St", city: "Glen Cove", state: "NY", zip_code: "11542", phone_number: "N/A", website: "https://www.southdowncoffee.com", open: "7:00 AM", close: "6:00PM", cost: "$", lat: 40.863299425458116, lng: -73.62471051484663)
# business4.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/southdown/sd1.jpeg'), filename: 'southdowns1.jpeg')
# business4.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/southdown/sd2.jpeg'), filename: 'southdowns2.jpeg')
# business4.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/southdown/sd3.jpeg'), filename: 'southdowns3.jpeg')
# business4.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/southdown/sd4.jpeg'), filename: 'southdowns4.jpeg')

# business5 = Business.create!(name: "Peter Luger Steak House", address: "178 Broadway", city: "Brooklyn", state: "NY", zip_code: "11211", phone_number: "(718) 387-7400", website: "https://www.peterluger.com/", open: "12:00 PM", close: "10:00 PM", cost: "$$$$", lat: 40.70999123693489, lng: -73.96254811716138)
# business5.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/peter+lug/peter1.jpg'), filename: 'peter1.jpg')
# business5.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/peter+lug/peter2.jpg'), filename: 'peter2.jpg')
# business5.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/peter+lug/peter3.jpg'), filename: 'peter3.jpg')
# business5.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/peter+lug/peter4.jpg'), filename: 'peter4.jpg')
# business5.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/peter+lug/peter5.jpg'), filename: 'peter5.jpg')


# business6 = Business.create!(name: "Di Fara Pizza", address: "1424 Avenue J", city: "Brooklyn", state: "NY", zip_code: "11230", phone_number: "(718) 258-1367", website: "https://difaranyc.com/", open: "12:00 PM", close: "10:00 PM", cost: "$$", lat: 40.62521396915623, lng: -73.96151207298398)
# business6.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/difara/difara1.jpeg'), filename: 'df1.jpeg')
# business6.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/difara/difara2.jpg'), filename: 'df2.jpg')
# business6.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/difara/difara3.jpg'), filename: 'df3.jpg')
# business6.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/difara/difara4.jpg'), filename: 'df4.jpg')

# business7 = Business.create!(name: "Joe's Shanghai", address: "9 Pell St", city: "New York", state: "NY", zip_code: "10013", phone_number: "(212) 233-8888", website: "https://www.joeshanghairestaurants.com/", open: "11:00 AM", close: "11:00 PM", cost: "$$", lat: 40.715698122512016, lng: -73.99665856778716)
# business7.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/joes+/joe1.jpg'), filename: 'joe1.jpg')
# business7.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/joes+/joe2.jpg'), filename: 'joe2.jpg')
# business7.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/joes+/joe3.jpg'), filename: 'joe3.jpg')
# business7.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/joes+/joe4.jpg'), filename: 'joe4.jpg')

# business8 = Business.create!(name: "Katz's Delicatessen", address: "205 E Houston St", city: "New York", state: "NY", zip_code: "10002", phone_number: "(212) 254-2246", website: "https://www.katzsdelicatessen.com/", open: "8:00 AM", close: "10:00 PM", cost: "$$", lat: 40.722319, lng: -73.987130)
# business8.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/katz/katz1.jpg'), filename: 'katz1.jpg')
# business8.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/katz/katz2.jpg'), filename: 'katz2.jpg')
# business8.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/katz/katz3.jpg'), filename: 'katz3.jpg')
# business8.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/katz/katz4.jpg'), filename: 'katz4.jpg')

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the `rails db:seed` command (or created alongside the database with `db:setup`).
# heroku run rails db:seed
# Examples:

Business.destroy_all

require 'open-uri'

def attach_photos(business, photo_urls)
  photo_urls.each do |url, filename|
    begin
      io = URI.open(url)
      business.photos.attach(io: io, filename: filename)
    rescue StandardError => e
      puts "Error attaching photo for #{business.name}: #{e.message}"
      puts "URL: #{url}"
  end
end


business1 = Business.create!(
  name: "ChongQing Lao Zao",
  address: "37-041 Prince St",
  city: "Flushing",
  state: "NY",
  zip_code: "11354",
  phone_number: "(917) 563-7171",
  website: "https://www.chongqinglaozao.com/",
  open: "12:00 PM",
  close: "11:00 PM",
  cost: "$$$",
  lat: 40.76068220846901,
  lng: -73.83302248127391
)
photo_urls_business1 = [
  ['https://felp-seeds.s3.amazonaws.com/chongching/hotpot-1.jpeg', 'CQLZ1.jpeg'],
  ['https://felp-seeds.s3.amazonaws.com/chongching/hotpot-2.jpeg', 'CQLZ2.jpeg'],
  ['https://felp-seeds.s3.amazonaws.com/chongching/hotpot-3.jpeg', 'CQLZ3.jpeg'],
  ['https://felp-seeds.s3.amazonaws.com/chongching/hotpot-4.jpeg', 'CQLZ4.jpeg']
]
attach_photos(business1, photo_urls_business1)

business2 = Business.create!(
  name: "The Uncommons",
  address: "230 Thompson St",
  city: "New York",
  state: "NY",
  zip_code: "10012",
  phone_number: "(646) 543-9215",
  website: "http://uncommonsnyc.com",
  open: "11:00 AM",
  close: "11:00 PM",
  cost: "$",
  lat: 40.7294115645435,
  lng: -73.99870513138013
)
photo_urls_business2 = [
  ['https://felp-seeds.s3.amazonaws.com/uncommons/uncommons1.jpeg', 'uncommons1.jpeg'],
  ['https://felp-seeds.s3.amazonaws.com/uncommons/uncommons2.jpeg', 'uncommons2.jpeg'],
  ['https://felp-seeds.s3.amazonaws.com/uncommons/uncommons3.jpeg', 'uncommons3.jpeg'],
  ['https://felp-seeds.s3.amazonaws.com/uncommons/uncommons4.jpeg', 'uncommons4.jpeg']
]
attach_photos(business2, photo_urls_business2)

business3 = Business.create!(
  name: "Rubirosa",
  address: "235 Mulberry St",
  city: "New York",
  state: "NY",
  zip_code: "10012",
  phone_number: "(212) 965-0500",
  website: "http://rubirosanyc.com",
  open: "11:00 AM",
  close: "10:00PM",
  cost: "$$",
  lat: 40.72274297522276,
  lng: -73.9961321626137
)
photo_urls_business3 = [
  ['https://felp-seeds.s3.amazonaws.com/ruby/ruby1.jpeg', 'rubys1.jpeg'],
  ['https://felp-seeds.s3.amazonaws.com/ruby/ruby2.jpg', 'rubys2.jpeg'],
  ['https://felp-seeds.s3.amazonaws.com/ruby/ruby3.jpg', 'rubys3.jpeg'],
  ['https://felp-seeds.s3.amazonaws.com/ruby/ruby4.jpeg', 'rubys4.jpeg'],
  ['https://felp-seeds.s3.amazonaws.com/ruby/ruby5.jpeg', 'rubys5.jpeg']
]
attach_photos(business3, photo_urls_business3)
  
business4 = Business.create!(
  name: "Southdown Coffee",
  address: "149 Glen St",
  city: "Glen Cove",
  state: "NY",
  zip_code: "11542",
  phone_number: "N/A",
  website: "https://www.southdowncoffee.com",
  open: "7:00 AM",
  close: "6:00PM",
  cost: "$",
  lat: 40.863299425458116,
  lng: -73.62471051484663
)
photo_urls_business4 = [
  ['https://felp-seeds.s3.amazonaws.com/southdown/sd1.jpeg', 'southdowns1.jpeg'],
  ['https://felp-seeds.s3.amazonaws.com/southdown/sd2.jpeg', 'southdowns2.jpeg'],
  ['https://felp-seeds.s3.amazonaws.com/southdown/sd3.jpeg', 'southdowns3.jpeg'],
  ['https://felp-seeds.s3.amazonaws.com/southdown/sd4.jpeg', 'southdowns4.jpeg']
]
attach_photos(business4, photo_urls_business4)

business5 = Business.create!(
  name: "Peter Luger Steak House",
  address: "178 Broadway",
  city: "Brooklyn",
  state: "NY",
  zip_code: "11211",
  phone_number: "(718) 387-7400",
  website: "https://www.peterluger.com/",
  open: "12:00 PM",
  close: "10:00 PM",
  cost: "$$$$",
  lat: 40.70999123693489,
  lng: -73.96254811716138
)
photo_urls_business5 = [
  ['https://felp-seeds.s3.amazonaws.com/peter+lug/peter1.jpg', 'peter1.jpg'],
  ['https://felp-seeds.s3.amazonaws.com/peter+lug/peter2.jpg', 'peter2.jpg'],
  ['https://felp-seeds.s3.amazonaws.com/peter+lug/peter3.jpg', 'peter3.jpg'],
  ['https://felp-seeds.s3.amazonaws.com/peter+lug/peter4.jpg', 'peter4.jpg'],
  ['https://felp-seeds.s3.amazonaws.com/peter+lug/peter5.jpg', 'peter5.jpg']
]
attach_photos(business5, photo_urls_business5)

business6 = Business.create!(
  name: "Di Fara Pizza",
  address: "1424 Avenue J",
  city: "Brooklyn",
  state: "NY",
  zip_code: "11230",
  phone_number: "(718) 258-1367",
  website: "https://difaranyc.com/",
  open: "12:00 PM",
  close: "10:00 PM",
  cost: "$$",
  lat: 40.62521396915623,
  lng: -73.96151207298398
)
photo_urls_business6 = [
  ['https://felp-seeds.s3.amazonaws.com/difara/difara1.jpeg', 'df1.jpeg'],
  ['https://felp-seeds.s3.amazonaws.com/difara/difara2.jpg', 'df2.jpg'],
  ['https://felp-seeds.s3.amazonaws.com/difara/difara3.jpg', 'df3.jpg'],
  ['https://felp-seeds.s3.amazonaws.com/difara/difara4.jpg', 'df4.jpg']
]
attach_photos(business6, photo_urls_business6)

business7 = Business.create!(
  name: "Joe's Shanghai",
  address: "9 Pell St",
  city: "New York",
  state: "NY",
  zip_code: "10013",
  phone_number: "(212) 233-8888",
  website: "https://www.joeshanghairestaurants.com/",
  open: "11:00 AM",
  close: "11:00 PM",
  cost: "$$",
  lat: 40.715698122512016,
  lng: -73.99665856778716
)
photo_urls_business7 = [
  ['https://felp-seeds.s3.amazonaws.com/joes+/joe1.jpg', 'joe1.jpg'],
  ['https://felp-seeds.s3.amazonaws.com/joes+/joe2.jpg', 'joe2.jpg'],
  ['https://felp-seeds.s3.amazonaws.com/joes+/joe3.jpg', 'joe3.jpg'],
  ['https://felp-seeds.s3.amazonaws.com/joes+/joe4.jpg', 'joe4.jpg']
]
attach_photos(business7, photo_urls_business7)

business8 = Business.create!(
  name: "Katz's Delicatessen",
  address: "205 E Houston St",
  city: "New York",
  state: "NY",
  zip_code: "10002",
  phone_number: "(212) 254-2246",
  website: "https://www.katzsdelicatessen.com/",
  open: "8:00 AM",
  close: "10:00 PM",
  cost: "$$",
  lat: 40.722319,
  lng: -73.987130
)
photo_urls_business8 = [
  ['https://felp-seeds.s3.amazonaws.com/katz/katz1.jpg', 'katz1.jpg'],
  ['https://felp-seeds.s3.amazonaws.com/katz/katz2.jpg', 'katz2.jpg'],
  ['https://felp-seeds.s3.amazonaws.com/katz/katz3.jpg', 'katz3.jpg'],
  ['https://felp-seeds.s3.amazonaws.com/katz/katz4.jpg', 'katz4.jpg']
]
attach_photos(business8, photo_urls_business8)