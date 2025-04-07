import { useSelector, useDispatch } from "react-redux";
import MenuCategoryItem from "../components/MenuCategoryItem.jsx";
import { clearCart } from "../utils/store/cartSlice.jsx";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="cart">
            <h1>Cart</h1>
            { cartItems.length > 0 && cartItems.map((item) => {
                return <MenuCategoryItem menuItem={item} isCart={true} key={item?.card?.info?.id}/>
            })}
            { cartItems.length > 0 ? <button className="add-item-button" onClick={handleClearCart}>Clear Cart</button> : <div>Cart is empty, please add items to your cart</div>}
        </div>
    )
}

export default Cart;