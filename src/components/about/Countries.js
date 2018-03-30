import React, { Component } from "react";

const maybeCountries = [
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
              const isSomethingSelected = this.props.now || this.props.maybe;
              let countryClassName = "country";

              if (id === currentCountry && this.props.now) {
                countryClassName = countryClassName.concat(" country--now");
              } else if (maybeCountries.includes(id) && this.props.maybe) {
                countryClassName = countryClassName.concat(" country--maybe");
              }
              if (isSomethingSelected) {
                countryClassName = countryClassName.concat(
                  " country--not-concerned"
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
