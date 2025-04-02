import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard.jsx";
import {API_RESPONSE} from "../utils/mockData.jsx"

const Body = () => {
    const [filterOn, setFilterOn] = useState(false);
    const [resData, setResData] = useState(API_RESPONSE);
    const toggleFilter = async (event) => {
        setFilterOn((previousState) => {
            return !previousState;
        });
    };

    useEffect(() => {
        if (filterOn) {
            setResData(resData.filter((res) => res.info.avgRating > 4.3));
        } else {
            setResData(API_RESPONSE);
        }
    }, [filterOn]);



    return (
        <div className="body">
            <div className="search">
                <div className="search-box">Search</div>
                <div className="filter-btn">
                    <button onClick={ (event) => toggleFilter(event) }>{ filterOn ? "Remove Filter" : "Top Rated Restaurants" }</button>
                </div>
            </div>
            <div className="res-container">
                { resData.map((restaurant) => {
                    return ( <RestaurantCard resData={ restaurant } key={ restaurant.info.id }/> )
                })
                }
            </div>
        </div>
    )
};

export default Body;