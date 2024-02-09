import { Link } from 'react-router-dom'
import UserContext from '../utilities/UserContext';
import {useContext} from "react";
import { url } from '../utilities/helper';

const Restaurantcard = ({ cloudinaryImageId, name, cuisines, avgRating, costForTwoString, aggregatedDiscountInfoV3,id}) => {
    //    console.log(props,"props");
    const data = useContext(UserContext);

    return (
        <Link to={`/menu/${id}`}className="restaurantCard p-2">
                <img src={url + cloudinaryImageId} width="100%" alt="restaurant" />
                <h6 className="mb-2">{name}</h6>
                <h6 className="mb-2 cuisines">{cuisines.join(",")}</h6>
                <h6 className="mb-2">Rating {avgRating}/5</h6>
                <h6 className="mb-2">{costForTwoString}</h6>
                {aggregatedDiscountInfoV3 && <h6 className="mb-2">Offer : {aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}</h6>}
                {/* <h6 className="mb-2 text-dark">User : {data?.userData?.name}</h6>
                <h6 className="mb-2 text-dark">Email :{data?.userData?.email}</h6> */}
        </Link>
    )
}


export default Restaurantcard;




//context : When we require certain data throughout our application
//context is like central storage for all your data

//Important steps : 
//step 1Create context : you have to set the initial data
     //create UserContext.js in utilities folder
    // use createContext from react library to create context

//Step no 2 : Displaying data in random components
    //use hook known as useContext and store data in any variable in the component where you want to display data

//Step no .3 : Displaying data in class based components
    //use UserContext.consumer which takes in callback function

//Step no 4 : Modifying data in context
    //providing context to entire application