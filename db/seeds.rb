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