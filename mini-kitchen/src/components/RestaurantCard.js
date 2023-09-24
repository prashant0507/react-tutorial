import { CDN_URL } from "../utils/appConstant";
import { Link } from "react-router-dom";

const styleCard = {
  //backgroundColor: "#f0f0f0"
};

//const RestaurantCard = ({resName, cuisine}) // Another way
const RestaurantCard = props => {
  console.log("props", props);
  const { resObj } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo
  } = resObj.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-pink-50" style={styleCard}>
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="hotel-name font-bold py-4">{name}</h3>
      <h4 className="hotel-cuisine text-ellipsis overflow-hidden">{cuisines.join(",")}</h4>
      <div className="star-two">
        <h4 className="hotel-star">{avgRating} Star</h4>
        <h4 className="hotel-costtwo">{costForTwo / 100} for Two</h4>
      </div>
    </div>
  );
};

// Higher order componenet

// input - RestaurantCard => RestaurantCardPromoted

export const restaurantCardWithPromotedLabel  = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
