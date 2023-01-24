import { useState } from "react";
import  Logo from "../assets/img/food-villa-logo.png";
import { Link } from "react-router-dom";

const loggedInUser = () => {
  //some api call to check authentication
  return true;
};
// SPA -- Single page Application
// 2 Types of Routings--(1. Client side routing, 2. Serverside Routing). 

const Title = () => (
  <a href="/">
    <img alt="logo" className="logo" src={Logo}></img>
  </a>
);

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;