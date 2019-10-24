# Weather: React

This basic application was built with the goal of learning fetching API, utilizing async/await, as well as learning React Components/Structure.

When page loads, there are two input fields which prompts user to enter city and country name. When submitted, the form will take user input and fetch [Openweathermap API](https://openweathermap.org/api) to collect data on the current weather condition of said city, country. Additionally, there will be another box below the "current condition" which prints the forecast of the next 3 day (at time 9AM locally to inputted location). User can enter new cities/countries to see weather in other locations. If user does not enter in both input fields, an error message will pop up, telling user to complete the form.

Possible updates/todos: Changing color of boxes/div to match day/night cycle and/or weather effects.
Adding a time for forecast and current weather

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

For setting up dependencies.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
