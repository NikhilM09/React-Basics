import React from "react";
import Restaurantcard from "./Restaurantcard"
import { useState, useEffect } from "react";
import Searchbar from "./Searchbar";

const Body = () => {
  const [cardArray, setCardArray] = useState([]);
  const [masterCards, setMasterCards] = useState("");


  async function getRestaurantData() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setCardArray(json?.data.cards[2]?.data?.data?.cards);
    setMasterCards(json?.data.cards[2]?.data?.data?.cards);
  }

  useEffect(() => {
    getRestaurantData();
  }, []);

  console.log("rendered");

  return masterCards?.length === 0 ? <h1>Loading....</h1> : (
    <div className="container">
      <Searchbar cardCollection={masterCards} updater={setCardArray} placeholder="Search for Restaurant" />
      {/* {console.log("cardArray",cardArray)} */}
      <div className="bodyContainer container">
        { cardArray.length === 0 ? <h1>No restaurant matches your search</h1> :
          cardArray.map((card) => {
            console.log("cardarray", cardArray.length)
            return !card ? <h1>No restaurant found</h1> : <Restaurantcard {...card.data} key={card.data.id} />
          }
          )
        }
      </div>
    </div>
  )

}

export default Body;