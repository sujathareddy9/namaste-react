import { useState, useEffect  } from "react";
import {FETCH_RESTAURANT_MENU_URL}from "../components/Config" 

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
      getRestaurantInfo();
    }, []);
  
    async function getRestaurantInfo() {
      const data = await fetch(FETCH_RESTAURANT_MENU_URL + resId);
      const json = await data.json();
      getRestaurant(json.data);
    }
  
    return restaurant;
  };

export default useRestaurant;