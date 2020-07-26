# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all
Comment.destroy_all

@admin = User.create!(username: 'jackksouth', email: 'admin@gmail.com', password:'123456', image_url:'')

post = Post.create(image_url:'', captions: '', user_id: @admin.id)

Comment.create(post_id: post.id, user_id: @admin.id, content: '')