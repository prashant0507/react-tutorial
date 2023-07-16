import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
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

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join("")} - {costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <ul>
          {
              itemCards.map((elem)=>{
                return <li key={elem.card.info.id}>
                        <span>{elem.card.info.name}</span> - <span>{elem.card.info.defaultPrice/100 || elem.card.info.price/100}</span>
                    </li>
              })
          }
      </ul>
    </div>
  );
};

export default RestaurantMenu;
