import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.name, " =>> child constructor");
        //console.log(this);
        
        // How to use state in Class Component
        this.state = { 
            count:10,
            count2:20,
            gitProfile:{}
        }
    }

    // API call and update the State
    async componentDidMount(){
        console.log(this.props.name, " =>> child componenet did mount");
        const data = await fetch("https://api.github.com/users/prashant0507");
        const json = await data.json();

        // Update state
        this.setState({
            gitProfile: json
        })
        console.log(json);

        // this.timer = setInterval(()=>{ // explain the concept of componentWillUnmount
        //     console.log("set interval");
        // }, 2000)

    }

    componentDidUpdate(){
        console.log("componenet did update");
    }

    componentWillUnmount(){
        // clearInterval(this.timer);
        console.log("componenet componentWillMount"); // disabled the UI from DOM
    }

    // Update State
    updateCount = () => {
        this.setState({
            count: this.state.count+1,
            //count2: this.state.count2+1 // in this case it will not update count2 in state
        })
    }


    render() { //it will return jsx piece of code
        console.log(this.props.name, " =>> child component render");
        const {name, location} = this.props;
        const {count, count2} = this.state;
        const {login, id} = this.state.gitProfile;
        return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h2>Contact: pra989355555@gmail.com</h2>
            <h2>Git Login : {login}</h2>
            <h2>Git ID : {id}</h2>
            <h2>Count => {count}</h2>
            <h2>Count2 => {count2}</h2>
            <button onClick={() => this.updateCount()}>Update Count</button>
        </div>
        );
    }
}

export default UserClass;



/***
 * --- MOUNTING ---
 * 
 * Constructor(dummy)
 * Render(dummy like shimmer ui)
 *      <HTML dummy>
 * Component Did Mount (componentDidMount)
 *      <API Call>
 *      <thia.setState> => State variable is updated
 * 
 * --- UPDATE ---
 *      Render (API Data)
 *      <HTML (new API Data)>
 *      componentDidUpdate
 *      
 */



