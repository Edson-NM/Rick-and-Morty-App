import React from "react";

//styles
import "./LocationInfo.styles.css";

const LocationInfo = ({ locationData }) => {
  return (
    <div className="locationInfo-card">
      <h2>
        Location:
        {` ${locationData.name}`}
      </h2>
      <div>
        <p>
          <b>type: </b>
          {locationData.type}
        </p>
        <p>
          <b>dimension: </b>
          {locationData.dimension}
        </p>
        <p>
          <b>population: </b>
          {locationData.residents?.length}
        </p>
      </div>
    </div>
  );
};

export default LocationInfo;
