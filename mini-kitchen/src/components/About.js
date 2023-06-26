import User from './User';
import UserClass from './UserClass';
import React from "react";


// Class based
class About extends React.Component {
    constructor(props){ 
        super(props);
        console.log("parent constructor");
    }

    componentDidMount(){
        console.log("parent componenet did mount");
    }

    render() {
        console.log("parent render");
        return (<div>
            <h1>About</h1>
            {/* <User 
            name={"Prashant Shrivastava"}
            location={"Gwalior"}
            /> */}
            <br/>
            <UserClass 
            name={"111 Prashant Shrivastavaaaa"} 
            location={"Gwalior"}
            />
        </div>)
    }
}

// function based
// const About = ()  => {
//     return (
//         <div>
//             <h1>About</h1>
//             {/* <User 
//             name={"Prashant Shrivastava"}
//             location={"Gwalior"}
//             /> */}
//             <br/>
//             <UserClass 
//             name={"Prashant Shrivastava"} 
//             location={"Gwalior"}
//             />
//         </div>
//     )
// }

export default About;