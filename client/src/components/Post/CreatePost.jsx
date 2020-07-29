import React, { Component } from 'react'
import './CreatePost.scss'

export default class CreatePost extends Component {
  state = {
    captions: '',
    image_url: ''
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
        <h3>Create A Post</h3>
        <label>
          <input
            name="captions"
            className="input-caption"
            placeholder='Caption'
            type='text'
            value={this.state.caption}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input
            name='image_url'
            className="input-image-link"
            placeholder='Image Link'
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