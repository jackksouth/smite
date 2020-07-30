import React, { Component } from 'react'
import { getOnePost, putPost } from '../../services/api-helper'

export default class UpdatePost extends Component {
  state = {
    captions: '',
    post_text: ''
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    const post = await getOnePost(id)
    console.log(post)
    this.setState({ captions: post.captions, post_text: post.post_text })
  }


  componentDidUpdate(prevProps) {
    if (prevProps.postItem !== this.props.postItem) {
      this.setFormData();
    }
  }

  setFormData = () => {
    this.setState({
      name: this.props.postItem.name
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handlePostUpdate = async (id, postData) => {
    const newPost = await putPost(id, postData);
    console.log(newPost)
    this.props.reload()
  }

  render() {
    const { handlePostUpdate, history, match } = this.props;
    const { id } = this.props.match.params
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.handlePostUpdate(id, this.state);
        history.push(`/`);
      }}>
        <h3>Update Post</h3>
        <label>
          Caption:
          <input
            name="captions"
            className="input-caption"
            type='text'
            value={this.state.captions}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Add Text:
          <input
            name='text_post'
            className="input-text"
            placeholder='Text'
            type='text'
            value={this.state.post_text}
            onChange={this.handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}