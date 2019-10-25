import React from 'react';
import './App.css';
import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';
import Forecast from './Components/Forecast';

const API_KEY = 'cb097335fd62f4cf147aefee07730478';

class App extends React.Component {
  /* OLD REACT
  constructor (props) {
    super(props);
    this.state = {

    }
  }
  */

  // Initial state of object
  state = {
    date: undefined,
    temperature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    weather_icon: undefined,

    date_forecast_day2: undefined,
    temp_forecast_day2: undefined,
    description_day2: undefined,
    weather_icon_day2: undefined,

    date_forecast_day3: undefined,
    temp_forecast_day3: undefined,
    description_day3: undefined,
    weather_icon_day3: undefined,

    date_forecast_day4: undefined,
    temp_forecast_day4: undefined,
    description_day4: undefined,
    weather_icon_day4: undefined,

    visible: false,
    error: undefined
  };

  // Function to convert UNIX time of API from openweathermap to get date
  timeConverter(UNIX_timestamp) {
    var full_date = new Date(UNIX_timestamp * 1000);
    var months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    var month = months[full_date.getMonth()];
    var date = full_date.getDate();
    var time = month + ', ' + date;
    return time;
  }

  hourConverter(UNIX_timestamp) {
    var full_date = new Date(UNIX_timestamp * 1000);
    var hour = full_date.getHours();
    var time = hour;
    return time;
  }

  getWeather = async e => {
    // Prevent refresh of page
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.city.value;

    // Checking for non-empty input in form
    if (city && country) {
      // Getting current weather
      const fetch_weather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`
      );
      const data = await fetch_weather.json();
      // Getting forecast weather
      const fetch_forecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}&units=imperial`
      );
      const forecast = await fetch_forecast.json();
      // Calculate the current time to next day's time and center it around 10am local time
      let currentTime = this.hourConverter(data.dt);
      if (currentTime === 0) currentTime = 1;
      let difference = Math.ceil((24 - currentTime) / 3) + 2;

      this.setState({
        date: this.timeConverter(data.dt),
        temperature: Math.round(data.main.temp),
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        weather_icon: data.weather[0].icon,

        date_forecast_day2: this.timeConverter(forecast.list[difference].dt),
        temp_forecast_day2: Math.round(forecast.list[difference].main.temp),
        description_day2: forecast.list[difference].weather[0].description,
        weather_icon_day2: forecast.list[difference].weather[0].icon,

        date_forecast_day3: this.timeConverter(
          forecast.list[difference + 8].dt
        ),
        temp_forecast_day3: Math.round(forecast.list[difference + 8].main.temp),
        description_day3: forecast.list[difference + 8].weather[0].description,
        weather_icon_day3: forecast.list[difference + 8].weather[0].icon,

        date_forecast_day4: this.timeConverter(
          forecast.list[difference + 16].dt
        ),
        temp_forecast_day4: Math.round(
          forecast.list[difference + 16].main.temp
        ),
        description_day4: forecast.list[difference + 16].weather[0].description,
        weather_icon_day4: forecast.list[difference + 16].weather[0].icon,

        // Show div boxes when city and country have been successfully submitted
        visible: true,
        error: ''
      });
    } else {
      // When user does not fill out the form completely
      this.setState({
        error: 'Please enter a city and country'
      });
    }
  };
  render() {
    return (
      <div>
        <Title />
        {/* Passing prop of getweather function to form so when submitting, can call function */}
        {/* Passing error message when form is not filled out correctly */}
        <Form getWeather={this.getWeather} error={this.state.error} />
        {/* Passing prop of states to display on page */}
        <Weather
          date={this.state.date}
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          weather_icon={this.state.weather_icon}
          visible={this.state.visible}
        />
        {/* Passing all data of forecast of states to display on page */}
        <Forecast
          date2={this.state.date_forecast_day2}
          temperature2={this.state.temp_forecast_day2}
          description2={this.state.description_day2}
          weather_icon2={this.state.weather_icon_day2}
          date3={this.state.date_forecast_day3}
          temperature3={this.state.temp_forecast_day3}
          description3={this.state.description_day3}
          weather_icon3={this.state.weather_icon_day3}
          date4={this.state.date_forecast_day4}
          temperature4={this.state.temp_forecast_day4}
          description4={this.state.description_day4}
          weather_icon4={this.state.weather_icon_day4}
          visible={this.state.visible}
        />
      </div>
    );
  }
}

export default App;
