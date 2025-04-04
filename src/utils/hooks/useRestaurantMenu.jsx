import { useState, useEffect } from "react";
import { SWIGGY_RES_MENU_API } from "../constants.jsx";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchResInfo();
    }, []);

    const fetchResInfo = async () => {
        const res = await fetch(SWIGGY_RES_MENU_API+resId);
        const json = await res.json();
        setResInfo(json?.data?.cards);
    }

    return resInfo;
}

export default useRestaurantMenu;