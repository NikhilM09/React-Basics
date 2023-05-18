
import Profile from "./Profile";
import React from "react";
// const About = () => {
//     return(
//         <div className="text-center">
//             <h1 className="h1">This is my About us Page</h1>
//             <h4 className="h4">This is a food ordering website</h4>
//             <Profile name="nikhil" id="123" />
//             <Profile name="suresh" id="456" />
//         </div>
//     )
// }

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor called");
    }

    componentDidMount(){
        console.log("Parent componentDidMount called");
    }

    componentDidUpdate(){
        console.log("Parent componentDidUpdate called");
    }
    render(){
        console.log("Parent render called");
        return(
                    <div className="text-center">
                        <h1 className="h1">This is my About us Page</h1>
                        <h4 className="h4">This is a food ordering website</h4>
                        <Profile name="nikhil" id="123" />
                        <Profile name="suresh" id="456" />
                    </div>
        )
    }

}

export default About;