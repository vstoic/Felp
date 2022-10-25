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

business1 = Business.create!(name: "ChongQing Lao Zao", address: "37-041 Prince St", city: "Flushing", state: "NY", zip_code: "11354", phone_number: "(917) 563-7171", website: "https://www.chongqinglaozao.com/", open: "12:00PM", close: "11:00PM", cost: "$$$")
business2 = Business.create!(name: "ChongQing Lao Zao1", address: "37-042 Prince St", city: "Flushing", state: "NY", zip_code: "11354", phone_number: "(917) 563-7171", website: "https://www.chongqinglaozao.com/", open: "12:00PM", close: "11:00PM", cost: "$$$")
business3 = Business.create!(name: "ChongQing Lao Zao2", address: "37-043 Prince St", city: "Flushing", state: "NY", zip_code: "11354", phone_number: "(917) 563-7171", website: "https://www.chongqinglaozao.com/", open: "12:00PM", close: "11:00PM", cost: "$$$")
business4 = Business.create!(name: "ChongQing Lao Zao3", address: "37-044 Prince St", city: "Flushing", state: "NY", zip_code: "11354", phone_number: "(917) 563-7171", website: "https://www.chongqinglaozao.com/", open: "12:00PM", close: "11:00PM", cost: "$$$")
business5 = Business.create!(name: "ChongQing Lao Zao4", address: "37-045 Prince St", city: "Flushing", state: "NY", zip_code: "11354", phone_number: "(917) 563-7171", website: "https://www.chongqinglaozao.com/", open: "12:00PM", close: "11:00PM", cost: "$$$")
business6 = Business.create!(name: "ChongQing Lao Zao5", address: "37-046 Prince St", city: "Flushing", state: "NY", zip_code: "11354", phone_number: "(917) 563-7171", website: "https://www.chongqinglaozao.com/", open: "12:00PM", close: "11:00PM", cost: "$$$")

business1.photos.attach(io: open('https://felp--dev.s3.us-east-1.amazonaws.com/hotpot-1.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLWVhc3QtMSJHMEUCICvJGqK2Jn6NXUq%2BjcK4LkZ6LuSysRID1f7U2AFMe9o3AiEAmTvDBCbYmmNRo5vcYU3Fetp9qQMVhfDYjEKwifdnXhEq7QII3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw5OTQzNjI4OTcwNTUiDPxuZUYdgTrmZjF0WSrBAsALG6xCj8KPEAFbFN2Yiht5yxudvo0khYejmMdzoEzmWv%2BD5iEk%2FoIWpdg0McRtsSlHY%2F0QxfBWCH8HMBXrq8oEhCUu9yAZYZWOoze8qTlahlMfL3J6YGHVKin8otOKXn79jxvyKkhT65ITSrEbHTbKouJV1IaZy7JKIM5oHLy7jX1LVAiIKZ7A58DE5tYu4Cf1toPRLu7ME4YhrV8YCl6Xijo0QX2KQgYYIsZQ5XWqyXrVpETUmYkYmnYWivkm7%2BtG1lgXJ0VnEzw1lO8eHfVJqoOX8png9Fyg%2FiTp%2FEEXRYSZxoC%2BtK8xOPNYCpItR9OOIchVIneTTyi0EsQh9GV5lsbjQAikFGlIj%2FdvNqJ99E5LBYYpLcgu5DicbRSyfU9FfDcqLb8gdhf%2BK7hm6YEicokdl7yOTcpHQsOwwzKVcDD64OCaBjqzAnKzapV74zlJh61JFyNR1cdhZPw0YFTZITa1EiIpI9INv9iC9GczdwnnCY35QGSxzMXu5%2FiQaz6B%2FUs%2BhVLtORJwldP1gAukJMrY8e5m0tWePLvfOy832Szx9EVWbOCpgM6BMMdN5HaiFbEMG%2FWsgIMqMdyyCvp9LzZAPlf9aHIhIkjp9R2wlqdZfmtGFpEJgpX1s%2FcWqUlV1sfa56CUCo60qR9te9oPPeCT6J7UtdbehCXnchV63louYBJ4htVJZTJdeykeCczeQt3%2FRqcfJal0UwSmrEllvSBznibslaxUktksX%2BDB%2F7vZRivOGRKTCfP6GJO6rb3hbxYDEoyDgOkwxW2QmCmWAEaj8p5GUuoLovgC1UuV0cEuArbmdIe5vB%2Bmkl%2B8NVf7maGdzyPWw%2F9ZKBU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221025T195959Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA6PBFFWKPWMGNWJ35%2F20221025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e1b8f43cb68a42cbc9151f0aeda029dfd09dce430986e7fa4ede280b8affd5ed'), filename: 'hotpot-1.jpeg')
