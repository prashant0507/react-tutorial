import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Contact from "./Contact";
// import {MENU_API} from "../utils/appConstant";

const RestaurantMenu = () => {
  // const [restMenu, setRestMenu] = useState(null);
  const {resId} = useParams();
  console.log('params', resId);

  const restMenu = useRestaurantMenu(resId); // Single Responsibility prinicpal, Episode 9 
  console.log("restMenu==>>>", restMenu);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API+resId);
  //   const json = await data.json();
  //   console.log(json);
  //   setRestMenu(json.data);
  // };

  if (restMenu === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage
  } = restMenu.cards[0].card.card.info;

  const {
    itemCards
  } = restMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  console.log("menu", itemCards);
  const categories = restMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(c=>c.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  console.log("categories=>>>", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join("")} - {costForTwoMessage}
      </p>

      {/** Category accordion */}
      {categories.map((category)=>{
          //console.log("loop category", category);
          return <RestaurantCategory key={category.card.card.title} category = {category} />
        })}
      
    </div>
  );
};

export default RestaurantMenu;
