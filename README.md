# Travel Weather Application
This application allows user to enter a city (destination) and the date (travel date). This will connect to 3 different APIs then display the weather condition and image of the location. If the trip is within a week, you will get the current weather forecast. If the trip is in the future, you will get a predicted forecast.

## Using the application on your local system
- clone the repo using git clone https://github.com/lumidee007/travel-planner.git
- run npm install
- run run start for the production build
-  visit http://localhost:1922/ to access the application.


# APIS used for the project
- Geonames
- Pixabay
- Weatherbit
_ Openweather 

# Setup project environment [ dependencies & devDependencies ]

## dependencies
- express
- webpack
- webpack-cli


## devDependencies
- babel/core
- babel/preset-env
- babel-loader
- clean-webpack-plugin
- css-loader
- html-webpack-plugin
- jest
- jest-webpack
- mini-css-extract-plugin
- node-sass
- optimize-css-assets-webpack-plugin
- sass-loader
- style-loader
- terser-webpack-plugin
- webpack-dev-server
- workbox-webpack-plugin


# Config
- webpack.dev.js for developement mode. 'npm run build-dev' run the script and also start the webpack dev server.
- webpack.prod.js for production mode. 'npm run build-prod' run the script to generate a dist folder.
- npm run start: starts the server on port 1990.
- npm run test: run jest to test our js function.



# Offline functionality
- service workers in webpack is installed to ensure site is available even when the local server stop running.
