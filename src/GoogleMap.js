// GoogleMapComponent.js
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import './styles.css';

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 35.83283364982167,
  lng: 10.604037735109122,
};

const GoogleMapComponent = () => {
  return (
    <div className="box">
     
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="containerStyle"> 
       {/* LoadScript is used to load the Google Maps JavaScript API */}
        <LoadScript googleMapsApiKey="AIzaSyDYnOYm-htx1mdZGoJmNSbyQZ4knGcUjlw">
          {/* GoogleMap component to render the map */}
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
           
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default GoogleMapComponent;
