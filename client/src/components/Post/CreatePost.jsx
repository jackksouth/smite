import React, { Component } from 'react'
import './CreatePost.scss'

export default class CreatePost extends Component {
  state = {
    post: []
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { handleCreatePost } = this.props;
    return (
      <form className="PostEverything" onSubmit={(e) => {
        e.preventDefault();
        handleCreatePost(this.state);
      }}>
        <h3>Create a Smite Post</h3>
        <label>
          <input
            name='post'
            className="input-post-text"
            placeholder='Smite Post'
            type='text'
            value={this.state.image_url}
            onChange={this.handleChange}
          />
        </label>
        <button className="submitButton">Submit</button>
      </form>
    )
  }
}