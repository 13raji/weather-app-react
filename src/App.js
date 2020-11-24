
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
        <Forecast time="13:00" icon="CLEAR_DAY" />
        <Forecast time="16:00" icon="PARTLY_CLOUDY_DAY" />
        <Forecast time="19:00" icon="PARTLY_CLOUDY_DAY" />
        <Forecast time="22:00" icon="CLOUDY" />
        <Forecast time="01:00" icon="PARTLY_CLOUDY_NIGHT" />
        <Forecast time="04:00" icon="CLEAR_NIGHT"/>
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
