import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard.jsx";
import Shimmer from "./Shimmer.jsx";
import {Link} from "react-router";

const Body = () => {
    const [resData, setResData] = useState([]);
    const [allData, setAllData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filterOn, setFilterOn] = useState(false);
    const [searchText, setSearchText] = useState("");

    const showTopRestaurants = async (event) => {
        setFilterOn((previousState) => {
            return !previousState;
        });
    };

    const searchRestaurant = () => {
        const searchedRestaurants = searchText.trim().length > 0 ?allData.filter((res) => res.info.name.trim().toLowerCase().includes(searchText.trim().toLowerCase())) : allData;
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

    const fetchData = async () => {
        const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await res.json();
        const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setAllData(restaurants);
        setResData(restaurants);
        setIsLoading((prev) => false);
    }

    // conditional rendering
    // if(isLoading) {
    //     return (<Shimmer />);
    // }

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
                            return (<Link to={`restaurants/${restaurant.info.id}`} key={ restaurant.info.id }> <RestaurantCard resData={ restaurant } /> </Link>)
                        })
                    }
                </div>
            </div>
        )
};

export default Body;