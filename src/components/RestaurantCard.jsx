import React from "react";
import { CDN_URL } from "../utils/constants";
import restaurantMenu from "../pages/RestaurantMenu.jsx";

const RestaurantCard = ({ resData }) => {
    const {
        name,
        cuisines,
        avgRating,
        cloudinaryImageId,
        sla : {
            deliveryTime
        }
    } = resData?.info;

    return (

        <div className="res-card">
            <img
                src={ CDN_URL + cloudinaryImageId }
                alt="res-logo"
                className="res-logo"/>
            <h3>{ name }</h3>
            <h4>{ cuisines.join(', ') }</h4>
            <h4>{ avgRating } Stars</h4>
            <h4>{ deliveryTime } Minutes</h4>
        </div>


    )
};

// adds a "New" banner to Restaurant Cards.
export const withNewLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="new-res">
                <label>New</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;