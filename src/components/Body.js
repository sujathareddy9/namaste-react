import { restaurantList } from "./Constants";
import React from "react";
import { useState, useEffect } from "react";


const Body = () => {
  // const searchValue = "KFC";

  // searchText is a local state variable
  //const [searchText] = useState("KFC");
  //function foes inside const useState()
  // here we are using restaurantlist and this is why intial render
  //we willsee 8 data now we will remove this
  // const [restaurants, setRestaurants] = useState(restaurantList);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  /*
  const searchVar = useState();
  const [varibaleNmae,functionName] = searchVar
  */
  /*
  useEffect(() => {
    //API CALL
    console.log("USE EFFECT CALLED");
  }, []);
  console.log(
    "pre - render wirten after useEffect but it will be printed first"
  );
*/
  /*
  useEffect(() => {
    console.log("USE EFFECT CALLED");
  }, [searchInput]);
  console.log(
    "pre - render wirten after useEffect but it will be printed first"
  );
  */

  useEffect(() => {
    //API CALL
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    //this is a bad way, use optional chaining
    //setRestaurants(json.data.cards[2].data.data.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
  }

  //conditional rendering
  //if data is empty then shimmer UI
  ///else API data

  //early return
  if (!allRestaurants) {
    return null;
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchInput}
          //e.target.value = whatever you write inside keyboard
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchInput, allRestaurants);
            //update the state--restaurantVariable
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {/* You have to write logic for NO RESTAURANT FOUND HERE */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;