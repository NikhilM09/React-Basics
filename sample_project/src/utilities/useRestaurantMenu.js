import {useState, useEffect} from 'react';

const useRestaurantMenu = (uniqueId) => {
    const [items, setItems] = useState([]);
    const [nestedItems, setNestedItems] = useState([]);
    const normalItem = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    const nestedItem = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
    // const {id} = useParams();
    console.log(uniqueId);
    const getMenu = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${uniqueId}&submitAction=ENTER`);
        const menu = await data.json();
        console.log("menu", menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card["@type"] === normalItem));
        console.log("nestedMenu", menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card["@type"] === nestedItem));
        setItems(menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card["@type"] === normalItem));
        setNestedItems(menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card["@type"] === nestedItem));
    }

    useEffect(() => {
        getMenu()
    }, [])

    const obj = {
        normalItems: items,
        nestedItems: nestedItems
    }

    console.log("item", items);
    console.log("nestedItem", nestedItems);

    return obj;
    
} 

export default useRestaurantMenu;