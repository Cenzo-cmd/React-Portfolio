import React from 'react';
import './Cards.css';
import Card from '../Card/Card';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of my projects!</h1>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <ul className='cards-items'>
            <Card
              src='img/budgetTracker.png'
              text="Budget Tracker"
              website="https://still-harbor-43545.herokuapp.com/"
              info="A full stack application that will allow the user to track their finances based on your entries."
              technologies="Technologies used: Javascript, Node.js, Express, Mongo DB, HTML, CSS, Bootstrap"
            />
            <Card
              src='img/workout.png'
              text='Workout Tracker'
              website="https://whispering-headland-88180.herokuapp.com/?id=5fb5eed23226a00017fe2d2f"
              info="A full stack application that tracks your workouts and will graph based on your entries."
              technologies="Technologies used: Javascript, Node.js, Express, Mongo DB, HTML, CSS, Bootstrap"
            />
          </ul>
          <ul className='cards-items'>
            <Card
              src='/img/React-employee.png'
              text='React Employee Organizer'
              website="https://cenzo-cmd.github.io/React-Employee-Organizer/"
              info="A simple REACT application that makes and API request and stores the response in state."
              technologies="Technologies used: Javascript, REACT, Node.js, Express, Mongo DB, HTML, CSS"
            />
            <Card
              src='/img/burgerApp.png'
              text='Burger App'
              website="https://afternoon-coast-80718.herokuapp.com/"
              info="A full stack application that can create 'burgers' and consume them base on you click."
              technologies="Technologies used: Javascript, Node.js, Express, MYSQL, Jaws DB, HTML, CSS, Bootstrap"
            />
            <Card
              src='/img/blog.png'
              text='A Blogs Life'
              website="https://its-a-blogs-life.herokuapp.com/"
              info="A full stack blog application the requires the user to create an account in order to acess the Blog App."
              technologies="Technologies used: Javascript, Node.js, Express, MYSQL, Jaws DB, HTML, CSS, Materialize"
            />
          </ul>
          <ul className='cards-items'>
          <Card
              src='/img/weather.png'
              text='Weather App'
              website="https://cenzo-cmd.github.io/Weather_Forecast_Dashboard/"
              info="A simple Weather App that makes an API call based on what city and renders the forecast base on the response."
              technologies="Technologies used: Javascript, Query, HTML, CSS, Bootstrap"
            />
            <Card
              src='img/food.png'
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
