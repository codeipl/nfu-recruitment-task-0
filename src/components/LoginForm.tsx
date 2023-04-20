import React, { useRef } from "react";

export default class LoginForm extends React.Component{

    state = {
        isUsernameCorrect: true,
        uncorrectUsernameAnswer: "",
        isPasswordCorrect: true,
        uncorrectPasswordAnswer: "",
        isUsernameInputed: false,
        isPasswordImputed: false
    }

    checkIfUsernameIsCorrect = (e: { target: { value: string; }; }) => {
        this.setState({isUsernameInputed: true});
        const correctUsernameChecker = new RegExp(/^[A-Za-z]+$/);
        console.log(e.target.value);
        if(correctUsernameChecker.test(e.target.value)){
            this.setState({
                isUsernameCorrect: true,
                uncorrectUsernameAnswer: ""
              });
        }
        else{
            this.setState({
                isUsernameCorrect: false, 
                uncorrectUsernameAnswer: "Username can contains only upper and lower case letters"
            });
        }
    }

    checkIfPasswordIsCorrect = (e: { target: { value: string | any[]; }; }) => {
        this.setState({isPasswordInputed: true});
        if(e.target.value.length >= 8){
            this.setState({
                isPasswordCorrect: true,
                uncorrectPasswordAnswer: ""
            });
        }
        else{
            this.setState({
                isPasswordCorrect: false, 
                uncorrectPasswordAnswer: "Password must contains at least 8 digits"
            });
        }
    }

    sendAPIRequest(){
        event?.preventDefault();
        if(this.state.isUsernameCorrect && this.state.isPasswordCorrect){
            console.log("Sending request");
        }
    }

    render(){
        return(
            <form onSubmit={this.sendAPIRequest}>
                <input type="text" className="inputField" placeholder="Username" onBlur={this.checkIfUsernameIsCorrect}></input>
                <div className="error">{this.state.uncorrectUsernameAnswer}</div>
                <input type="password" className="inputField" placeholder="Password" onBlur={this.checkIfPasswordIsCorrect}></input>
                <div className="error">{this.state.uncorrectPasswordAnswer}</div>
                <input type="submit" value="Send Request"></input>
            </form>
        );
    }
}