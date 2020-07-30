import React from "react";
import { Link } from "react-router-dom";
import home from './assets/home.png';
import profile from './assets/profile.png';
import createpost from './assets/createpost.png';
import login from './assets/login.png';
import register from './assets/register.png';
import "./Nav.scss";

export default function Nav(props) {

  return (
    <div className="icon">
      <Link to="/Homepage">
        <img src={home} alt="home" className="Homeicon" />
      </Link>
      {props.currentUser && (
        <Link to={`/users/${props.currentUser.id}`}>
          <img src={profile} alt="user" className="Usericon" />
        </Link>
      )}
      {props.currentUser && `Hello ${props.currentUser.username}`}
      <Link to="/CreatePost">
        <img src={createpost} alt="post" className="Createicon" />
      </Link>
      <Link to="/Login">
        <img src={login} alt="login" className="Login" />
      </Link>
      <Link to="/Register">
        <img src={register} alt="register" className="Registericon" />
      </Link>
    </div>
  );
}