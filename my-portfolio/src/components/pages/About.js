import React from "react";
import "../../App.css";



function About() {
    return(
        <div className="aboutContainer">
            <div className="container containerabout">
            <div className="heading1">
                <h1 className="aboutH1">About Me</h1>
                <hr />
                <article className="row">
                    <div>
                        <img src="img/me.jpeg" className="img-fluid meimg" />
                        <p> My name is Vincent Doria Jr. and I was born in Greenwich, CT. I was raised in a very loving family that taught me the importance to be myself, be respectful to others and follow whatever you are passionate about. I have always
                            enjoyed meeting and communicating with new people, this is how I ended up working in different restaurants for over 10 years. I started as a waiter and over time worked up to General Manager of a large restaurant chain called
                            Lemonade. Being a general manager taught me very important life lessons, that to this day help me on a daily basis.</p>

                        <p> I am currenlty taking a Full Stack MERN Bootcamp Course from the University of Texas and am actively looking to grow in this field.  </p>
                        <a href="./Assets/docs/Vincent R. Doria_Resume 4.2020.doc.docx" target="_blank">Resume</a><br />
                        <a href="mailto: vrdphone@gmail.com">vrdphone@gmail.com</a>
                    </div>
                </article>

            </div>
        </div>
        </div>
    )
}

export default About;