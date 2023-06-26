import { useState, useEffect } from "react"; // Named Import

import RestaurantCard from "./RestaurantCard"; // Default Import
import responseList from "../utils/mockData";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body = () => {
  // Create state variable
  // Array Destructuring
  const [listOfRes, setListOfRes] = useState([]); // useState(null), useState({})
  const [filterRes, setFilterRes] = useState([]);

  const [searchText, setSerachText] = useState("");
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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6083842&lng=73.7588178&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // optional chaining json?.data?.cards[2]?.data?.data?.cards
    setListOfRes(json.data.cards[2].data.data.cards);
    setFilterRes(json.data.cards[2].data.data.cards);
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
      return elem.data.name.toLowerCase().includes(searchText.toLowerCase());
    });
    console.log("output", resAfterSearch);
    setFilterRes(resAfterSearch);
  };

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* Search and filter start*/}
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            onChange={e => allowTyping(e.target.value)}
            value={searchText}
          />
          <button onClick={() => getRecordAfterSearch()}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter(res => {
              return res.data.avgRating > 4;
            });
            console.log("filteredList", filteredList);
            setFilterRes(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      {/* Search and filter end*/}

      {/* Grid part start */}
      <div className="res-container">
        {filterRes.map(res => {
          //return <RestaurantCard key={res.data.id} resObj={res} />;
          return <Link className="res-card-box" key={res.data.id} to={'/restaurant/'+res.data.id}><RestaurantCard resObj={res} /></Link>;
        })}
      </div>
      {/* Grid part end */}
    </div>
  );
};

export default Body;
