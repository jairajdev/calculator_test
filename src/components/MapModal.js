import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { useSelector } from "react-redux";
import MapView from "../views/MapView";
import LocationInfo from "./LocationInfo";
import LocationMarker from "./LocationMarker";

const initMapValue = {
  center: { lat: 13.7498, lng: 100.5391 },
  zoom: 12,
};

const MapModal = ({ openMap, handleMap }) => {
  const { locationList } = useSelector((state) => state);

  const [mapObj, setMapObj] = useState(null);
  const [googleMapApi, setGoogleMapApi] = useState(null);
  const [showInfo, setShowInfo] = useState(null);

  const setMapView = (map, maps) => {
    setGoogleMapApi(maps);
    setMapObj(map);
  };

  return (
    <div>
      <Modal open={openMap} onClose={handleMap}>
        <MapView
          handleMap={handleMap}
          mapObj={mapObj}
          googleMapApi={googleMapApi}
          bootstrapURLKeys={{
            key: "",
            region: "thailand",
            language: "en",
          }}
          defaultCenter={initMapValue.center}
          defaultZoom={initMapValue.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => setMapView(map, maps)}
        >
          {locationList &&
            locationList.map((locationData) => (
              <LocationMarker
                key={locationData.id}
                lat={locationData.lat}
                lng={locationData.long}
                locationData={locationData}
                setShowInfo={setShowInfo}
              />
            ))}
          {showInfo && (
            <LocationInfo
              key={showInfo.id}
              lat={showInfo.lat}
              lng={showInfo.lng}
              setShowInfo={setShowInfo}
              locationData={showInfo}
            />
          )}
        </MapView>
      </Modal>
    </div>
  );
};

export default MapModal;
