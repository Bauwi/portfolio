import React, { Component } from "react";
var Doughnut = require("react-chartjs").Doughnut;

var chartData = [
  {
    value: 1968,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "JavaScript - Front"
  },
  {
    value: 38,
    color: "#F7464A",
    highlight: "#FF5A5E",
    label: "HTML5"
  },
  {
    value: 858,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "SCSS"
  },

  {
    value: 472,
    color: "#949FB1",
    highlight: "#A8B3C5",
    label: "JavaScript - Back"
  }
];

const chartOptions = {
  //Boolean - Show a backdrop to the scale label
  scaleShowLabelBackdrop: true,

  //String - The colour of the label backdrop
  scaleBackdropColor: "rgba(255,255,255,0.75)",

  // Boolean - Whether the scale should begin at zero
  scaleBeginAtZero: true,

  //Number - The backdrop padding above & below the label in pixels
  scaleBackdropPaddingY: 2,

  //Number - The backdrop padding to the side of the label in pixels
  scaleBackdropPaddingX: 2,

  //Boolean - Show line for each value in the scale
  scaleShowLine: true,

  //Boolean - Stroke a line around each segment in the chart
  segmentShowStroke: true,

  //String - The colour of the stroke on each segment.
  segmentStrokeColor: "#fff",

  //Number - The width of the stroke value in pixels
  segmentStrokeWidth: 2,

  //Number - Amount of animation steps
  animationSteps: 100,

  //String - Animation easing effect.
  animationEasing: "easeOutBounce",

  //Boolean - Whether to animate the rotation of the chart
  animateRotate: true
};

export default class ItemCharts extends Component {
  render() {
    return (
      <Doughnut
        data={chartData}
        options={chartOptions}
        width="220"
        height="170"
      />
    );
  }
}
