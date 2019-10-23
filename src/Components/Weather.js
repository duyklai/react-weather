import React from 'react';

// Made into stateless function components
const Weather = props => (
  <div className="weather-tile">
    <div className="date-info">
      {props.city && props.country && (
        <p className="location">
          <i class="material-icons">navigation</i>
          {props.city}, {props.country}
        </p>
      )}
    </div>
    <div className="weather-info">
      <div className="weather-temp">
        {props.temperature && <p>{props.temperature}&#176;F</p>}
      </div>
      <div className="weather-condition">
        {props.humidity && <p>Humidity: {props.humidity}%</p>}
        {props.description && <p>{props.description}</p>}
      </div>
    </div>

    {props.error && <p>{props.error}</p>}
  </div>
);

export default Weather;
