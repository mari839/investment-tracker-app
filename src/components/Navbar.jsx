import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "../styles/components/navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">💰 Investment Tracker</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/investments">Investments</Link>
        <Link to="/settings">Settings</Link>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
