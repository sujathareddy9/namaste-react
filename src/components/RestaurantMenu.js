import { useEffect, useState } from "react";
import  { useParams } from "react-router-dom";
import  { IMG_CDN_URL  } from "./Constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";


const ReastaurantMenu = () => {
  const params = useParams();  
  const { id } = params;  
  const restaurant = useRestaurant({"id":id}); 
  console.log(restaurant)
  

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="block">
      <div className="flex flex-wrap px-7 mx-40 items-center">
        <h1 className="text-orange-900 font-semibold text-2xl w-full text-center py-7">{restaurant?.name}</h1>
        <img className="h-[250] border-4 border-yellow-600 rounded" src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <div className="block text-left justify-items-start px-12">
        <h3 className="text-orange-900 font-lg text-3xl">{restaurant?.area}</h3>
        <h3 className="text-orange-900 font-lg text-xl py-3">{restaurant?.areaSlug}, {restaurant?.city}</h3>
      
        <h3 className="text-orange-900 font-lg text-lg py-3">{restaurant?.avgRating} starts</h3>
        <h3 className="text-orange-900 font-lg text-lg py3">{restaurant?.costForTwoMsg}</h3>
      </div>
      </div>
      <div>
        <h1 className="w-full text-center font-extrabold  text-orange-900 text-3xl p-12">Menu</h1>
        <ul className="flex flex-wrap">
          {Object.values(restaurant?.menu?.items)?.map((item) => (
            <li key={item.id} className="border border-solid rounded w-[23%] h-[100] flex justify-between m-3 p-2  border-yellow-600">
            <img className="h-[50] object-cover"src={IMG_CDN_URL + item.cloudinaryImageId} />
              <h3 className="w-[90] text-orange-900 text-sm">{item.name}</h3>
              <h3 className="w[90]  text-orange-900 text-sm font-medium">{item.price}</h3>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReastaurantMenu;