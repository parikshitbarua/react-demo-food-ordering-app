import React from "react";
import { CDN_URL } from "../utils/constants";

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
}

export default RestaurantCard;