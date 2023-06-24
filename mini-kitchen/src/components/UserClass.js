import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        console.log(this)
    }

    render() { //it will return jsx piece of code
        const {name, location} = this.props;
        return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h2>Contact: pra989355555@gmail.com</h2>
        </div>
        );
    }
}

export default UserClass;
