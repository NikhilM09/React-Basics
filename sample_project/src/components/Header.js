import {useState} from 'react';
import {Link} from 'react-router-dom';

const Header = ({logo, label1, label2, label3, label4}) => {
    // console.log("render is called");
    const [title, setTitle] = useState("navbar");
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning shadow sticky-top py-0">
            <div className="container">
                <a className="navbar-brand py-0" href="#"><img src={logo} height="50px"></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" aria-current="page" to="">{label1}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to={"/"+label2}>{label2}</Link>
                        </li>
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
                            <Link className="nav-link text-dark" to={"/"+label3} tabIndex="-1" aria-disabled="true">{label3}</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" to="/dynamic" tabIndex="-1" aria-disabled="true">{label4}</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
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