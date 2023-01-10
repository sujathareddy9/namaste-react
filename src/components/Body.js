import RestaurantCard from "./ResturantCard";
import { restaurantList } from "./constants"
import { useState } from "react"

// What is State?
// what is react hooks? -  functions,
// what is useState?

const filterData = (searchText,restaurants) => {
    return restaurants.filter((restaurant) => 
    restaurant.data.name.includes(searchText) 
    )
}

const Body = () => {
    const [searchText, setSearchText] = useState("KFC"); //returns = [variable name, function to update the variable]
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchClicked, setSearchClicked] = useState("false");
    return (
        <>
            <div className="search-container">
                <input type="text" 
                className="search-input" 
                placeholder="Search"
                value = {searchText}
                onChange = {(e)=>{
                    setSearchText(e.target.value);
                }}
                />
                <h1>{searchClicked}</h1>
                <button type="button-btn" onClick={()=> {
                  setSearchClicked("true");
                    //setSearchClicked(searchClicked == "false" ? "true" : "false")
                    const data = filterData(searchText,restaurants);
                    setRestaurants(data);
                }}
                >Search - {searchText}</button>
            </div>
            <div className="restaurant-list">
                {
                restaurants.map((restaurant)=>{
                    return <RestaurantCard  {...restaurant.data} key={restaurant.data.id}/>
                })
                }        
            </div>
        </>
    )
}

export default Body;