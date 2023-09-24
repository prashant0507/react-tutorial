import { useState, useEffect } from "react"; // Named Import

import RestaurantCard, { restaurantCardWithPromotedLabel } from "./RestaurantCard"; // Default Import
import responseList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Create state variable
  // Array Destructuring
  const [listOfRes, setListOfRes] = useState([]); // useState(null), useState({})
  const [filterRes, setFilterRes] = useState([]);

  const [searchText, setSerachText] = useState("");

  const RestaurantCardPromoted = restaurantCardWithPromotedLabel(RestaurantCard);

  // After component render it will trigger
  useEffect(() => {
    //console.log("usewffect callback");
    fetchData();

    // let time = setInterval(()=>{
    //   console.log("body interval");
    // }, 1000);

    return () => { // It will behave like unmounting phase
      console.log("use effect return");
      //clearInterval(time);
    }

  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // fetch will return promise
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log("json=>>>", json);
    // optional chaining json?.data?.cards[2]?.data?.data?.cards
    // setListOfRes(json.data.cards[2].data.data.cards);
    // setFilterRes(json.data.cards[2].data.data.cards);

    setListOfRes(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setFilterRes(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    console.log("listOfRes=>>>>", json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
  };

  //console.log("rendered called"); // It will console first, after that componenet and then useEffect

  // Conditionaly Rendering
  // if (listOfRes.length === 0) {
  //   return <Shimmer />;
  // }

  const allowTyping = val => {
    setSerachText(val);
  };

  const getRecordAfterSearch = () => {
    let resAfterSearch = listOfRes.filter(elem => {
      return elem.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    console.log("output", resAfterSearch);
    setFilterRes(resAfterSearch);
  };

  // Integrating custom hooks Episode 9
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1>Please check your internet connection</h1>
    )
  }

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* Search and filter start*/}
      <div className="filter flex">
        <div className="search-container m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            onChange={e => allowTyping(e.target.value)}
            value={searchText}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => getRecordAfterSearch()}>Search</button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-green-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRes.filter(res => {
                return res.info.avgRating > 4;
              });
              console.log("filteredList", filteredList);
              setFilterRes(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      {/* Search and filter end*/}

      {/* Grid part start */}
      <div className="res-container flex flex-wrap">
        {filterRes.map(res => {
          //return <RestaurantCard key={res.data.id} resObj={res} />;
          return (
          <Link className="res-card-box" key={res.info.id} to={'/restaurant/' + res.info.id}>
            { res.info.avgRating > 4.3 ? <RestaurantCardPromoted resObj={res} /> : <RestaurantCard resObj={res} /> }
          </Link>
          );
        })}
      </div>
      {/* Grid part end */}
    </div>
  );
};

export default Body;
