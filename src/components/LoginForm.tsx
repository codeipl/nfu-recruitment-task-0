import React from "react";

interface LoginFormProps{
    sendNewAPIRequest: () => void
}

class LoginForm extends React.Component<LoginFormProps>{    
    state = {
        isUsernameCorrect: true,
        uncorrectUsernameAnswer: "",
        isPasswordCorrect: true,
        uncorrectPasswordAnswer: "",
        isUsernameInputed: false,
        isPasswordInputed: false,
    }

    checkIfUsernameIsCorrect = (e: { target: { value: string; }; }) => {
        const correctUsernameChecker = new RegExp(/^[A-Za-z]+$/);
        console.log(e.target.value);
        if(correctUsernameChecker.test(e.target.value)){
            this.setState({
                isUsernameInputed: true,
                isUsernameCorrect: true,
                uncorrectUsernameAnswer: ""
              });
        }
        else{
            this.setState({
                isUsernameInputed: true,
                isUsernameCorrect: false, 
                uncorrectUsernameAnswer: "Username can contains only upper and lower case letters"
            });
        }
    }

    checkIfPasswordIsCorrect = (e: { target: { value: string; }; }) => {
        if(e.target.value.length >= 8){
            this.setState({
                isPasswordInputed: true,
                isPasswordCorrect: true,
                uncorrectPasswordAnswer: ""
            });
        }
        else{
            this.setState({
                isPasswordInputed: true,
                isPasswordCorrect: false, 
                uncorrectPasswordAnswer: "Password must contains at least 8 digits"
            });
        }
    }

    sendAPIRequest = () => {
        event.preventDefault();
        if (this.state.isUsernameCorrect && this.state.isPasswordCorrect && this.state.isUsernameInputed && this.state.isPasswordInputed) {
            console.log("Sending request");
            this.props.sendNewAPIRequest();
        }
    };

    render(){
        return(
            <form className="login-form" onSubmit={this.sendAPIRequest}>
                <h2>Login to the website</h2>
                <input type="text" className="inputField" placeholder="Username" onBlur={this.checkIfUsernameIsCorrect} />
                <div className="error">{this.state.uncorrectUsernameAnswer}</div>
                <input type="password" className="inputField" placeholder="Password" onBlur={this.checkIfPasswordIsCorrect} />
                <div className="error">{this.state.uncorrectPasswordAnswer}</div>
                <input type="submit" value="Send Request" />
            </form>
        );
    }
}

export default LoginForm;