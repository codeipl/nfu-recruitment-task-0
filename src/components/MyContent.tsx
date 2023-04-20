import React from 'react';
import LoginForm from './LoginForm';
import APIAnswer from './APIAnswer';

class MyContent extends React.Component{
    constructor(props: {}){
        super(props);
    }
    
    state = {
        isSendAPIRequest: false,
        sendNewAPIRequest: true
    };

    handleAPIRequest = () => {
        this.setState({ isSendAPIRequest: true });
    }

    render(){
        return (
            <div className="content">
                {!this.state.isSendAPIRequest ? (
                    <LoginForm sendNewAPIRequest={this.handleAPIRequest} />
                ) : (
                    <APIAnswer />
                )}
            </div>
        );
    }
}

export default MyContent;