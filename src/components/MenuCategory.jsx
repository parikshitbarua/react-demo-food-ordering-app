import { useState } from "react";
import MenuCategoryItem from "./MenuCategoryItem.jsx";

const MenuCategory = ({ category, isOpen, setShowIndex, collapseAll }) => {

    const toggleAccordion = () => {
        if (isOpen) {
            collapseAll();
        } else {
            setShowIndex();
        }
    }

    return (
        <div className="menu-category">
            <div className={`category-title ${ isOpen ? "open" : ""}`} onClick={ toggleAccordion }>
                <span>{category.title} ({category?.itemCards?.length})</span>
                <span className="arrow">{"⌄"}</span>
            </div>

            { isOpen && (
                <div className="menu-items">
                    {category?.itemCards?.map((item) => (
                        <MenuCategoryItem menuItem={item} key={item?.card?.info?.id} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default MenuCategory;