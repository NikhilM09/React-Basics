import React from "react";
import Restaurantcard from "./Restaurantcard"
import Searchbar from "./Searchbar";
import Shimmer from "./Shimmer";
import useRestaurant from "../utilities/useRestaurant";
import useOnline from "../utilities/useOnline";

const Body = ({user}) => {

  const network_status = useOnline();
  const restaurantObj = useRestaurant();

 console.log("restaurantObj", restaurantObj);

  if(!network_status){
    return (
      <div className="container-fluid bg-dark text-center text-white">
        <h1>Sorry, you are offline</h1>
      </div>
    )
  }


  return restaurantObj?.masterCollection.length === 0 ?
  <Shimmer/>
   : (
    <div className="container">
      <Searchbar cardCollection={restaurantObj?.masterCollection} updater={restaurantObj?.updater_function} placeholder="Search for Restaurant" />
      {/* {console.log("cardArray",cardArray)} */}
      <div className="bodyContainer container">
        { restaurantObj?.collection.length === 0 ? <h1>No restaurant found</h1> : 
          restaurantObj?.collection.map((card) => {
            // console.log("cardarray", cardArray.length)
            return !card ? <h1>No restaurant found</h1> : <Restaurantcard 
            {...card?.info}
             key={card?.info?.id}
             />
          } 
          )
        }
      </div>
    </div>
    
  )
}

export default Body;