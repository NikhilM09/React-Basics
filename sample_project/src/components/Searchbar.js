import {useState} from 'react';
import search from "../assets/icons/search-interface-symbol.png"
import { searchRestaurant } from '../utilities/helper';


const Searchbar = ({cardCollection, updater, placeholder}) =>{
    const [searchText, setSearchText] = useState("");
    const data = searchRestaurant(cardCollection, searchText);  //returns filteredRestaurants
    return(
        <div className="searchWrapper">
        <input className="p-2" type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} placeholder={placeholder} />
        <img src={search} className="search" alt="search_icon" onClick={()=>updater(data)}/>
        </div> 
    )
}

export default Searchbar;