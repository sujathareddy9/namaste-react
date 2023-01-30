import { useState } from "react";
import  Logo from "../assets/img/food-villa-logo.png";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";

const Title = () => (
  <a href="/">
    <img
      src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
      alt="Food Villa"
      className="h-24 w-28 p-1"
    />
  </a>
);

//composing component
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex justify-between  border-solid border-b-zinc-600 p-2 m-auto bg-yellow-50">
      <Title />
      <div >
        <ul className="flex">
          <li className="py-10 px-5  text-orange-900 font-bold" >
            <Link to="/">Home</Link>
          </li>
          <li className="py-10 px-5  text-orange-900 font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="py-10 px-5  text-orange-900 font-bold"><Link to="/contact">Contact</Link></li>
          <li className="py-10 px-5  text-orange-900 font-bold"><Link to="/instamart">Instamart</Link></li>
          <li className="py-10 px-5  text-orange-900 font-bold">Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button className="align-middle bg-orange-800 p-2 text-cyan-50 rounded-sm h-11 my-7 mx-2" onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button className="align-middle bg-orange-800 p-2 text-cyan-50 rounded-sm h-11 my-7 mx-2" onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;