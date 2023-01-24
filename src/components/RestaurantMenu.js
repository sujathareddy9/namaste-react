import { useEffect, useState } from "react";
import  { useParams } from "react-router-dom";
import  { IMG_CDN_URL  } from "./Constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // How to read a dynamic URL params.
  const { Id } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING"
       +
        Id
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>{restaurant?.name}</h1>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>City name: {restaurant?.city}</h3>
        <h3>Rating: {restaurant?.avgRating}</h3>
        <h3>Price: {restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>MENU</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((items) => (
            <li key={items.id}>{items.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;