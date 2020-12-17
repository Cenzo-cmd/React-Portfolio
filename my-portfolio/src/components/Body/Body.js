import React from 'react'
import "./Body.css";
import "../../App.css";
import helloWorldVideo from "./helloWorld.mp4";

function Body() {
    return (
        <div className="body-container">
            <video src= {helloWorldVideo} autoPlay loop muted />

            <h1>Hello World</h1>

        </div>
    )
}

export default Body
