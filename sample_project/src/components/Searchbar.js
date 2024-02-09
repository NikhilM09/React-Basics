import { useState, useContext} from 'react';
import search from "../assets/icons/search-interface-symbol.png"
import { searchRestaurant } from '../utilities/helper';
import UserContext from '../utilities/UserContext';

const Searchbar = ({ cardCollection, updater, placeholder }) => {
    const [searchText, setSearchText] = useState("");
    const data = searchRestaurant(cardCollection, searchText);  //returns filteredRestaurantsconst
    const {userData, modifier} = useContext(UserContext);
    // console.log("username", username);
    const changeUser = (e) => {
        modifier({
            ...userData,
            name : e.target.value,
        });
        //setUserDetails
    }

    const changeUserEmail = (e) =>{
        modifier({
            ...userData,
            email : e.target.value
        });
    }
    return (
        <>
            <div className="searchWrapper">
                <input className="p-2" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder={placeholder} />
                <img src={search} className="search" alt="search_icon" onClick={() => updater(data)} />
            </div>
            {/* Username : <input type="text" value={userData?.name} onChange={changeUser}/>
            Email : <input type="text" value={userData?.email} onChange={changeUserEmail}/> */}
        </>
    )
}

export default Searchbar;