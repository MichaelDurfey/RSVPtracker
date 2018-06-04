import React from 'react';

const Navbar = (props) => {
  return (
    <div className="navBar">
      <button className="homepage navButton" value="Homepage">
        Homepage
      </button>
      <button className="login navButton" value="Login">
        Login
      </button>
    </div>
  )
}

export default Navbar;
