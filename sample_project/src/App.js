import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import TextForm from './components/TextForm';
import Body from './components/Body';
import About from './components/About';
import { Outlet } from 'react-router-dom';
import logo from './assets/icons/imgbin-logo-brand-font-food-court-tiffin-now-hiring-LVmzf4xFFjhLKTnCSKLFeeQyu-removebg-preview.png';
import UserContext from './utilities/UserContext';
import {Provider} from "react-redux";
import store from "./utilities/store"
import ThemeContext from './utilities/ThemeContext';

function App() {
  const [mode, setMode] = useState(()=>{
    const savedMode = localStorage.getItem("mode");
    return savedMode ? savedMode : "light";
  })

  useEffect(() => {
    localStorage.setItem("mode", mode);
    if(mode==="light"){
      document.documentElement.classList.remove("dark-mode");
    }
    if(mode==="dark"){
      document.documentElement.classList.add("dark-mode");
    }
  }, [mode]);

  return (
    <Provider store={store}>
      <div className="site-wrapper">
       <ThemeContext.Provider value={{
        theme: mode,
        modifier: setMode 
      }}>
      <Header logo={logo} label1="Home" label2="About" label3="Contact Us" label4="Cart" />
        <Outlet />
        {/* <TextForm/> */}
      </ThemeContext.Provider>
    </div>
    </Provider>
  );
}


export default App;
























//Food ordering app
//Header
      //logo
      //Home
      //about us
      //contact us
      //cart
      //login
//Body-
      //search bar
      //list of restaturants
         //restaurant card
            //image
            //name
            //cuisines
            //rating
            //cost for two
//Footer
      //copyright
      //social media links


//step 1: install required packages
//redux-toolkit : core library
//react-redux : bridge between your react and redux

//step 2 : create your store
//create store using configureStore API which is provided by rtk

//step 3 : Providing your store to your app
//use Provider and pass store as a prop

//step 4 : Create slices
//use createSlice API from rtk
//name, initialState, reducers and method of exporting

//step 5 : Configuration of store
// we inserted reducer in store

//step 6 : Subscribing component to particular slice
//use useSelector to subscribe

//step 7 : Dispatching an action and updating cartslice
//use useDispatch 