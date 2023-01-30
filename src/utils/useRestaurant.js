import { useEffect, useState } from "react";
import { GET_RESTAURANTS, RESTAURANT_API } from "../components/constants";

const useRestaurant = (props) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantsInfo();
  }, []);

  async function getRestaurantsInfo() {
    
    if(props.id !== null) {
      const data = await fetch(GET_RESTAURANTS + props.id);      
      const fetchData = await data.json();      
      setRestaurant(fetchData.data);
    }
    
    if(props.id === null) {
        const data = await fetch(RESTAURANT_API);
        const fetchJson = await data.json();
        setRestaurant(fetchJson?.data?.cards[2]?.data?.data?.cards);
    }
  }

  return restaurant;
};

export default useRestaurant;