
import {Component} from "react";
import Profileclass from "./Profileclass";
import Profile from "./Profile";
import { render } from "@testing-library/react";

// const About = () => {
//     return(
//         <div className="text-center">
//             <h1 className="h1">This is my About us Page</h1>
//             <h4 className="h4">This is a food ordering website</h4>
//             <Profile name="SITH" age="32"/>
//             <Profileclass name="class" age="40"/>
//         </div>
//     )
// }


class About extends Component {
    constructor(props){
        super(props);
        console.log("Parent constructor called");
    }

    componentDidMount(){
        console.log("Parent componentDidMount method called");
        this.timer = setInterval(()=>{
            console.log("I am setInterval");
        },1000)
    }

    componentDidUpdate(){
        console.log("parent componentDidUpdate method called");
    }

    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("parent componentWillUnmount method called");
    }
    render(){
        console.log("Parent render method called");
        return(
            <div className="text-center">
            <h1 className="h1">This is my About us Page with class based component</h1>
            <h4 className="h4">This is a food ordering website</h4>
            <Profile name="SITH" age="32"/>
            <Profileclass name="class1" age="40"/>
            {/* <Profileclass name="class2" age="40"/> */}
        </div>
        )
    }
}

export default About;

//damu
//parent constructor
//parent render     
//child constructor
//child render
//child componentDidMount
//parent componentDidMount
//child componentDidUpdate