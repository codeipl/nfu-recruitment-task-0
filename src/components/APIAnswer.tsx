import React, { useEffect } from "react";
import axios from "axios";


export default class APIAnswer extends React.Component{

state = {
    answer: "",
    image: "",
    isLoading: true
}

async componentDidMount(){
    if (this.state.isLoading) {
        const response = await axios.get("https://yesno.wtf/api");
        this.setState({
          answer: response.data.answer,
          image: response.data.image,
          isLoading: false,
        });
    }
}

render(){   
    return (
    <div className="answer-container">
        <div className="answer">{this.state.answer == "yes" ? (<span className="answer-yes">Success</span>) : (<span className="answer-yes">Failure</span>)}</div>
        <div className="answer-image"><img src={this.state.image} alt="Image" /></div>  
    </div>
    );
  }
}