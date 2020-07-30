import React, { Component } from 'react'
import { getOnePost } from '../../services/api-helper'
import './PostDetails.scss'

export default class PostDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: []
    }
  }

  componentDidMount = () => {
    this.getPost(this.props.id)
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.id !== prevProps.id) {
      this.getPost(this.props.id)
    }
  }

  getPost = async (id) => {
    const post = await getOnePost(id)
    console.log(post)
    this.setState({ post })
  }

  render() {
    return (
      <>
        <div className="everything">
          {this.state.post &&
            <div className="CompletePostIncludeComment">
              <button onClick={this.props.clearVisablePost}>X</button>
              <div className="Posts">
                <img src={this.state.post.post_text} alt="" className="post_text" />
                <p className="captions">{this.state.post.captions}</p>
              </div>
            </div>
          }
        </div>
        {/* <div className="ThePostComments">
          {this.state.post && this.state.post.comments.map(comment =>
            <>
              <div className="commentcomment1">
                <img src={comment.user} className="commentuser" />
                <p className="usernameicon_commenter">{comment.user.username}</p>
                <p className="commentContent">{comment.content}</p>
              </div>
            </>
          )}
        </div> */}
      </>
    )
  }
}