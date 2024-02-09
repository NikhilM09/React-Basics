import { useState, useEffect } from "react";

const useRestaurant = () => {
    const [cardArray, setCardArray] = useState([]);
    const [masterCards, setMasterCards] = useState([]);

    async function getRestaurantData() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.05650&lng=73.06560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log("restdata", json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setCardArray(json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setMasterCards(json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    useEffect(() => {
        getRestaurantData();
        console.log("useEffect called");
    }, []);

    const obj = {
        collection : cardArray,
        masterCollection : masterCards,
        updater_function : setCardArray
    }
    
    return obj;
}

export default useRestaurant;