import React, { Component } from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";
import mapStyle from "../../utils/mapStyle.json";

const labelStyle = {
  backgroundColor: "white",
  border: "2px solid lightblue",
  fontSize: "12px",
  padding: "3px"
};

const cities = [
  {
    name: "Lyon",
    lat: 45.764043,
    lng: 4.85
  },
  {
    name: "Toulouse",
    lat: 43.604652,
    lng: 1.444209
  },
  {
    name: "Barcelona",
    lat: 41.390205,
    lng: 2.154007
  },
  {
    name: "Madrid",
    lat: 40.416775,
    lng: -3.70379
  },
  {
    name: "London",
    lat: 51.509865,
    lng: -0.118092
  },
  {
    name: "Dublin",
    lat: 53.35014,
    lng: -6.266155
  },
  {
    name: "Edinburgh",
    lat: 55.953251,
    lng: -3.188267
  },
  {
    name: "Bruxelles",
    lat: 50.85045,
    lng: 4.34878
  }
];

export class MapComponent extends Component {
  componentDidMount() {
    console.log("mounted");
  }

  render() {
    return (
      <div>
        <GoogleMap
          defaultZoom={5}
          defaultCenter={{ lat: 48.866667, lng: 2.333333 }}
          defaultOptions={{ styles: mapStyle }}
        >
          <MarkerWithLabel
            position={{ lat: 48.866667, lng: 2.333333 }}
            icon="marker-now.png"
            labelAnchor={{ x: "-10", y: "20" }}
            labelStyle={{
              backgroundColor: "white",
              border: "2px solid #fc6877",
              fontSize: "12px",
              padding: "3px"
            }}
          >
            <div>Paris</div>
          </MarkerWithLabel>
          {cities.map(city => {
            return (
              <MarkerWithLabel
                position={{ lat: city.lat, lng: city.lng }}
                icon="marker.png"
                labelAnchor={{ x: "-10", y: "20" }}
                labelStyle={labelStyle}
              >
                <div>{city.name}</div>
              </MarkerWithLabel>
            );
          })}
        </GoogleMap>
      </div>
    );
  }
}

export default compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBdB6qzgsaSQxhkrwwBjHJUhwAH6GbR-vg",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh`, width: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(MapComponent);
