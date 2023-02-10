import { useState, useContext } from "react";
import  Logo from "../assets/img/food-villa-logo.png";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";
import Instamart from "./Instamart";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <>
      <div className="flex">
        <a href="/">
          <img data-testid="Logo" className="h-20 w-20 p-2" src={Logo} alt="logo" />
        </a>
        <a className="logoName" href="/">
          <p>Namaste Happy Foodie</p>
        </a>
      </div>
    </>
  );
};

const Header = () => {
  const [isLogedIn, setIsLogedOut] = useState(true);

  const isOnline = useOnline();
  const { User } = useContext(UserContext);
  const  cartItems  = useSelector((store) => store.cart.items);
  return (
    <>
      <div className="flex justify-between bg-green-400 border drop-shadow-md">
        <Title />
        <div className="nav-items">
          <ul className="flex py-20">
            <li className="px-10">
              <Link to="/">Home</Link>
            </li>
            <li className="px-10">
              <Link to="/about">About</Link>
            </li>
            <li className="px-10">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-10" data-testid="cart">Cart- 4 items</li>
            <li className="px-10">
              <Link to="/instamart">InstaMart</Link>
            </li>
          </ul>
        </div>
        <div className="loginBtn">
          {isLogedIn ? (
            <button className="login" onClick={() => setIsLogedOut(false)}>
              LogIn
              <h1 data-testid="online-status">{isOnline ? "✅" : "🔴"}</h1>
            </button>
          ) : (
            <button className="login" onClick={() => setIsLogedOut(true)}>
              LogOut <h1>{isOnline ? "🔴" : "✅"}</h1>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;