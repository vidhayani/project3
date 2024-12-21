
import React from "react";

const NavBar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#333", color: "white" }}>
      <a href="/" style={{ margin: "0 1rem", color: "white" }}>Home</a>
      <a href="/register" style={{ margin: "0 1rem", color: "white" }}>Register</a>
      <a href="/login" style={{ margin: "0 1rem", color: "white" }}>Login</a>
    </nav>
  );
};

export default NavBar;