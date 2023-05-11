import {useState} from 'react';
import search from "../assets/icons/search-interface-symbol.png"


const Searchbar = ({cardCollection, updater, placeholder}) =>{
    const [searchText, setSearchText] = useState("");
    const searchRestaurant = () => {
        const filteredRestaurants = cardCollection.filter((item) => { return item?.data?.name?.toLowerCase().includes(searchText.toLowerCase()) });
        updater(filteredRestaurants);
    }

    return(
        <div className="searchWrapper">
        <input className="p-2" type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} placeholder={placeholder} />
        <img src={search} className="search" alt="search_icon" onClick={searchRestaurant}/>
        </div> 
    )
}

export default Searchbar;