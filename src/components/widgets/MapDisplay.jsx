import React from "react";

function MapDisplay() {
  async function init() {
    await customElements.whenDefined("gmp-map");

    const map = document.querySelector("gmp-map");
    const marker = document.querySelector("gmp-advanced-marker");
    const placePicker = document.querySelector("gmpx-place-picker");
    // const infowindow = new google.maps.InfoWindow();

    map.innerMap.setOptions({
      mapTypeControl: false,
    });

    placePicker.addEventListener("gmpx-placechange", handlePlaceChange);

    function handlePlaceChange() {
      const place = placePicker.value.formattedAddress;

      // 使用 Places Service 進行搜索
      const service = new google.maps.places.PlacesService(map.innerMap);
      service.textSearch({ query: place }, (results, status) => {
        if (
          status === google.maps.places.PlacesServiceStatus.OK &&
          results.length > 0
        ) {
          const place = results[0];

          if (placePicker.setInputValue) {
            placePicker.setInputValue(place.name);
          }

          updateMap(place);
        }
      });
    }

    function updateMap(place) {
      if (place.geometry.viewport) {
        map.innerMap.fitBounds(place.geometry.viewport);
      } else {
        map.center = place.geometry.location;
        map.zoom = 17;
      }

      marker.position = place.geometry.location;
      // infowindow.setContent(
      //   `<strong style="font-size: 26px; color: #4A859F">${place.name}</strong>`
      // );
      // infowindow.open(map.innerMap, marker);
    }
  }

  document.addEventListener("DOMContentLoaded", init);
  async function init() {
    await customElements.whenDefined("gmp-map");

    const map = document.querySelector("gmp-map");
    const marker = document.querySelector("gmp-advanced-marker");
    const placePicker = document.querySelector("gmpx-place-picker");
    // const infowindow = new google.maps.InfoWindow();

    map.innerMap.setOptions({
      mapTypeControl: false,
    });

    placePicker.addEventListener("gmpx-placechange", handlePlaceChange);

    function handlePlaceChange() {
      const place = placePicker.value.formattedAddress;

      // 使用 Places Service 進行搜索
      const service = new google.maps.places.PlacesService(map.innerMap);
      service.textSearch({ query: place }, (results, status) => {
        if (
          status === google.maps.places.PlacesServiceStatus.OK &&
          results.length > 0
        ) {
          const place = results[0];

          if (placePicker.setInputValue) {
            placePicker.setInputValue(place.name);
          }

          updateMap(place);
        }
      });
    }

    function updateMap(place) {
      if (place.geometry.viewport) {
        map.innerMap.fitBounds(place.geometry.viewport);
      } else {
        map.center = place.geometry.location;
        map.zoom = 17;
      }

      marker.position = place.geometry.location;
      // infowindow.setContent(
      //   `<strong style="font-size: 26px; color: #4A859F">${place.name}</strong>`
      // );
      // infowindow.open(map.innerMap, marker);
    }
  }

  document.addEventListener("DOMContentLoaded", init);

  return (
    <React.Fragment>
      <div className="d-none d-md-block col-md-5 p-0 mapArea">
        <gmpx-api-loader
          key="AIzaSyCgVtNCe6n8nTdXm-zFidK0uF8kVnzvO2Q"
          solution-channel="GMP_GE_mapsandplacesautocomplete_v1"
        ></gmpx-api-loader>
        <gmp-map
          center="23.75163737835299, 120.95520524708053"
          zoom="8"
          map-id="DEMO_MAP_ID"
        >
          <div
            slot="control-block-start-inline-start"
            className="place-picker-container"
          >
            <gmpx-place-picker placeholder="你想去哪玩?"></gmpx-place-picker>
          </div>
          <gmp-advanced-marker></gmp-advanced-marker>
        </gmp-map>
      </div>
    </React.Fragment>
  );
}

export default MapDisplay;
