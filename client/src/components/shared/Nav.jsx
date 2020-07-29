import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Home } from "../assets/home.png";
import { ReactComponent as Profile } from "../assets/profile.png";
import { ReactComponent as CreatePost } from "../assets/createpost.png";
import { ReactComponent as Register } from "../assets/register.png";
import { ReactComponent as Login } from "../assets/login.png";
import "./Nav.scss";

export default function Nav(props) {

  return (
    <div className="icon">
      <Link className="HomeIcon" to="/">
        <Home />
      </Link>
      {props.currentUser && (
        <Link to={`/users/${props.currentUser.id}`} className="Usericon">
          <Profile />
        </Link>
      )}
      <Link to="/createpost" className="Createicon">
        <CreatePost />
      </Link>
      <Link to="/Login" className="Login">
        <Login />
      </Link>
      <Link to="/Register" className="Registericon">
        <Register />
      </Link>
    </div>
  );
}

