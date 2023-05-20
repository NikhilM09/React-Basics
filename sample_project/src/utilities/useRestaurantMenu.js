import {useState, useEffect } from 'react';

const useRestaurantMenu = (id) => {
    const [items, setItems] = useState([]);
    const [nestedItems, setNestedItems] = useState([]);
    const normalItem = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    const nestedItem = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
    useEffect(() => {
        getMenu()
    }, [])
    const getMenu = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${id}&submitAction=ENTER`);
        const menu = await data.json();
        console.log("menu", menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card["@type"] === normalItem));
        console.log("nestedMenu", menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card["@type"] === nestedItem));
        setItems(menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card["@type"] === normalItem));
        setNestedItems(menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card["@type"] === nestedItem));
        //create an object with keys normal_items and nested_items and assign the values as items and nestedItems respectively
        //return the object
    }
    const obj = {
        normal_items: items,
        nested_items: nestedItems
    }
    console.log(obj);
    return obj;
    
    console.log("item", items);
    console.log("nestedItem", nestedItems);
}

export default useRestaurantMenu;