import React from "react";
import "./CurrentForecast.css";
import ReactAnimatedWeather from 'react-animated-weather';

export default function CurrentForecast() {
  return (
    <div className="row currentWrapper">
      <div className="col-2"></div>
      <div className="card currentLocation col-4">
        <div className="cardBody">
          <h6>Weather 'appening in:</h6>
          <h3 className="current" id="city">
            London
          </h3>
          <img src="" alt="" id="icon" />
          <ReactAnimatedWeather
        icon="FOG"
        color="#707070"
        size={69}
        animate={true}
      />
          <h4 id="description">Overcast</h4>
        </div>
      </div>
      <div className="card currentTemp col-4">
        <div className="cardBody currentVariables">
          <h6>
            <a href="/" id="celciusLink">
              °C
            </a>
            |
            <a href="/" id="fahrenheitLink">
              °F
            </a>
          </h6>
          <h3 className="current" id="currentTemp">
            5°C
          </h3>
          <h6 id="feelsLike">Feels like 3°C</h6>
          <h6 id="humidity">Humidity 12%</h6>
          <h6 id="wind">15mph windspeed</h6>
          <p className="cFooter">
            Last Updated: 10:00 24/11/20 <span id="dateTimeStamp"></span>
          </p>
        </div>
      </div>
      <div className="col"></div>
    </div>
  );
}
