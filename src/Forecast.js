import React from "react";
import "./Forecast.css";
import ReactAnimatedWeather from 'react-animated-weather';

export default function Forecast(props) {
  return (
    <div className="col-2 hoursForecast">
      <h6>{props.time}</h6>
      <h5 id="forecastTemp">3°C</h5>
      <ReactAnimatedWeather
        icon={props.icon}
        color="#707070"
        size={48}
        animate={true}
      />
      <h6>Feels like 2°C</h6>
    </div>
  );
}
