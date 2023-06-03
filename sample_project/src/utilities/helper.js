

export const searchRestaurant = (collection, text) => {
    const filteredRestaurants = collection.filter((item) => { return item?.data?.name?.toLowerCase().includes(text.toLowerCase()) });
    return filteredRestaurants;
}
