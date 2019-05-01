import React from "react";
import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Tooltip,
  CircleMarker
} from "react-leaflet";

const Map = ({ selectedLocation, addresses, mapCenter, currLocation }) => {
  return (
    <div className="">
      <LeafletMap
        center={
          selectedLocation.length === 0
            ? mapCenter
            : selectedLocation[0].coordinates
        }
        zoom={selectedLocation.length === 0 ? 11 : 16}
        style={{ height: "400px" }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {addresses.map(a => (
          <Marker key={a._id} position={a.coordinates}>
            <Tooltip>{a.name}</Tooltip>
          </Marker>
        ))}

        <CircleMarker center={currLocation} radius="10">
          <Tooltip>You are Here!</Tooltip>
        </CircleMarker>
      </LeafletMap>
    </div>
  );
};

export default Map;
