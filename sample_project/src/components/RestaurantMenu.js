import {useState} from "react";



const RestaurantMenu = () => {
    const [menu, setMenu] = useState([]);
    const [nestedMenu, setNestedMenu] = useState([]);
   
    const testAPI = async () => {
       const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=9862&submitAction=ENTER");
       const json = await data.json();
       let regular = 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory';
       let nested = 'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory';
       console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
       setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>item?.card?.card["@type"] === regular));
       setNestedMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>item?.card?.card["@type"] === nested));
     }
     console.log("filtered cards", menu);
       console.log("nested cards", nestedMenu);
    return (
        <>
            <button onClick={testAPI}>Check API</button>
            <div class="container">
                {
                    menu.map((item) => (
                        <div>
                            <h1 className="h1 text-danger">{item?.card?.card?.title}</h1>
                            {
                                item?.card?.card?.itemCards.map((itemCard, index) =>
                                    <div>
                                        <h6 className="h6">{index + 1 + ". "}{itemCard?.card?.info?.name} : ₹{itemCard?.card?.info?.defaultPrice / 100 || itemCard?.card?.info?.price / 100} {itemCard?.card?.info?.isVeg ? '🟢' : '🔴'}</h6>
                                    </div>)
                            }
                        </div>
                    ))
                }
            </div>
            <div className="container">
                {
                    nestedMenu.map((item) => (
                        <div>
                            <h1 className="h1 text-success">{item?.card?.card?.title}</h1>
                            <div>
                                {
                                    item?.card?.card?.categories.map((itemCard, index) =>
                                        <div>
                                            <h3 className="h3 text-danger">{index + 1 + ". "}{itemCard.title}</h3>
                                            <div>
                                                {
                                                    itemCard?.itemCards.map((menuItem, index) =>
                                                        <h6 className="h6">{index + 1 + ". "}{menuItem?.card?.info?.name}</h6>)
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default RestaurantMenu;