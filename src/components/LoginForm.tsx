import React, { useState } from "react";

interface LoginFormProps{
    sendNewAPIRequest: () => void
}

export default function LoginForm(props: LoginFormProps){    
    const [isUsernameCorrect, setIsUsernameCorrect] = useState(true);
    const [uncorrectUsernameAnswer, setUncorrectUsernameAnswer] = useState("");
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
    const [uncorrectPasswordAnswer, setUncorrectPasswordAnswer] = useState("");
    const [isUsernameInputed, setIsUsernameInputed] = useState(false);
    const [isPasswordInputed, setIsPasswordInputed] = useState(false);

    const checkIfUsernameIsCorrect = (e: { target: { value: string; }; }) => {
        const correctUsernameChecker = new RegExp(/^[A-Za-z]+$/);
        console.log(e.target.value);
        if(correctUsernameChecker.test(e.target.value)){
            setIsUsernameInputed(true);
            setIsUsernameCorrect(true);
            setUncorrectUsernameAnswer("");
        }
        else{
            setIsUsernameInputed(true);
            setIsUsernameCorrect(false); 
            setUncorrectUsernameAnswer("Username can contains only upper and lower case letters");
        }
    };

    const checkIfPasswordIsCorrect = (e: { target: { value: string; }; }) => {
        if(e.target.value.length >= 8){
            setIsPasswordInputed(true);
            setIsPasswordCorrect(true);
            setUncorrectPasswordAnswer("");
        }
        else{
            setIsPasswordInputed(true);
            setIsPasswordCorrect(false); 
            setUncorrectPasswordAnswer("Password must contains at least 8 digits");
        }
    };

    const sendAPIRequest = () => {
        event.preventDefault();
        if (isUsernameCorrect && isPasswordCorrect && isUsernameInputed && isPasswordInputed) {
            console.log("Sending request");
            props.sendNewAPIRequest();
        }
    };
    
    return(
        <form className="login-form" onSubmit={sendAPIRequest}>
            <h2>Login to the website</h2>
            <input type="text" className="inputField" placeholder="Username" onBlur={checkIfUsernameIsCorrect} />
            <div className="error">{uncorrectUsernameAnswer}</div>
            <input type="password" className="inputField" placeholder="Password" onBlur={checkIfPasswordIsCorrect} />
            <div className="error">{uncorrectPasswordAnswer}</div>
            <input type="submit" value="Send Request" />
        </form>
    );
}