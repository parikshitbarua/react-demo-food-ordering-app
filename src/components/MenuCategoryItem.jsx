import { CDN_URL } from "../utils/constants.jsx";

const MenuCategoryItem = ({ menuItem }) => {
    return (
        <div className="menu-item">
            <div>
                <h3>{menuItem?.card?.info?.name}</h3>
                <p>{menuItem?.card?.info?.description}</p>
                <p>₹ {menuItem?.card?.info?.price / 100 || menuItem?.card?.info?.defaultPrice / 100}</p>
            </div>
            <div className="item-image">
                <img
                    src={CDN_URL + menuItem?.card?.info?.imageId}
                    alt={menuItem?.card?.info?.name}
                />
            </div>
        </div>
    );
}

export default MenuCategoryItem;
