# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bundle exec rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'open-uri'

# User.destroy_all
Business.destroy_all

business1 = Business.create!(name: "ChongQing Lao Zao", address: "37-041 Prince St", city: "Flushing", state: "NY", zip_code: "11354", phone_number: "(917) 563-7171", website: "https://www.chongqinglaozao.com/", open: "12:00 PM", close: "11:00 PM", cost: "$$$")
business1.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/hotpot-1.jpeg'), filename: 'CQLZ1.jpeg')

business2 = Business.create!(name: "The Uncommons", address: "230 Thompson St", city: "New York", state: "NY", zip_code: "10012", phone_number: "(646) 543-9215", website: "http://uncommonsnyc.com", open: "11:00 AM", close: "11:00 PM", cost: "$")
business2.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/uncommons1.jpeg'), filename: 'uncommons1.jpeg')

business3 = Business.create!(name: "Rubirosa", address: "235 Mulberry St", city: "New York", state: "NY", zip_code: "10012", phone_number: "(212) 965-0500", website: "http://rubirosanyc.com", open: "11:00 AM", close: "10:00PM", cost: "$$")
business3.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/rubys.jpeg'), filename: 'rubys1.jpeg')

business4 = Business.create!(name: "Southdown Coffee", address: "149 Glen St", city: "Glen Cove", state: "NY", zip_code: "11542", phone_number: "N/A", website: "https://www.southdowncoffee.com", open: "7:00 AM", close: "6:00PM", cost: "$")
business4.photos.attach(io: open('https://felp-seeds.s3.amazonaws.com/sd+c.jpeg'), filename: 'southdowns1.jpeg')

