import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Menu = () => {
    const [items, setItems] = useState([]);
    const [nestedItems, setNestedItems] = useState([]);
    const normalItem = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    const nestedItem = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
    const {id} = useParams();
    console.log(id);
    const getMenu = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${id}&submitAction=ENTER`);
        const menu = await data.json();
        console.log("menu", menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card["@type"] === normalItem));
        console.log("nestedMenu", menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card["@type"] === nestedItem));
        setItems(menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card["@type"] === normalItem));
        setNestedItems(menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card["@type"] === nestedItem));
    }

    useEffect(() => {
        getMenu()
    }, [])
    console.log("item", items);
    console.log("nestedItem", nestedItems);

    return (
        <>
            <div className="mx-5">
                {items.map((item) => (
                    <div key={item?.card?.card?.title}>
                        <h3 className="h3">{item?.card?.card?.title}</h3>
                        {item?.card?.card?.itemCards.map((dish, index) => (
                            <p className="text-dark" key={dish?.card?.info?.id}>
                                {index+1} : {dish?.card?.info?.name} - ₹{dish?.card?.info?.price/100 || dish?.card?.info?.defaultPrice/100 } {dish?.card?.info?.isVeg ? '💚' : '❤️'}</p>
                        ))}
                    </div>
                ))}
            </div>
            <div className="mx-5">
                {nestedItems.map((nestedItem, index) => (
                    <div key={nestedItem?.card?.card?.title}>
                        <h3 className="h3">{nestedItem?.card?.card?.title}</h3>
                        <div>
                            {nestedItem?.card?.card?.categories?.map((item) => (
                                <div key={item.title}>
                                    <h6 className="h6 text-success" key={item.title}>{item.title}</h6>
                                    {/* <div> */}
                                    {item?.itemCards.map((dish, index) => (
                                        <p className="text-dark" key={dish?.card?.info?.name}>
                                            {index + 1} - {dish?.card?.info?.name} : ₹ {dish?.card?.info?.price / 100} {dish?.card?.info?.isVeg ? '💚' : '❤️'}
                                        </p>
                                    ))}
                                    {/* </div> */}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Menu;

//We want to filter out cards with type as itemCategory and nestedItemCategory
//We will make two state variables to store items and nestedItems
//identify condition to filter out cards


//four sections
//1) Restaurant details : image, name, rating, reviews, delivery time, cost for two, cuisines
//2) Offers : offers, promos, discounts
//3) Menu : items, nestedItems
//4) footer : restaurant address, contact number, about restaurant, terms and conditions, privacy policy, social media links