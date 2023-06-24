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
  } = resObj.data;
  return (
    <div className="res-card" style={styleCard}>
      <img src={CDN_URL + cloudinaryImageId} />
      <h3 className="hotel-name">{name}</h3>
      <h4 className="hotel-cuisine">{cuisines.join(",")}</h4>
      <div className="star-two">
        <h4 className="hotel-star">{avgRating} Star</h4>
        <h4 className="hotel-costtwo">{costForTwo / 100} for Two</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
