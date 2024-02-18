import React, { useRef, useEffect, useState, MutableRefObject } from "react";
import maplibregl, { NavigationControl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function MyMap() {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      center: [0, 0], // starting position [lng, lat]
      zoom: 1, // starting zoom
      style: "https://demotiles.maplibre.org/style.json",
      maplibreLogo: true,
    });
    // add zoom and pan buttons
    map.addControl(new NavigationControl({}));

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      className="w-100"
      id="map"
      ref={mapContainer}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
