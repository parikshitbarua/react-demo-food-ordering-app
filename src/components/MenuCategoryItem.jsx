import { useDispatch } from "react-redux";
import { addItem } from "../utils/store/cartSlice.jsx";
import { CDN_URL } from "../utils/constants.jsx";

const MenuCategoryItem = ({ menuItem }) => {
    const dispatch = useDispatch();
    const handleAddItem = () => {
        dispatch(addItem("pizza"));
    }
    return (
        <div className="menu-item">
            <div>
                <h3>{menuItem?.card?.info?.name}</h3>
                <p>{menuItem?.card?.info?.description}</p>
                <p>
                    <span>
                        ₹ {menuItem?.card?.info?.price / 100 || menuItem?.card?.info?.defaultPrice / 100}
                    </span>
                    <span>
                    <button className="add-item-button" onClick={handleAddItem}>+ Add</button>
                    </span>
                </p>
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
