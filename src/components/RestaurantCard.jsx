import React from "react";
import { Link } from "react-router";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const {
        id,
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
            <Link to={`/restaurants/${id}`}>
                <img
                    src={ CDN_URL + cloudinaryImageId }
                    alt="res-logo"
                    className="res-logo"/>
                <h3>{ name }</h3>
                <h4>{ cuisines.join(', ') }</h4>
                <h4>{ avgRating } Stars</h4>
                <h4>{ deliveryTime } Minutes</h4>
            </Link>
        </div>


    )
}

export default RestaurantCard;