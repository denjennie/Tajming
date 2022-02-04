import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
/*Import components */
import Home from "./components/Pages/Home";
import MyCities from "./components/Pages/MyCities";
import ErrorPage from "./components/Pages/ErrorPage";
import NavbarOne from "./components/NavbarOne";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";
import "./Styles/main.scss";
import CityAdded from "./components/Pages/CityAdded";
import { Cities } from "./components/Pages/cities/Cities";


export default function App() {
  const [cities, setCities] = useState([]);
  const [nightMode, setNightMode] = useState(false);
  // add/remove link tag from head depending on nightmode state
  const addNightMode = () => {
    let head = document.head;
    // ensures that append only occurs on first rerender
    if (head.querySelector('#night-mode-style')) return;
    let link = document.createElement("link");
    link.rel = 'stylesheet';
    link.href = '/src/Styles/night-mode.css';
    link.id = 'night-mode-style';
    head.appendChild(link);
  }
  const removeNightMode = () => {
    let head = document.head;
    let e = head.querySelector('#night-mode-style');
    e && e.remove();
  }
  nightMode ? addNightMode() : removeNightMode();
  // A function that parses the localStorage.storedCities field, assigns
  // storedCities the read values. If an error is raised while attempting
  // to parse the storedCities variable is assigned an empty array.
  const readLocalStorage = () => {
    let storedCities;
    try {
      storedCities = JSON.parse(localStorage.storedCities);
    } catch (error) {
      storedCities = [];
    }
    return storedCities;
  };

  // useEffect hook that reads data from static json file and parses
  // data from localStorage. Concatenates arrays containing cities,
  // calls setCities and passes in the concatenated array
  useEffect(async () => {
    let rawData = await fetch("../src/jsonfiles/cities-timezones.json");
    let storedCities = readLocalStorage();
    let standardCities = await rawData.json();
    let fullCitiesList = storedCities.concat(standardCities);

    setCities(fullCitiesList);
  }, []);

  return (
    <Router>
      <NavbarOne {...{ nightMode }} />
      <Routes>
        {/*Page Routes*/}
        <Route path="/" element={<Home {...{ nightMode, setNightMode }} />} />
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="/MinaStader"
          element={<MyCities cities={readLocalStorage()} />}
        />
        <Route path="/NyStad" element={<CityAdded />} />
        {/*City Routes*/}
        <Route path="/:city" element={<Cities cities={cities} />} />
      </Routes>{" "}
      <Footer />
    </Router>
  );
}
