import React, { Component } from 'react';
import { getAllPosts, createComment, deletePost, putComment, putPost, deleteComment } from '../../services/api-helper'
// import CreateComment from '../Comment/CreateComment';
// import CommentEdit from '../Comment/CommentEdit';
import './Homepage.scss';

export default class Homepage extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     posts: [],
  //   }
  // }




  // async componentDidMount() {
  //   const posts = await getAllPosts()
  //   console.log(posts)
  //   this.setState({ posts })
  // }

  // handleCreateComment = async (id, commentData) => {
  //   const newComment = await createComment(id, commentData);
  //   this.props.addNewComment(newComment, id);
  //   this.props.history.push('/');
  //   this.props.reload()
  // }

  // handleCommentUpdate = async (id, commentData) => {
  //   const updateComment = await putComment(id, commentData);
  //   const updatePost = this.state.posts.find(post => post.id == updateComment.post_id)
  //   updatePost.comments = [...updatePost.comments.filter(comment => comment.id !== updateComment.id), updateComment]
  //   this.setState(prevState => ({
  //     posts: prevState.posts.map(post => post.id == updatePost.id ? updatePost : post)
  //   }))
  // }

  // handleCommentDelete = async (id) => {
  //   const response = await deleteComment(id);
  //   const deletedComment = response.data
  //   const updatePost = this.state.posts.find(post => post.id == deletedComment.post_id)
  //   updatePost.comments = updatePost.comments.filter(comment => comment.id !== deletedComment.id)
  //   this.setState(prevState => ({
  //     posts: prevState.posts.map(post => post.id == updatePost.id ? updatePost : post)
  //   }))
  // }

  handleUpdatePost = async (id, postData) => {
    const newPost = await putPost(id, postData);
    console.log(newPost)
    this.props.reload()
  }

  handlePostDelete = async (id) => {
    await deletePost(id);
    // this.setState(prevState => ({
    //   posts: prevState.posts.filter(post => post.id != id)
    // }))
    // this.props.history.push(`/Homepage`)
    window.location.reload()
  }

  handleUpdate = (id) => {
    // this.props.clearVisablePost()
    this.props.history.push(`/post/${id}/update`)
  }


  render() {
    console.log(this.props.posts)
    return (
      <div className='body'>
        {this.props.posts && this.props.posts.map(post => (
          <div className="CompletePostIncludeComment">
            {/* <div onClick={() => this.props.setVisablePost(post.id)}> */}
            <div className="Posts">
              {/* <div className="Userinfo">
                  <img src={post.user.text} className="usericon" />
                  <p className="username" >{post.user.username} </p>
                </div> */}

              <h3>{post.post_text}</h3>
            </div>

            {/* <div>
                {post && post.comments.map(comment =>
                  <CommentEdit comment={comment} handleCommentDelete={this.handleCommentDelete} handleCommentUpdate={this.handleCommentUpdate} currentUser={this.props.currentUser} {...this.props} />
                )}
              </div> */}

            {/* </div> */}
            {/* <CreateComment id={post.id} handleCreateComment={this.handleCreateComment} /> */}
            <div className="update-deletebuttons">
              <button classsNme="DeleteButton" onClick={() => this.handlePostDelete(post.id)}>Delete</button>
              <button classsNme="UpdateButton" onClick={() => this.handleUpdate(post.id)}>Update</button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}