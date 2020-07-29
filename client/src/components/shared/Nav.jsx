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
      <Link className="HomeIcon" to="/">
        <img src={home} />
      </Link>
      {props.currentUser && (
        <Link to={`/users/${props.currentUser.id}`} className="Usericon">
          <img src={profile} />
        </Link>
      )}
      <Link to="/CreatePost" className="Createicon">
        <img src={createpost} />
      </Link>
      <Link to="/Login" className="Login">
        <img src={login} />
      </Link>
      <Link to="/Register" className="Registericon">
        <img src={register} />
      </Link>
    </div>
  );
}