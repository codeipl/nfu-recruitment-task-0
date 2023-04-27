import React, { useState } from 'react';
import LoginForm from './LoginForm';
import APIAnswer from './APIAnswer';

export default function MyContent(){

    const [isSendAPIRequest, setIsSendAPIRequest] = useState(false);
    const [sendNewAPIRequest, setSendNewAPIRequest] = useState(true);

    const handleAPIRequest = () => {
        setIsSendAPIRequest(true);
    };

    return (
        <div className="content">
            {!isSendAPIRequest ? (
                <LoginForm sendNewAPIRequest={handleAPIRequest} />
            ) : (
                <APIAnswer />
            )}
        </div>
    );

}