
import './App.css';
import CityLinks from "./CityLinks";
import SearchForm from "./SearchForm";
import CurrentForecast from "./CurrentForecast";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <CityLinks />
      <SearchForm/>
      <CurrentForecast/>
      <div className="ForecastWrapper, row" id="forecast">
        <Forecast /> <Forecast /> <Forecast />
        <Forecast />
        <Forecast />
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
