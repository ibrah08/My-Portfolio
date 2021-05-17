import React from 'react';
import { Spring, useSpring } from 'react-spring';

class contactMe extends React.Component{
constructor(props) {
    super(props);
    this.state = {
      message: "",
      firstName: "",
      lastName: ""
    }
}
    firstName = (event) =>{
        this.setState({firstName: event.target.value});
    }
    lastName = (event) =>{
        this.setState({lastName: event.target.value});
    }
    handleSubmit = (event) =>{
        alert("Hi " + this.state.firstName+ " " + this.state.lastName + " your mesaage has been sent")
        event.preventDefault();
    }
    render(){
    return(
        <div> 
            <form className="myForm" onSubmit={this.handleSubmit}>
                <label>
                    First name
                </label>
                    <input type="Name" name="First Name" onChange={this.firstName}></input>
                <label>
                    Last Name
                </label>
                    <input type="Last Name" name="Last Name" onChange={this.lastName}></input>
                <label>
                    Enter Message
                </label>
                    <input type="text" name="Message"></input>
                <label>
                    Email
                </label>
                    <input type="email" name="email"></input>
                    <button className="myButton" type="submit" > Send</button>
                </form>         
                
        </div>
    )
    }
    
}



export default contactMe;