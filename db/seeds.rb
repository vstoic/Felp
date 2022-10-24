# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bundle exec rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
Business.destroy_all

business1 = Business.create!(name: "ChongQing Lao Zao", address: "37-041 Prince St", city: "Flushing", state: "NY", zip_code: "11354", phone_number: "(917) 563-7171", website: "https://www.chongqinglaozao.com/", open: "12:00PM", close: "11:00PM", cost: "$$$")
business2 = Business.create!(name: "ChongQing Lao Zao1", address: "37-042 Prince St", city: "Flushing", state: "NY", zip_code: "11354", phone_number: "(917) 563-7171", website: "https://www.chongqinglaozao.com/", open: "12:00PM", close: "11:00PM", cost: "$$$")
business3 = Business.create!(name: "ChongQing Lao Zao2", address: "37-043 Prince St", city: "Flushing", state: "NY", zip_code: "11354", phone_number: "(917) 563-7171", website: "https://www.chongqinglaozao.com/", open: "12:00PM", close: "11:00PM", cost: "$$$")
business4 = Business.create!(name: "ChongQing Lao Zao3", address: "37-044 Prince St", city: "Flushing", state: "NY", zip_code: "11354", phone_number: "(917) 563-7171", website: "https://www.chongqinglaozao.com/", open: "12:00PM", close: "11:00PM", cost: "$$$")
business5 = Business.create!(name: "ChongQing Lao Zao4", address: "37-045 Prince St", city: "Flushing", state: "NY", zip_code: "11354", phone_number: "(917) 563-7171", website: "https://www.chongqinglaozao.com/", open: "12:00PM", close: "11:00PM", cost: "$$$")
business6 = Business.create!(name: "ChongQing Lao Zao5", address: "37-046 Prince St", city: "Flushing", state: "NY", zip_code: "11354", phone_number: "(917) 563-7171", website: "https://www.chongqinglaozao.com/", open: "12:00PM", close: "11:00PM", cost: "$$$")

