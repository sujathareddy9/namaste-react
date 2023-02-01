import { useEffect, useState } from "react";
import { GET_RESTAURANTS, RESTAURANT_API, IMG_CDN_URL } from "../components/constants";
import Instamart from "../components/Instamart";


const useRestaurant = (props) => {
    const [restaurants, setRestaurants] = useState(null);

    useEffect(() => {
        getRestaurantsInfo();
    }, []);

    async function getRestaurantsInfo() {

        if (props.id !== null) {
            const data = await fetch(GET_RESTAURANTS + props.id);
            console.log('GET_RESTAURANTS', data)
            const fetchData = await data.json();
            setRestaurants(fetchData.data);
        }

        if (props.id === null) {
            const data = await fetch(RESTAURANT_API);
            const fetchJson = await data.json();
            console.log('RESTAURANT_API', fetchJson)
            setRestaurants(fetchJson.data.cards[2].data.data.cards);
        }
    }

    return restaurants;
};

export default useRestaurant;