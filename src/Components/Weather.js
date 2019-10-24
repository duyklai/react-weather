import React from 'react';

// Made into stateless function components
const Weather = props => (
  <div className={'weather-tile ' + (props.visible ? '' : 'hidden')}>
    <div className="date-info">
      {props.city && props.country && (
        <p className="location">
          <i className="material-icons">navigation</i>
          <span className="color-text">
            {props.city}, {props.country}
          </span>
        </p>
      )}
      {props.date && <p>{props.date}</p>}
    </div>
    <div className="weather-info">
      <div className="weather-temp">
        {props.weather_icon && (
          <img
            className="weather-status"
            src={`http://openweathermap.org/img/wn/${props.weather_icon}@2x.png`}
            alt={`${props.description}`}
          ></img>
        )}
        {props.temperature && (
          <p className="color-text">{props.temperature}&#176;F</p>
        )}
      </div>
      <div className="weather-condition">
        {props.description && <p>{props.description}</p>}
      </div>
    </div>
  </div>
);

export default Weather;
