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
        <home />
      </Link>
      {props.currentUser && (
        <Link to={`/users/${props.currentUser.id}`} className="Usericon">
          <profile />
        </Link>
      )}
      <Link to="/CreatePost" className="Createicon">
        <createpost />
      </Link>
      <Link to="/Login" className="Login">
        <login />
      </Link>
      <Link to="/Register" className="Registericon">
        <register />
      </Link>
    </div>
  );
}

