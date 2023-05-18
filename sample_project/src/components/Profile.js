import React from 'react';

class Profile extends React.Component{
    constructor(props){
        super(props);
        console.log("constructor called"+this.props.name);
        this.state = {
            name : "Damu",
            relationship_status : "Single"
        }
    }

    componentDidMount(){
        console.log("componentDidMount called"+this.props.name);
    }

    componentDidUpdate(){
        console.log("Component did update called"+this.props.name);
    }

    render(){
        console.log("render called"+this.props.name);
        return(
            <div>
                 <h1 className="h1">This is our first class based component : {this.props.id}{this.state.name}</h1>
                 <h3 className="h3">Name of the component is {this.props.name}</h3>
                <button onClick={
                    ()=>{
                        this.setState(
                        {
                        relationship_status:"Married",
                        name:"Dhamu"
                    })
                    }
                }>Change status</button>
            </div>        
        )
    }
}

export default Profile;