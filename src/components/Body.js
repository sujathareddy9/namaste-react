import { useEffect, useState } from "react";
import { RestaurantCard } from './RestaurantCard'; //named import 
import Shimmer from "./Shimmer";
import { CLOUD_IMAGE_CDN, FETCH_RESTAURANT_MENU_URL, RESTAURANT_LIST } from "./constants";
import useOnline from "../utils/useOnline";
import useLocalStorage from "../utils/useLocalStorage";
import useRestaurant from "../utils/useRestaurant";
import filterData from "../utils/helper";
import Instamart from "./Instamart";
// import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.733078514704896&lng=75.89587446302176&page_type=DESKTOP_WEB_LISTING
  //empty dependency array => once after render
  //dependency array [searchText] => once after initial render + everytime (my searchText changes)

  
  const getRestaurants = useRestaurant({"id": null});

  
  useEffect(() => {
    setAllRestaurants(getRestaurants);
    setFilteredRestaurants(getRestaurants);
  }, [getRestaurants]);
  

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline, please check your internet connection.!</h1>;
  } 

  //Early return
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className=" block mx-auto text-center">
        <input
        data-testid="search-input"
          type="text"
          className="bg-white w-96 border border-yellow-900 my-2  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-orange-800 sm:text-sm"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
        data-testid="search-btn"
          className=" bg-orange-800 h-10 mb-5 w-28 text-cyan-50 rounded-sm  text-center align-middle py-2 m-4"
          onClick={() => {
            //need to filter the data
            const fdata = filterData(searchInput, allRestaurants);
            //update the state - restaurants
            setFilteredRestaurants(fdata);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap mx-auto items-center w-4/5l" data-testid="rest-List">
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurant match your search...!!</h1>
        ) : (
          filteredRestaurants?.map((restaurants) => {
            return (
              <Link
                to={"/restaurants/" + restaurants.data.id}
                key={restaurants.data.id}
              >
                <RestaurantCard {...restaurants.data}  />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;