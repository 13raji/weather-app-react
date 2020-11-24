import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <form id="searchForm">
      <div className="row form-group">
        <div className="col-5">
          <button type="button" className="btn btn-link" id="currentLocation">
            Current location
          </button>
        </div>
        <div className="col-5">
          <input
            type="search"
            className="form-Control"
            placeholder="City name..."
            id="cityInput"
            autoComplete="off"
          />
        </div>
      </div>
      <div className="col-4"></div>
      <div className="col-10">
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}