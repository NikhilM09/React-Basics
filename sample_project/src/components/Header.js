import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../utilities/useOnline';
import UserContext from '../utilities/UserContext';
import { useSelector } from 'react-redux';
import ThemeContext from '../utilities/ThemeContext';

const Header = ({ logo, label1, label2, label3, label4 }) => {
    // console.log("render is called");
    const network_status = useOnline();
    // const [title, setTitle] = useState("navbar");
    const data = useContext(UserContext);
    const theme = useContext(ThemeContext);
    console.log("theme", theme);
    // console.log("data", data);
    const cartData = useSelector(store => store.cart.cartItems)
    const switchMode = (val) =>{
        if (val==="dark"){
            theme?.modifier("light");
        }
        else{
            theme?.modifier("dark");
        }
    }
    // console.log("cartData", cartData);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning shadow sticky-top py-0">
            <div className="container">
                <Link className="navbar-brand py-0" to=""><img src={logo} height="50px"></img></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" aria-current="page" to="">{label1}</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link text-dark" to={"/" + label2}>{label2}</Link>
                        </li> */}
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to={"/" + label3} tabIndex="-1" aria-disabled="true">{label3}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to={"/" + label4} tabIndex="-1" aria-disabled="true">{label4}-{cartData.length}items </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/instamart" tabIndex="-1" aria-disabled="true">Instamart</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <h3 className="h3 mx-3">{network_status ? "🟢" : "🔴"}</h3>
                    {theme?.theme ==="dark" ? <h3 className="h3" onClick={()=>switchMode(theme?.theme)}><i className="fa-solid fa-sun"></i></h3> :
                     <h3 className="h3" onClick={()=>switchMode(theme?.theme)}><i className="fa-solid fa-moon"></i></h3>}  
                    {/* <h3 className="h3">{data?.userData?.name}</h3> */}
                </div>
            </div>
        </nav>
    )
}

export default Header;




// function sum(x,y){
//     return x+y;
// }

// sum(2,3);

// props={logo:"Navbar", label1:"Home", label2:"About", label3:"Enabled"}

// {logo, label1, label2, label3}={logo:"Navbar", label1:"Home", label2:"About", label3:"Enabled"}