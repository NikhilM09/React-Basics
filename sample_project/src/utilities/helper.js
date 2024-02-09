

export const searchRestaurant = (collection, text) => {
    const filteredRestaurants = collection.filter((item) => { return item?.info?.name?.toLowerCase().includes(text.toLowerCase()) });
    return filteredRestaurants;
}

export const url = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

