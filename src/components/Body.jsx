import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import RestaurantCard, { withNewLabel } from "./RestaurantCard.jsx";
import Shimmer from "./Shimmer.jsx";
import useOnlineStatus from "../utils/hooks/useOnlineStatus.jsx";
import { SWIGGY_HOME_API } from "../utils/constants.jsx";

const Body = () => {
    const [resData, setResData] = useState([]);
    const [allData, setAllData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filterOn, setFilterOn] = useState(false);
    const [searchText, setSearchText] = useState("");

    const NewRestaurant = withNewLabel(RestaurantCard);

    const isOnline = useOnlineStatus();

    const showTopRestaurants = async (event) => {
        setFilterOn((previousState) => {
            return !previousState;
        });
    };

    const searchRestaurant = () => {
        const searchedRestaurants = searchText.trim().length > 0 ? allData.filter((res) => res.info.name.trim().toLowerCase().includes(searchText.trim().toLowerCase())) : allData;
        setResData(searchedRestaurants);
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (filterOn) {
            setResData(resData.filter((res) => res.info.avgRating > 4.2));
        } else {
            setResData(allData);
        }
    }, [filterOn]);

    useEffect(() => {
        searchRestaurant();
    }, [searchText]);

    // TODO 1: Create custom hook to fetch home page data.
    const fetchData = async () => {
        const res = await fetch(SWIGGY_HOME_API);
        const json = await res.json();
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setAllData(restaurants);
        setResData(restaurants);
        setIsLoading((prev) => false);
    }

    // conditional rendering - should be after all hook are called
    if (!isOnline) {
        return (
            <div>
                <h1>No Internet Connection</h1>
                <p>Looks like you are offline! Please check your internet connection</p>
            </div>
        );
    }

    return isLoading === true ?
        <Shimmer /> :
        (
            <div className="body">
                <div className="search">
                    <div className="search">
                        <input
                            type="text"
                            className="search-box"
                            placeholder="Restaurant Name"
                            value={searchText}
                            onChange={(e) => {
                                setSearchText((prevState) => e.target.value);
                            }}
                        />
                        <button onClick={() => searchRestaurant()}>Search</button>
                    </div>
                    <div className="filter-btn">
                        <button
                            onClick={(event) => showTopRestaurants(event)}>{filterOn ? "Remove Filter" : "Top Rated Restaurants"}</button>
                    </div>
                </div>
                <div className="res-container">
                    {
                        resData.map((restaurant) => {
                            return (
                                <Link to={`restaurants/${restaurant.info.id}`} key={ restaurant.info.id }>
                                    {
                                        restaurant?.info?.isNewlyOnboarded ?
                                        <NewRestaurant resData={ restaurant } /> :
                                        <RestaurantCard resData={ restaurant } />
                                    }
                                </Link>)
                        })
                    }
                </div>
            </div>
        )
};

export default Body;
