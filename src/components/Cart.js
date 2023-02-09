import { useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard";


const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    // const store = useSelector((store) => store);
return (
<div>
    <h1 className="font-bold text-3xl">Cart Items -{cartItems.length}</h1>
    <RestaurantCard items={(cartItems[0])} />
</div>
);
};
export default Cart;