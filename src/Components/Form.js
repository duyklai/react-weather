import React from 'react';

// Made into stateless function components
const Form = props => (
  <form className="location-form" onSubmit={props.getWeather}>
    <input
      className="city"
      name="city"
      type="text"
      placeholder="City..."
      autoComplete="off"
    />
    <input
      className="country"
      name="country"
      type="text"
      placeholder="Country..."
      autoComplete="off"
    />
    <input type="submit" value="Find" />
  </form>
);

export default Form;
