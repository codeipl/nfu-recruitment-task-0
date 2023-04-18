import React from "react";

export default class LoginForm extends React.Component{
    render(){
        return(
            <form>
                <input type="text"></input>
                <input type="password"></input>
                <input type="submit"></input>
            </form>
        );
    }
}