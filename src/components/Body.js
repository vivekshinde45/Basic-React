import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { resList, LAT, LONG, SWIGGY_URL } from "../utils/constants";
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
    let response = await fetch(SWIGGY_URL);
    let jsonResponse = await response.json();
    // console.log(jsonResponse);
    const responseOfRestaurants =
      jsonResponse?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(responseOfRestaurants);
    setFilteredListOfRestaurants(responseOfRestaurants);
    setIsLoaded(true);
  };

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
              const getByNameListOfRestaurants = listOfRestaurants.filter(
                (res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(getByNameListOfRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
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
              <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
            );
          })}
          ;
        </div>
      )}
    </div>
  );
};

export default Body;
