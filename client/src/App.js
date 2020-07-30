import React, { Component } from "react";
import Header from "./components/shared/Header";
import "./App.css";
import { loginUser, registerUser, removeToken, verifyUser } from "./services/auth";
import { getAllPosts, createPost } from "./services/api-helper";
import { withRouter, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Nav from './components/shared/Nav.jsx';
import UserProfile from "./components/Profile/UserProfile";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PostDetails from "./components/PostDetails.jsx/PostDetails";
import CreatePost from "./components/Post/CreatePost";
import UpdatePost from "./components/UpdatePost/UpdatePost";

class App extends Component {
  state = {
    currentUser: [],
    posts: [],
    createPost: [],
    visablePost: []
  };

  componentDidMount() {
    this.handleVerify();
    this.getPosts();
  }

  handleLogin = async (userData) => {
    console.log(userData)
    const currentUser = await loginUser(userData);
    this.setState({ currentUser });
    console.log(currentUser);
  };

  handleRegister = async (userData) => {
    const currentUser = await registerUser(userData);
    this.setState({ currentUser });
    console.log(currentUser);
  };

  handleLogout = () => {
    this.setState({
      currentUser: [],
    });
    localStorage.removeItem("authToken");
    removeToken();
    this.props.history.push("/");
  };

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  };

  getPosts = async () => {
    const posts = await getAllPosts();
    this.setState({ posts });
  };

  handleCreatePost = async (postData) => {
    const newPost = await createPost({ ...postData, user_id: this.state.currentUser.id })
    this.setState((prevState) => ({
      posts: [...prevState.posts, newPost],
    }));
    this.props.history.push('/Homepage');
  };

  setVisablePost = (id) => {
    this.setState({
      visablePost: id,
    });
  };

  clearVisablePost = () => {
    this.setState({
      visablePost: [],
    });
  };

  addNewComment = (newComment, id) => {
    const updatedPost = this.state.posts.find(
      (post) => post.id == newComment.post_id
    );
    updatedPost.comments.push(newComment);
    this.setState((prevState) => ({
      posts: prevState.posts.map((post) =>
        post.id == id ? updatedPost : post
      ),
    }));
  };

  reload = () => {
    window.location.reload()
  }

  render() {
    return (
      <div className="body">
        <div>

          <Header />
          <Nav currentUser={this.state.currentUser} />


          {this.state.posts && (
            <Route
              exact
              path="/Homepage"
              render={(props) => (
                <Homepage
                  posts={this.state.posts}
                  setVisablePost={this.setVisablePost}
                  currentUser={this.state.currentUser}
                  handleLogout={this.handleLogout}
                  addNewComment={this.addNewComment}
                  {...props}
                  clearVisablePost={this.clearVisablePost}
                  reload={this.reload}
                />
              )}
            />
          )}
          {this.state.visablePost && (
            <PostDetails
              id={this.state.visablePost}
              currentUser={this.state.currentUser}
              clearVisablePost={this.clearVisablePost}
            />
          )}
          <Route
            exact
            path="/Login"
            render={(props) => (
              <Login
                handleLogin={this.handleLogin}
                {...props}
                currentUser={this.state.currentUser}
                handleRegister={this.handleRegister}
              />
            )}
          />
          <Route
            exact
            path="/Register"
            render={(props) => (
              <Register handleRegister={this.handleRegister} {...props} />
            )}
          />
          <Route
            exact
            path="/Nav"
            render={(props) => (
              <Nav handleNav={this.handle} {...props} />
            )}
          />
          <Route
            exact
            path="/users/:id"
            render={(props) => <UserProfile id={props.match.params.id} />}
          />
          <Route
            exact
            path="/createpost/"
            render={(props) => (
              <CreatePost
                handleCreatePost={this.handleCreatePost}
                {...props}
                currentUser={this.state.currentUser}
              />
            )}
          />
          <Route
            exact
            path="/post/:id/update"
            render={(props) => (
              <UpdatePost
                {...props}
                currentUser={this.state.currentUser}
                getPosts={this.getPosts}
                reload={this.reload}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(App);