# Weather: React

This basic application was built with the goal of learning fetching API, utilizing async/await, as well as learning React Components/Structure.

When page loads, there are two input fields which prompts user to enter city and country name. When submitted, the form will take user input and fetch [Openweathermap API](https://openweathermap.org/api) to collect data on the current weather condition of said city, country. Additionally, there will be another box below the "current condition" which prints the forecast of the next 3 day (according to the user local time of inputted location). User can enter new cities/countries to see weather in other locations. If user does not enter in both input fields, an error message will pop up, telling user to complete the form.

Possible updates/todos: Changing color of boxes/div to match day/night cycle and/or weather effects.
Adding time for forecast and current weather

![alt text](https://github.com/duyklai/react-weather/blob/master/src/img/demo.png 'Demo')

Current [Demo](https://duyklai.github.io/react-weather/)

## Running on local machine

In the project directory, you can run:

### `npm install`

For setting up dependencies.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
