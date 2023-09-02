import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import mapData from "./GeoJson/map.geojson";

const WorldMap = (props) => {
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  return (
    <div>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} fill={"#CCCCCC"} />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
