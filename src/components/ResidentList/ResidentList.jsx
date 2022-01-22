import React, { useState } from "react";
import ResidentInfo from "../ResidentInfo/ResidentInfo";

//styles
import "./ResidentList.styles.css";

const ResidentList = ({ residentsShowedByPage }) => {
  return (
    <div className="residentList-card">
      {residentsShowedByPage?.map((resident) => (
        <ResidentInfo key={resident} resident={resident} />
      ))}
    </div>
  );
};

export default ResidentList;
