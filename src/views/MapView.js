import React from "react";
import { Fab } from "@material-ui/core";
import GoogleMapReact from "google-map-react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { theme } from "../styles";

const MapView = (props) => {
  const classes = theme();
  const { handleMap } = props;
  return (
    <div>
      <div className="mobile_view">
        <div className={classes.mobileMapBackground}>
          <div style={{ width: "100%" }}>
            <GoogleMapReact {...props}>{props.children}</GoogleMapReact>
            <Fab className={classes.fabBackButton} onClick={handleMap}>
              <ArrowBackIcon></ArrowBackIcon>
            </Fab>
          </div>
        </div>
      </div>
      <div className="desktop-view">
        <div className={classes.modal}>
          <div className={classes.desktopMapBackground}>
            <div style={{ height: "500px", width: "100%" }}>
              <GoogleMapReact {...props}>{props.children}</GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
