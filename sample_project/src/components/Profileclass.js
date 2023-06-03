import React from 'react';


class Profileclass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                login: "SITH",
                id : "2"
            },
        }
        console.log("child constructor method called"+this.props.name);
    }


    async componentDidMount(){
        //best place to make an API call
        const data = await fetch("https://api.github.com/users/nikhilm09");
        const json = await data.json();
        console.log(json);
        this.setState({userInfo: json}) //updating state variable
        console.log("child componentDidMount method called"+this.props.name);
    }

    componentDidUpdate(prevProps, prevState){
        console.log("child componentDidUpdate method called"+this.props.name);
        if(this.state.userInfo!==prevState.userInfo || this.props.name!==prevProps.name){
            console.log("state updated");
        }
        else{
            console.log("state not updated");
        }
    }

    // componentWillUnmount(){
    //     console.log("child componentWillUnmount method called"+this.props.name);
    // }
    render() {
        console.log("child render method called"+this.props.name);
        return (
            <div>
                <h1 className="h1">
                    This is my class based profile component : {this.props.name} {this.props.age}
                </h1>
                <h3 className="h3">First state variable is {this.state.userInfo.id}</h3>
                <h3 className="h3">Second state variable is {this.state.userInfo.login}</h3>
                {/* <button onClick={()=>this.setState({})}>
                    Change count
                </button> */}
                {/* I am  passing another prop :  */}
            </div>
        )
    }
}

export default Profileclass;


//basic syntax for class based component
//how to pass props to class based component
//how to declare state in class based component