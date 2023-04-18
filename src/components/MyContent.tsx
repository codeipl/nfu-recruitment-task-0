import React from 'react';
import LoginForm from './LoginForm';
import APIAnswer from './APIAnswer';

export default class MyContent extends React.Component{
    state = {
        isSendAPIRequest: true
    };

    render(){

    return (
        <div className="content">
            {!this.state.isSendAPIRequest ? (
            <LoginForm />
            ):(
            <APIAnswer />
            )}
        </div>
    );
    }
}