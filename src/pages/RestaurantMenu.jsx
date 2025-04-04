import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Shimmer from "../components/Shimmer.jsx";

const RestaurantMenu = () => {
    const { resId } = useParams();
    console.log("resId", resId);
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const res =  await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await res.json();
        setResInfo(json?.data?.cards);
    };

    if (resInfo == null) return <Shimmer />

    const { id, name, costForTwoMessage, cuisines } = resInfo[2]?.card?.card?.info;
    const items = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    return (
        <div className="menu">
            <h1>{ name }</h1>
            <p>{ cuisines.join(', ')} - { costForTwoMessage }</p>
            <h2>Menu</h2>
            <ul>
                { items != null ?
                    items.map((item) => {
                     return (
                         <li key={ item?.card?.info?.id }>
                            {item?.card?.info?.name } - Rs. { (item?.card?.info?.price / 100) ||
                            (item?.card?.info?.variantsV2?.pricingModels[0]?.price / 100) }
                        </li>)
                    }) : "Failed to load menu 🥲"
                }
            </ul>
        </div>
    )
};

export default RestaurantMenu;