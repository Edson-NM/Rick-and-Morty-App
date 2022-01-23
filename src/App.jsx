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

function App() {
  document.body.style = `background: #2c272e`;

  //state
  const [locationData, setLocationData] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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

  //functions
  const handleGetValue = ({ value }) => {
    setSearchValue(value);
  };

  const handleSearchById = (e) => {
    e.preventDefault();
    axios
      .get(`https://rickandmortyapi.com/api/location/${searchValue}`)
      .then((res) => setLocationData(res.data));
    setSearchValue("");
    setCurrentPage(1);
  };

  const handlePaginate = (numberPage) => {
    setCurrentPage(numberPage);
  };

  return (
    <div className="App">
      <div className="background-app"></div>
      <div className="container">
        <h1 style={{ fontFamily: "pangolin" }}>Rick and Morty Universe</h1>
        <SearchBox
          searchValue={searchValue}
          handleGetValue={handleGetValue}
          handleSearchById={handleSearchById}
        />
        <LocationInfo locationData={locationData} />

        <h2>Residents</h2>

        <ResidentList residentsShowedByPage={residentsShowedByPage} />

        <Pagination
          residentsByPage={residentsByPage}
          totalresidents={locationData.residents?.length}
          handlePaginate={handlePaginate}
          currentPageSelected={currentPage}
        />
      </div>
    </div>
  );
}

export default App;
