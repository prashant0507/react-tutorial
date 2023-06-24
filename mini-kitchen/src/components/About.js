import User from './User';
import UserClass from './UserClass';

const About = ()  => {
    return (
        <div>
            <h1>About</h1>
            <User 
            name={"Prashant Shrivastava"}
            location={"Gwalior"}
            />
            <br/>
            <UserClass 
            name={"Prashant Shrivastava"} 
            location={"Gwalior"}
            />
        </div>
    )
}

export default About;