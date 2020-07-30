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
        <img src={home} className="Homeicon" />
      </Link>
      {props.currentUser && (
        <Link to={`/users/${props.currentUser.id}`}>
          <img src={profile} className="Usericon" />
        </Link>
      )}
      <Link to="/CreatePost">
        <img src={createpost} className="Createicon" />
      </Link>
      <Link to="/Login">
        <img src={login} className="Login" />
      </Link>
      <Link to="/Register">
        <img src={register} className="Registericon" />
      </Link>
    </div>
  );
}