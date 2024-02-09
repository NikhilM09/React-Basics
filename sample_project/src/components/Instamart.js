import {useState} from 'react';

const Section = ({title, description, isActive,updateIndex}) =>{

    return(
        <div>
            <div><h1 className = "h1 border p-2 mb-4" onClick={updateIndex}>{title}</h1></div>
            {isActive && <h3 className = "h3 p-2 mb-4">{description}</h3>}
        </div>
    )
} 

const Instamart =() =>{
    const [activeIndex, setActiveIndex] = useState(1);
    return(
        <div className="container">
            <Section
             title = "Instamart" 
             description = "Instamart is a grocery delivery service that delivers groceries to your doorstep in 2 hours or less."
             isActive = {activeIndex===1}
             updateIndex = {()=>setActiveIndex(1)}
             />
            <Section 
            title = "Team Instamart" 
            description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            isActive = {activeIndex===2}
            updateIndex = {()=>setActiveIndex(2)}

            />
            <Section 
            title = "Our Mission" 
            description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            isActive = {activeIndex===3}
            updateIndex = {()=>setActiveIndex(3)}
            />
            <Section 
            title = "Our Vision" 
            description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            isActive = {activeIndex===4}
            updateIndex = {()=>setActiveIndex(4)}
            />
            
        </div>
    )
}

export default Instamart;