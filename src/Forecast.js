import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="col-2 hoursForecast">
      <h6>2am</h6>
      <h5 id="forecastTemp">3°C</h5>
      <h4>☁</h4>
      <h6>Feels like 2°C</h6>
    </div>
  );
}
