import React from 'react';
import LoginForm from './LoginForm';
import APIAnswer from './APIAnswer';

export default class MyContent extends React.Component{
    render(){
        let isSendAPIRequest;

    return (
        <div className="content">
            {!isSendAPIRequest ? (
            <LoginForm />
            ):(
            <APIAnswer />
            )}
        </div>
    );
    }
}