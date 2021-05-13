import React from "react";
import { theme } from "../styles";

const LocationMarker = ({ setShowInfo, locationData }) => {
  const classes = theme();

  return (
    <div onClick={(e) => setShowInfo(locationData)}>
      <div className={classes.marker}>
        <img src={"/assets/location_pin.png"} alt="marker" />
      </div>
    </div>
  );
};
export default LocationMarker;
