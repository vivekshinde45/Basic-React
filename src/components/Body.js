import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { resList } from "../utils/constants";
import { useState } from "react";
import Shimmer from "../components/Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoaded(false);
    let response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    // setListOfRestaurants(jsonResponse?.data?.cards[0]?.data?.data?.cards);
    setListOfRestaurants(resList);
    setFilteredListOfRestaurants(resList);
    setIsLoaded(true);
  };

  //   callApiHandler();

  console.log("body renders");

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredListOfRestaurants = listOfRestaurants.filter(
                (res) =>
                  res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(filteredListOfRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            console.log(filteredList);
            setFilteredListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {!isLoaded ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {filteredListOfRestaurants.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            );
          })}
          ;
        </div>
      )}
    </div>
  );
};

export default Body;
