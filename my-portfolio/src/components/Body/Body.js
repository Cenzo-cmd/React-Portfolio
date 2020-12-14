import React from 'react'
import "./Body.css";
import "../../App.css";

function Body() {
    return (
        <div className="body-container">
            <video src="/video/helloWorld.mp4" autoPlay loop muted />
            <h1>Hello World</h1>

        </div>
    )
}

export default Body
