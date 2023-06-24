const User = ({name, location}) => { // using destructuring
//const User = (props) => { // without destructuring
    return (
        <div className="user-card">
             <h2>Name: {name}</h2> {/* {props.name} => without destructuring */}
            <h2>Location: {location}</h2>
            <h2>Contact: pra98935@gmail.com</h2>
        </div>
    )
}

export default User;