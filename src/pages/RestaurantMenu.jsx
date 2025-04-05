import { useState } from "react";
import { useParams } from "react-router";
import Shimmer from "../components/Shimmer.jsx";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu.jsx";
import MenuCategory from "../components/MenuCategory.jsx";

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(0);
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo == null) return <Shimmer />

    const { name, costForTwoMessage, cuisines } = resInfo[2]?.card?.card?.info;
    const items = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const itemCategories = items.filter((item) => item.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div className="menu">
            <h1>{ name }</h1>
            <p>{ cuisines.join(', ')} - { costForTwoMessage }</p>
            <ul>
                {
                    itemCategories != null ?
                    itemCategories.map((item, index) => {
                        return <MenuCategory
                            key={ item.card.card.title }
                            category={ item?.card?.card }
                            isOpen={ showIndex === index }
                            setShowIndex={ () => setShowIndex(index) }
                            collapseAll={ () => setShowIndex(-1) }
                        />
                    }) :
                    "Failed to load menu 🥲"
                }
            </ul>
        </div>
    )
};

export default RestaurantMenu;