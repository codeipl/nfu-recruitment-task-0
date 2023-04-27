import React, { useState, useEffect } from "react";
import axios from "axios";


export default function APIAnswer(){

    const[answer, setAnswer] = useState("");
    const[image, setImage] = useState("");
    const[isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAnswer = async () => {
          if (isLoading) {
            const response = await axios.get("https://yesno.wtf/api");
            setAnswer(response.data.answer);
            setImage(response.data.image);
            setIsLoading(false);
          }
        };
        fetchAnswer();
      }, [isLoading]);
 
    return (
        <div className="answer-container">
        <div className="answer">{answer == "yes" ? (<span className="answer-yes">Success</span>) : (<span className="answer-no">Failure</span>)}</div>
        <div className="answer-image"><img src={image} alt="Image" /></div>  
        </div>
    );
}