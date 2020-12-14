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
              info="A full stack application that will allow the user to track their finances day to day."
            />
            <Card
              src='img/workout.png'
              text='Workout Tracker'
              website="https://whispering-headland-88180.herokuapp.com/?id=5fb5eed23226a00017fe2d2f"
            />
          </ul>
          <ul className='cards-items'>
            <Card
              src='img/React-employee.png'
              text='React Employee Organizer'
              website="https://cenzo-cmd.github.io/React-Employee-Organizer/"
            />
            <Card
              src='img/burgerApp.png'
              text='Burger App'
              website="https://afternoon-coast-80718.herokuapp.com/"
            />
            <Card
              src='img/blog.png'
              text='A Blogs Life - A full stack that application requires the user to create'
              website="https://its-a-blogs-life.herokuapp.com/"
            />
          </ul>
          <ul className='cards-items'>
          <Card
              src='img/weather.png'
              text='Weather App'
              website="https://cenzo-cmd.github.io/Weather_Forecast_Dashboard/"
            />
            <Card
              src='img/food.png'
              text='Vegan Police'
              website="https://alizehssn.github.io/scaling-octo-happiness/"
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
