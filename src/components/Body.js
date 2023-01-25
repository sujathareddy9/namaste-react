import { useEffect, useState } from "react";
import { RestaurantCard } from './RestaurantCard'; //named import 
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST } from "./constants";


const filterData=(restaurantList,serachText)=>{
    return restaurantList.filter(restaurant=>restaurant?.data?.name?.toLowerCase()?.includes(serachText.toLowerCase()))
}

const Body = () =>{
    const [searchValue,setSearchValue] = useState("");
    const [restaurantList,setRestaurantList] = useState([]);
    const [filtedRestaurantList,setFiltedRestaurantList] = useState([])

    useEffect(()=>{
        getData()
        console.log('useeffedr')
        // https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6157801&lng=77.40994970000001&page_type=DESKTOP_WEB_LISTING
    },[])

    async function getData(){
        try{
            let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6157801&lng=77.40994970000001&page_type=DESKTOP_WEB_LISTING")
        let json = await data.json()
        setRestaurantList(json?.data?.cards[2]?.data?.data?.cards)
        setFiltedRestaurantList(json?.data?.cards[2]?.data?.data?.cards)
        }catch(e){
            setRestaurantList(RESTAURANT_LIST)
            setFiltedRestaurantList(RESTAURANT_LIST)
            console.log("ddd",e)
        }
    }

//early return or avoid rendering  
    if(!restaurantList) return null;
//

    return (restaurantList.length === 0)
    ?(<div className="shimmer-main-container">{Array(12).fill('').map((x,index)=><Shimmer key={index}/>)}</div>)
    :(
       <>
       <div className="searchBar">
            <input name="searchBar" value={searchValue} placeholder="Serach" onChange={(e)=>{
                setSearchValue(e.target.value)
            }} />
            <button onClick={()=>{
               let data = filterData(restaurantList,searchValue)
               setFiltedRestaurantList(data)
            }}>Search</button>

       </div>
       <div className="restaurant-list">
            {
                filtedRestaurantList.length === 0
                ?<h1>No match found </h1>
                :(
                 filtedRestaurantList.map(res=>(<RestaurantCard {...res.data} key={res.data.id}/>))
                )
            }
     </div>
       </>
    )
}


export default Body;