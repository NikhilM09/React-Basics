import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utilities/useRestaurantMenu'

const Menu = () => {
    const {id} = useParams();
    const menu = useRestaurantMenu(id);
    console.log(menu);

    return (
        <>
            <div className="mx-5">
                {menu.normalItems.map((item) => (
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
                {menu.nestedItems.map((nestedItem, index) => (
                    <div key={nestedItem?.card?.card?.title}>
                        <h3 className="h3">{nestedItem?.card?.card?.title}</h3>
                        <div>
                            {nestedItem?.card?.card?.categories?.map((item) => (
                                <div key={item.title}>
                                    <h6 className="h6 text-success" key={item.title}>{item.title}</h6>
                                    {item?.itemCards.map((dish, index) => (
                                        <p className="text-dark" key={dish?.card?.info?.name}>
                                            {index + 1} - {dish?.card?.info?.name} : ₹ {dish?.card?.info?.price / 100} {dish?.card?.info?.isVeg ? '💚' : '❤️'}
                                        </p>
                                    ))}
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