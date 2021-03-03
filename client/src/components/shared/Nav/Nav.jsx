import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="title" to="/">
          BlogApp
        </NavLink>
        <div className="links">
          <NavLink className="all-posts-link" to="/posts">
            All Posts
          </NavLink>
          <NavLink className="create-post-link" to="/add-post">
            Create Post
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
