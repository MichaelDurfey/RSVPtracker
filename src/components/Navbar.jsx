import React from 'react';

const Navbar = (props) => {
  return (
    <div className="navBar">
      <button class="homepage navButton" value="Homepage">
        Homepage
      </button>
      <button class="login navButton" value="Login">
        Login
      </button>
    </div>
  )
}

export default Navbar;
