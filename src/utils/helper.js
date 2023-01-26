
//Filter the resturant on the bases of resturant name

export function  filterData(restaurantList,serachText){
    return restaurantList.filter(restaurant=>
        restaurant?.data?.name?.toLowerCase()?.includes(serachText.toLowerCase()));
    }
return filterData;
    