import React, { useRef, useEffect, useState, MutableRefObject } from "react";
import maplibregl, { NavigationControl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function MyMap() {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map",
      center: [0, 0], // starting position [lng, lat]
      zoom: 1, // starting zoom
      style: {
        id: "raster",
        version: 8,
        name: "Raster tiles",
        center: [0, 0],
        zoom: 0,
        sources: {
          "raster-tiles": {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            minzoom: 0,
            maxzoom: 19,
          },
        },
        layers: [
          {
            id: "background",
            type: "background",
            paint: {
              "background-color": "#e0dfdf",
            },
          },
          {
            id: "simple-tiles",
            type: "raster",
            source: "raster-tiles",
          },
        ],
      },
      maplibreLogo: true,
    });
    // add zoom and pan buttons
    map.addControl(new NavigationControl({}));
    // Add geolocate control to the map.
    map.addControl(
      new maplibregl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      className=""
      id="map"
      ref={mapContainer}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
