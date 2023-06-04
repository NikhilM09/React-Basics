// working of useOnline hook :

// 1) whenever your component loads, it should first check whether you are connected or not 
 
// possibility 1: You are online then it should load your component
// possibility 2 : You are offline then it should show you a message that you are offline

import { useEffect } from "react";
import { useState } from "react";

const useOnline = () => {
    
    const [isOnline, setisOnline] = useState(true);

    const handleOnline = ()=>{
        setisOnline(true);
        console.log("useOnline called");
    }

    const handleOffline = ()=>{
        setisOnline(false);
        console.log("useOffline called");
    }

   useEffect(()=>{
    window.addEventListener("online", handleOnline)

    window.addEventListener("offline", handleOffline)

    return()=>{
        window.removeEventListener("online",handleOnline);
        window.removeEventListener("offline",handleOffline);
    }
   },[]) 
   
    return isOnline;
}


export default useOnline;