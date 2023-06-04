import { useState, useEffect } from "react";

const useRestaurant = () => {
    const [cardArray, setCardArray] = useState([]);
    const [masterCards, setMasterCards] = useState([]);

    async function getRestaurantData() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setCardArray(json?.data.cards[2]?.data?.data?.cards);
        setMasterCards(json?.data.cards[2]?.data?.data?.cards);
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