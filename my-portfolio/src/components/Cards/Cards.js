import React from 'react';
import './Cards.css';
import Card from '../Card/Card';
import blog from "./img/blog.png";
import budgetTrackerImg from "./img/budgetTracker.png";
import google from "./img/google.png";
import employee from "./img/React-employee.png";
import weather from "./img/weather.png";
import workout from "./img/workout.png";
import food from "./img/food.png";



function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of my projects!</h1>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <ul className='cards-items'>
            <Card
              src= {budgetTrackerImg}
              text="Budget Tracker"
              website="https://still-harbor-43545.herokuapp.com/"
              info="A full stack application that will allow the user to track their finances based on your entries."
              technologies="Technologies used: Javascript, Node.js, Express, Mongo DB, HTML, CSS, Bootstrap"
            />
            <Card
              src={workout}
              text='Workout Tracker'
              website="https://whispering-headland-88180.herokuapp.com/?id=5fb5eed23226a00017fe2d2f"
              info="A full stack application that tracks your workouts and will graph based on your entries."
              technologies="Technologies used: Javascript, Node.js, Express, Mongo DB, HTML, CSS, Bootstrap"
            />
          </ul>
          <ul className='cards-items'>
            <Card
              src={employee}
              text='React Employee Organizer'
              website="https://cenzo-cmd.github.io/React-Employee-Organizer/"
              info="A simple REACT application that makes and API request and stores the response in state."
              technologies="Technologies used: Javascript, REACT, Node.js, Express, Mongo DB, HTML, CSS"
            />
            <Card
              src={google}
              text='Google-Books'
              website="https://aqueous-dawn-11366.herokuapp.com/"
              info="A full stack application allows user to search, save and delete books."
              technologies="Technologies used: Javascript, React Node.js, Express, Mongo, Mongo Atlas, HTML, CSS, Bootstrap"
            />
            <Card
              src={blog}
              text='A Blogs Life'
              website="https://its-a-blogs-life.herokuapp.com/"
              info="A full stack blog application the requires the user to create an account in order to acess the Blog App."
              technologies="Technologies used: Javascript, Node.js, Express, MYSQL, Jaws DB, HTML, CSS, Materialize"
            />
          </ul>
          <ul className='cards-items'>
          <Card
              src={weather}
              text='Weather App'
              website="https://cenzo-cmd.github.io/Weather_Forecast_Dashboard/"
              info="A simple Weather App that makes an API call based on what city and renders the forecast base on the response."
              technologies="Technologies used: Javascript, Query, HTML, CSS, Bootstrap"
            />
            <Card
              src={food}
              text='Vegan Police'
              website="https://alizehssn.github.io/scaling-octo-happiness/"
              info="This app allows the user to search products, recipes and makeup to find out what ingredients are in them.  Recipes can be searched by nutritional value or by ingredients."
              technologies="Technologies used: Javascript, Query, HTML, CSS, Bootstrap"
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
