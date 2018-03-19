import React, { Component } from "react";

const maybeCountries = [
  "FR",
  "GB",
  "CA",
  "CH",
  "ES",
  "PT",
  "DE",
  "BE",
  "NL",
  "IT",
  "HU",
  "CZ",
  "US",
  "RU",
  "JP",
  "AU",
  "IS"
];
const currentCountry = "FR";
export default class Countries extends Component {
  render() {
    return (
      <div>
        <svg id="shadow" viewBox="0 0 1415.58 914.04">
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
          </filter>
          <g id="countries" filter="url(#blurMe)">
            {React.Children.map(this.props.children, (country, i) => {
              return React.cloneElement(country, {
                className: "country__shadow"
              });
            })}
          </g>
        </svg>
        <svg id="worldmap" viewBox="0 0 1415.58 914.04">
          <g id="countries">
            {React.Children.map(this.props.children, (country, i) => {
              const { id } = country.props;
              let countryClassName = "country";
              if (maybeCountries.includes(id)) {
                countryClassName = countryClassName.concat(" country__maybe");
              }
              if (id === currentCountry) {
                countryClassName = countryClassName.concat(" country__current");
              }
              if (id === this.props.selected) {
                countryClassName = countryClassName.concat(
                  " country--selected"
                );
              }

              return React.cloneElement(country, {
                className: countryClassName
              });
            })}
          </g>
        </svg>
      </div>
    );
  }
}
