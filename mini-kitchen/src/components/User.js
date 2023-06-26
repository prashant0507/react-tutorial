import {useState} from "react";

const User = ({name, location}) => { // using destructuring
//const User = (props) => { // without destructuring
    
    // How to use state in Function Component
    const [count, setCount] = useState(10); 
    const [count2] = useState(20);

    const updateCount = () => {
        setCount(30);
    }

    return (
        <div className="user-card">
            <h2>Name: {name}</h2> {/* {props.name} => without destructuring */}
            <h2>Location: {location}</h2>
            <h2>Contact: pra98935@gmail.com</h2>
            <h2>Count => {count}</h2>
            <h2>Count2 => {count2}</h2>
            <button onClick={() => updateCount()}>Update Count</button>
            
        </div>
    )
}

export default User;