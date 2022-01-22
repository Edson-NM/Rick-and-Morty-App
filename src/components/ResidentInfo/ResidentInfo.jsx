import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";

//styles
import "./ResidentInfo.styles.css";

const ResidentInfo = ({ resident }) => {
  const [residentInfoData, setResidentInfoData] = useState({});

  useEffect(() => {
    axios.get(`${resident}`).then((res) => setResidentInfoData(res.data));
  }, []);

  return (
    <div className="residentInfo-card">
      <div className="resident-avatar">
        <img src={residentInfoData?.image} alt="character-info" />
      </div>
      <div className="resident-info">
        <p id="resident-info_name">{residentInfoData.name}</p>
        <p className="resident-info_status">
          <span
            className={
              residentInfoData.status === "Alive"
                ? "circle-green"
                : residentInfoData.status === "Dead"
                ? "circle-red"
                : "circle-gray"
            }
          ></span>
          {`${residentInfoData.status} - ${residentInfoData?.species}`}
        </p>
        <p className="resident-info_origin">
          <span>Origin:</span>
          <br /> {residentInfoData.origin?.name}
        </p>
        <p className="resident-info_episodes">
          <span>Episodes where appear:</span>
          <br />
          {residentInfoData.episode?.length}
        </p>
      </div>
    </div>
  );
};

export default ResidentInfo;
