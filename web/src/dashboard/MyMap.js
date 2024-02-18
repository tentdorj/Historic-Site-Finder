import React, { useRef, useEffect, useState, MutableRefObject } from "react";
import maplibregl, { NavigationControl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function MyMap({ sites }) {
  const mapContainer = useRef(null);
  // useEffect(() => {
  //   if (sites.length < 0) return;
  //   for (let index = 0; index < sites.length; index++) {
  //     const element = sites[index];
  //     const marker = new maplibregl.Marker()
  //       .setLngLat([element.point[0], element.point[1]])
  //       .addTo(mapContainer.current);
  //   }
  // }, [sites]);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map",
      center: [-114.06886, 51.050799], // starting position [lng, lat]
      zoom: 8, // starting zoom
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
    const regex = /POINT \(([-.\d]+) ([-.\d]+)\)/;

    for (let index = 0; index < sites.length; index++) {
      const element = sites[index].site_point;
      const match = element.match(regex);

      const x = parseFloat(match[1]);
      const y = parseFloat(match[2]);
      console.log("X Coordinate:", x);
      console.log("Y Coordinate:", y);

      const marker = new maplibregl.Marker().setLngLat([x, y]).addTo(map);
    }
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
