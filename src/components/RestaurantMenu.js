import { useEffect, useState } from "react";
import  { useParams } from "react-router-dom";
import  { IMG_CDN_URL  } from "./Constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";


const ResturantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <div>restaurant id: {Id}</div>
        <h1>{restaurant?.name}</h1>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="reslogo" />
        <p>{restaurant?.area}</p>
        <p>{restaurant?.city}</p>
        <p>{restaurant?.avgRating}</p>
        <p>{restaurant?.costForTwo}</p>
      </div>
      <div>
        <ul>
          {Object.values(restaurant?.menu?.items)?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResturantMenu;