import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY = 'cb097335fd62f4cf147aefee07730478';
// My link http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cb097335fd62f4cf147aefee07730478&units=imperial

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
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async e => {
    // Prevent refresh of page
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.city.value;

    // Checking for non-empty input in form
    if (city && country) {
      const fetch_weather = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`
      );
      const data = await fetch_weather.json();
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      });
    } else {
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
        <Form getWeather={this.getWeather} />
        {/* Passing prop of states to display on page */}
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
