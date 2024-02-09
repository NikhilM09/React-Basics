import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utilities/useRestaurantMenu'
import { addItem, clearCart } from '../utilities/cartSlice'
import { useDispatch, useSelector } from 'react-redux';
import ThemeContext from '../utilities/ThemeContext';

const Menu = () => {
    const { id } = useParams();
    const menu = useRestaurantMenu(id);
    const theme = useContext(ThemeContext);
    console.log(menu);
    const dispatch = useDispatch();
    const handleAddItem = (dish) => {
        console.log("dish", dish);
        dispatch(addItem(dish));
    }

    return (
        <>

            <div className="mx-5">
                {menu.normalItems.map((item) => (
                    <div key={item?.card?.card?.title}>
                        <h3 className={`${theme?.theme === "light" ? "text-dark" : "text-light"} h3`}>{item?.card?.card?.title}</h3>
                        {item?.card?.card?.itemCards.map((dish, index) => (
                            <p className={`${theme?.theme === "light" ? "text-dark" : "text-light"} my-2`} key={dish?.card?.info?.id}>
                                {index + 1} : {dish?.card?.info?.name} - ₹{dish?.card?.info?.price / 100 ||
                                    dish?.card?.info?.defaultPrice / 100} {dish?.card?.info?.isVeg ? '💚' : '❤️'}
                                <button className="btn btn-sm btn-info fw-bold" onClick={()=>handleAddItem(dish?.card?.info)}>+</button>
                            </p>
                        ))}
                    </div>
                ))}
            </div>
            <div className="mx-5">
                {menu.nestedItems.map((nestedItem, index) => (
                    <div key={nestedItem?.card?.card?.title}>
                        <h3 className={`${theme?.theme === "light" ? "text-dark" : "text-light"} h3`}>{nestedItem?.card?.card?.title}</h3>
                        <div>
                            {nestedItem?.card?.card?.categories?.map((item) => (
                                <div key={item.title}>
                                    <h6 className="h6 text-success" key={item.title}>{item.title}</h6>
                                    {item?.itemCards.map((dish, index) => (
                                        <p className={`${theme?.theme === "light" ? "text-dark" : "text-light"} my-2`} key={dish?.card?.info?.name}>
                                            {index + 1} - {dish?.card?.info?.name} : ₹ {dish?.card?.info?.price / 100} {dish?.card?.info?.isVeg ? '💚' : '❤️'}
                                            <button className="btn btn-sm btn-info fw-bold" onClick={()=>handleAddItem(dish?.card?.info)}>+</button>
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