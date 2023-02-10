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
Business.destroy_all

business1 = Business.create!(name: "ChongQing Lao Zao", address: "37-041 Prince St", city: "Flushing", state: "NY", zip_code: "11354", phone_number: "(917) 563-7171", website: "https://www.chongqinglaozao.com/", open: "12:00 PM", close: "11:00 PM", cost: "$$$", lat: 40.76068220846901, lng: -73.83302248127391)
business1.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/chongching/hotpot-1.jpeg'), filename: 'CQLZ1.jpeg')
business1.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/chongching/hotpot-2.jpeg'), filename: 'CQLZ2.jpeg')
business1.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/chongching/hotpot-3.jpeg'), filename: 'CQLZ3.jpeg')


business2 = Business.create!(name: "The Uncommons", address: "230 Thompson St", city: "New York", state: "NY", zip_code: "10012", phone_number: "(646) 543-9215", website: "http://uncommonsnyc.com", open: "11:00 AM", close: "11:00 PM", cost: "$", lat: 40.7294115645435, lng: -73.99870513138013)
business2.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/uncommons/uncommons1.jpeg'), filename: 'uncommons1.jpeg')
business2.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/uncommons/uncommons2.jpeg'), filename: 'uncommons2.jpeg')
business2.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/uncommons/uncommons3.jpeg'), filename: 'uncommons3.jpeg')


business3 = Business.create!(name: "Rubirosa", address: "235 Mulberry St", city: "New York", state: "NY", zip_code: "10012", phone_number: "(212) 965-0500", website: "http://rubirosanyc.com", open: "11:00 AM", close: "10:00PM", cost: "$$", lat: 40.72274297522276, lng: -73.9961321626137)
business3.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/rubys.jpeg'), filename: 'rubys1.jpeg')
business3.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/rubys.jpeg'), filename: 'rubys1.jpeg')
business3.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/rubys.jpeg'), filename: 'rubys1.jpeg')

business4 = Business.create!(name: "Southdown Coffee", address: "149 Glen St", city: "Glen Cove", state: "NY", zip_code: "11542", phone_number: "N/A", website: "https://www.southdowncoffee.com", open: "7:00 AM", close: "6:00PM", cost: "$", lat: 40.863299425458116, lng: -73.62471051484663)
business4.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/sd+c.jpeg'), filename: 'southdowns1.jpeg')
business4.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/sd+c.jpeg'), filename: 'southdowns1.jpeg')
business4.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/sd+c.jpeg'), filename: 'southdowns1.jpeg')

business5 = Business.create!(name: "Peter Luger Steak House", address: "178 Broadway", city: "Brooklyn", state: "NY", zip_code: "11211", phone_number: "(718) 387-7400", website: "https://www.peterluger.com/", open: "12:00 PM", close: "10:00 PM", cost: "$$$$", lat: 40.70999123693489, lng: -73.96254811716138)

business6 = Business.create!(name: "Di Fara Pizza", address: "1424 Avenue J", city: "Brooklyn", state: "NY", zip_code: "11230", phone_number: "(718) 258-1367", website: "https://difaranyc.com/", open: "12:00 PM", close: "10:00 PM", cost: "$$", lat: 40.62521396915623, lng: -73.96151207298398)

business7 = Business.create!(name: "Joe's Shanghai", address: "9 Pell St", city: "New York", state: "NY", zip_code: "10013", phone_number: "(212) 233-8888", website: "https://www.joeshanghairestaurants.com/", open: "11:00 AM", close: "11:00 PM", cost: "$$", lat: 40.715698122512016, lng: -73.99665856778716)

business8 = Business.create!(name: "Ippudo", address: "65 4th Ave", city: "New York", state: "NY", zip_code: "10003", phone_number: "(212) 388-0088", website: "https://ippudo-us.com/", open: "12:00 PM", close: "11:00 PM", cost: "$$", lat: 40.73115681907074, lng: -73.99002759810908)