import React from 'react';

// Responsible for showing forecast div below the current weather
const Forecast = props => (
  <div className={'forecast-tile' + (props.visible ? '' : 'hidden')}>
    <div className="day2">
      <div className="forecast-date-info">
        {props.date2 && <p>{props.date2}</p>}
      </div>
      <div className="forecast-weather-info">
        <div className="forecast-weather-temp">
          {props.weather_icon2 && (
            <img
              src={`http://openweathermap.org/img/wn/${props.weather_icon2}@2x.png`}
              alt={`${props.description2}`}
            ></img>
          )}
          {props.temperature2 && (
            <p className="color-text">{props.temperature2}&#176;F</p>
          )}
        </div>
        <div className="forecast-condition">
          {props.description2 && <p>{props.description2}</p>}
        </div>
      </div>
    </div>
    <div className="day3">
      <div className="forecast-date-info">
        {props.date3 && <p>{props.date3}</p>}
      </div>
      <div className="forecast-weather-info">
        <div className="forecast-weather-temp">
          {props.weather_icon3 && (
            <img
              src={`http://openweathermap.org/img/wn/${props.weather_icon3}@2x.png`}
              alt={`${props.description3}`}
            ></img>
          )}
          {props.temperature3 && (
            <p className="color-text">{props.temperature3}&#176;F</p>
          )}
        </div>
        <div className="forecast-condition">
          {props.description3 && <p>{props.description3}</p>}
        </div>
      </div>
    </div>
    <div className="day4">
      <div className="forecast-date-info">
        {props.date4 && <p>{props.date4}</p>}
      </div>
      <div className="forecast-weather-info">
        <div className="forecast-weather-temp">
          {props.weather_icon4 && (
            <img
              src={`http://openweathermap.org/img/wn/${props.weather_icon4}@2x.png`}
              alt={`${props.description4}`}
            ></img>
          )}
          {props.temperature4 && (
            <p className="color-text">{props.temperature4}&#176;F</p>
          )}
        </div>
        <div className="forecast-condition">
          {props.description4 && <p>{props.description4}</p>}
        </div>
      </div>
    </div>
  </div>
);

export default Forecast;
