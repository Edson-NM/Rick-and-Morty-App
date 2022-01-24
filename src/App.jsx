import "./App.css";

//images
import images from "./assets/images";

//components
import SearchBox from "./components/SearchBox/SearchBox";
import LocationInfo from "./components/LocationInfo/LocationInfo";
import { useEffect, useState } from "react";
import axios from "axios";
import getRandomNumber from "./utils/getRandomNumber";
import ResidentList from "./components/ResidentList/ResidentList";
import Pagination from "./components/Pagination/Pagination";
import Suggestions from "./components/Suggestions/Suggestions";

function App() {
  document.body.style = `background: #2c272e`;

  //state
  const [locationData, setLocationData] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [planetNames, setPlanetNames] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [idValue, setIdValue] = useState("");

  //constantes
  const residentsByPage = 12;
  const lastResidentByPage = currentPage * residentsByPage;
  const firstResidentByPage = lastResidentByPage - residentsByPage;
  const residentsShowedByPage = locationData.residents?.slice(
    firstResidentByPage,
    lastResidentByPage
  );

  //effect
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${getRandomNumber()}`)
      .then((res) => setLocationData(res.data));
  }, []);

  useEffect(() => {
    const loadName = async () => {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/location/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126"
      );
      setPlanetNames(response?.data);
    };
    loadName();
  }, []);

  //functions
  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://rickandmortyapi.com/api/location/${idValue}`)
      .then((res) => setLocationData(res.data));
    setIdValue("");
    setSearchValue("");
    setCurrentPage(1);
  };

  const handleGetValue = ({ value }) => {
    let matches = [];
    if (value.length > 0) {
      matches = planetNames.filter((planet) => {
        const regex = new RegExp(`${value}`, "gi");
        return planet.name.match(regex);
      });
    }
    setSuggestions(matches);
    setSearchValue(value);
  };

  const handleSuggest = (val1, val2) => {
    setSearchValue(val1);
    setIdValue(val2);
    setSuggestions([]);
  };

  const handlePaginate = (numberPage) => {
    setCurrentPage(numberPage);
  };

  const handleFocus = () => {
    document.getElementById("searchBox").focus();
  };

  return (
    <div className="App">
      <div className="background-app"></div>
      <div className="container">
        <h1 style={{ fontFamily: "pangolin" }}>Rick and Morty Universe</h1>
        <SearchBox
          searchValue={searchValue}
          handleGetValue={handleGetValue}
          handleSearch={handleSearch}
        />
        {suggestions.length !== 0 ? (
          <Suggestions
            suggestions={suggestions}
            handleSuggest={handleSuggest}
            handleFocus={handleFocus}
          />
        ) : (
          <>
            <LocationInfo locationData={locationData} />

            <h2>Residents</h2>

            <ResidentList residentsShowedByPage={residentsShowedByPage} />

            <Pagination
              residentsByPage={residentsByPage}
              totalresidents={locationData.residents?.length}
              handlePaginate={handlePaginate}
              currentPageSelected={currentPage}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
