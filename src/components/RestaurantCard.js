import React from "react";
import { IMG_CDN_URL, FETCH_RESTAURANT_MENU_URL } from "../components/constants";
import useLocalStorage from "../utils/useLocalStorage";
import useRestaurant from "../utils/useRestaurant";


const RestaurantCard = ({
    name,
    cloudinaryImageId,
    cuisines,
    lastMileTravelString,
  }) => {
    return (
      <div className="card">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    );
  };
  export default RestaurantCard;