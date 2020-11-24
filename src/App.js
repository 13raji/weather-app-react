
import './App.css';
import CityLinks from "./CityLinks";
import SearchForm from "./SearchForm";
import CurrentForecast from "./CurrentForecast";

function App() {
  return (
    <div className="App">
      <CityLinks />
      <SearchForm/>
      <CurrentForecast/>
    </div>
  );
}

export default App;
