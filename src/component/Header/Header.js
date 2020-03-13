import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1 className="logo">
        <span>U</span>sers.com
      </h1>
      <nav>
        <div>
          <a href="/users">Users</a>
          <a href="/blog">Blog</a>
          <a href="/about">About us</a>
        </div>
        <div>
          <a href="/sign-in">Sign in</a>
          <a href="/sign-up">Sign up</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
