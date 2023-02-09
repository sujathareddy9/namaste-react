import { CDN_CARD_URL } from "./Constants";

const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={CDN_CARD_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4>Rupees:{price / 100}</h4>
    </div>
  );
};

export default FoodItem;