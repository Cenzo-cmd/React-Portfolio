import React from "react";
import "./ContactInput.css";

function ContactInput() {
    return (
        <div className="container mycontainer1">
            
                <h1>Contact</h1>
            
            <form>
                <div className="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input type="text" className="form-control nameForm" id="exampleInputPassword1" />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control emailForm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control messageForm" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" id="submitButton" className="btn btn-primary">Submit</button>
            </form>
            <div id="appendHere"></div>
        </div>
    )
}

export default ContactInput;