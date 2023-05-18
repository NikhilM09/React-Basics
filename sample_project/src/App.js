import './App.css';
import Header from './components/Header';
import TextForm from './components/TextForm';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <div className="site-wrapper">
      <Header logo="Navbar" label1="Home" label2="About" label3="Contact Us" label4="Cart" />
      <Outlet/>
      {/* <TextForm/> */}
    </div>
    
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