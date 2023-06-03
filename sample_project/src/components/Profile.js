import { useEffect } from 'react';
import {useState} from 'react';

const Profile = ({name, age}) => {

    const[count, setCount] = useState(4);
    const [count1, setCount1] = useState(45);

    useEffect(()=>{
        // console.log("useEffect called");
    }, [])


    return (
        <div>
            <h1 className="h1">This is my profile component : {name} and {age}</h1>
            <h3 className="h3">state variable is {count}</h3>
            <h3 className="h3">Second state variable is {count1}</h3>
            <button onClick={()=>setCount1(count1+1)}>Change state 1</button>
        </div>
    )
}

export default Profile;

//const [name] = useState("SITH");