import React, { Component } from 'react'
import { getOnePost, putPost } from '../../services/api-helper'

export default class UpdatePost extends Component {
  state = {
    post_text: ''
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    console.log(id)
    const post = await getOnePost(id)
    console.log(post)
    this.setState({ post_text: post.post_text })
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
    this.setState((prevState) => ({
      ...prevState.posts, [name]: value
    }));
  }

  // handleCreatePost = async (postData) => {
  //   const newPost = await createPost({ ...postData, user_id: this.state.currentUser.id })
  //   this.setState((prevState) => ({
  //     posts: [...prevState.posts, newPost],
  //   }));
  //   this.props.history.push('/');
  // };

  handlePostUpdate = async (id, postData) => {
    const newPost = await putPost(id, postData);
    console.log(newPost)
    this.props.reload()
  }

  render() {
    const { history } = this.props;
    const { id } = this.props.match.params
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.handlePostUpdate(id, this.state);
        history.push(`/Homepage`);
      }}>
        <h3>Update Post</h3>
        {/* <label>
          Caption:
          <input
            name="captions"
            className="input-caption"
            type='text'
            value={this.state.captions}
            onChange={this.handleChange}
          />
        </label> */}
        <label>
          Text:
          <input
            name='post_text'
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