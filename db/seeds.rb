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



@admin = User.create!(
    first_name: 'Jack',
    last_name: 'South',
    gender: 'male',
    username: 'jacksouth', 
    email: 'admin@gmail.com', 
    password:'123456')

@post = Post.create(
    post_text:'smite post', 
    user_id: @admin.id)

Comment.create(post_id: @post.id, user_id: @admin.id, comment_text: 'comment test')