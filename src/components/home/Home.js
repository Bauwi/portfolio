import React, { Component } from "react";

import Face from "./Face";
import Infos from "./Infos";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="svg-arrow__container">
          <svg id="arrow" viewBox="0 0 1398.72 1390.11">
            <line
              fill="none"
              stroke="#00fff8"
              strokeWidth="556"
              x1="679.99"
              x2="1202.98"
              y1="674.14"
              y2="1192.7"
            />
            <polygon
              fill="#00fff8"
              points="349.8 1283.66 0 0 1286.68 338.78 349.8 1283.66"
            />
            <line
              fill="none"
              stroke="#000"
              strokeWidth="418"
              x1="660.98"
              x2="1154.2"
              y1="655.29"
              y2="1144.33"
            />
            <polygon points="381.71 1170.81 85.86 85.12 1174.1 371.65 381.71 1170.81" />
            <line
              fill="none"
              stroke="#fff"
              strokeWidth="345"
              x1="645.37"
              x2="1132.24"
              y1="638.15"
              y2="1120.9"
            />
            <polygon
              fill="#fff"
              points="397.8 1095.16 135.53 132.7 1100.25 386.7 397.8 1095.16"
            />
          </svg>
        </div>
        <svg viewBox="0 0 1384 797.44">
          <g id="background">
            <polygon
              fill="#111"
              points="0 795.43 1384 797.43 1384 4.43 0 5.63 0 795.43"
            />
            <line
              id="bande-etroite-grise"
              fill="none"
              stroke="#677077"
              strokeWidth="12"
              x1="1188.29"
              x2="1061.71"
              y1="732.38"
              y2="50.49"
            />
            <polyline
              id="bande-haut"
              fill="#f2b632"
              points="168.47 395.99 1319.81 178.59 1294.19 42.91 140.44 260.76"
            />
            <polygon
              id="bande-noire-left"
              points="430.46 703.44 216.83 741.92 88 5.43 294.54 6.14 430.46 703.44"
            />
            <polyline
              id="bande-bas"
              fill="#252839"
              points="48 717.43 193 689.25 1312.95 477.78 1262.89 212.62 0 451.44"
            />
            <g id="name">
              <g id="nom">
                <path
                  id="phil"
                  d="M428.77,334.59,413.83,261.5l37.59-7.69a26.5,26.5,0,0,1,9.07-.37,19.07,19.07,0,0,1,7.61,2.73,18.62,18.62,0,0,1,5.66,5.68,26.55,26.55,0,0,1,3.59,17.54,19.62,19.62,0,0,1-3,7.55,18.92,18.92,0,0,1-5.9,5.65,25.7,25.7,0,0,1-8.48,3.27l-13,2.65a43.9,43.9,0,0,0-6.95,2,23,23,0,0,0-6.39,3.76l5.75,28.12Zm29-49.51q10.77-2.2,8.66-12.54-1.14-5.56-4.35-7.29t-8.5-.65l-26.84,5.49,4.81,23.41a18.85,18.85,0,0,1,6.3-3.84,52,52,0,0,1,7-1.94ZM514,317.16l-10.68,2.18-14.94-73.09,10.68-2.18,6,30a19,19,0,0,1,4.29-2.46,26,26,0,0,1,4.61-1.4,44.34,44.34,0,0,1,4.63-.59l6.62-.59q3.56-.32,7.06-.68t5.95-.86a34.15,34.15,0,0,0,4.82-1.39,18.71,18.71,0,0,0,4.7-2.49L542,235.3l10.68-2.18L567.6,306.2l-10.68,2.18-7-34a18.65,18.65,0,0,1-4.69,2.49,34,34,0,0,1-4.81,1.39q-2.45.5-5.94.86t-7,.67l-6.6.58a44.09,44.09,0,0,0-4.62.59,25.85,25.85,0,0,0-4.6,1.4,18.88,18.88,0,0,0-4.28,2.46Zm75.14-15.36-14.94-73.09,10.48-2.14,14.94,73.09Zm32-6.55-14.94-73.09L616.92,220l12.74,62.31L670.22,274l2.2,10.78Z"
                  fill="none"
                  stroke="#252839"
                  strokeWidth="9"
                  transform="translate(0 4.44)"
                />
                <path
                  id="ippe"
                  d="M451,455.68,436,382.59l10.48-2.14,14.94,73.09Zm32-6.55L468.08,376l37.59-7.69a26.5,26.5,0,0,1,9.07-.37,19.06,19.06,0,0,1,7.61,2.73,18.62,18.62,0,0,1,5.66,5.68,26.56,26.56,0,0,1,3.59,17.54,19.63,19.63,0,0,1-3,7.55,18.93,18.93,0,0,1-5.9,5.65,25.7,25.7,0,0,1-8.48,3.27l-13,2.65a43.85,43.85,0,0,0-6.95,2,23,23,0,0,0-6.39,3.76l5.75,28.12Zm29-49.51q10.77-2.2,8.66-12.54-1.14-5.56-4.35-7.29t-8.5-.65L481,384.64,485.77,408a18.85,18.85,0,0,1,6.3-3.84,51.94,51.94,0,0,1,7-1.94Zm45.58,34.26L542.63,360.8l37.59-7.69a26.5,26.5,0,0,1,9.07-.37,19.06,19.06,0,0,1,7.61,2.73,18.62,18.62,0,0,1,5.66,5.68,26.56,26.56,0,0,1,3.59,17.54,19.63,19.63,0,0,1-3,7.55,18.93,18.93,0,0,1-5.9,5.65,25.7,25.7,0,0,1-8.48,3.27l-13,2.65a43.85,43.85,0,0,0-6.95,2,23,23,0,0,0-6.39,3.76l5.75,28.12Zm29-49.51q10.77-2.2,8.66-12.54-1.14-5.56-4.35-7.29t-8.5-.65l-26.84,5.49,4.81,23.41a18.85,18.85,0,0,1,6.3-3.84,51.94,51.94,0,0,1,7-1.94Zm54.06,21.3,45.07-9.22,2.2,10.78-55.75,11.4-14.94-73.09L668.62,335l2.2,10.78-40.76,8.33,4.54,22.21a18.22,18.22,0,0,1,6.27-3.76,57,57,0,0,1,7-1.88l16-3.27,2.2,10.78-16,3.27a46.81,46.81,0,0,0-6.9,2,22.08,22.08,0,0,0-6.34,3.68Z"
                  fill="none"
                  stroke="#f2b632"
                  strokeWidth="9"
                  transform="translate(0 4.44)"
                />
              </g>
              <path
                id="prenom"
                d="M204.15,377.65l-10.7,2.1-14.37-73.2,10.7-2.1,10.73,54.66,26.46-62,12.85-2.52-17.28,39.16,17,17.14q4.44,4.43,7.56,5.55a8.89,8.89,0,0,0,5.44.46l3-.7,2.14,10.89-3.83.75a39.14,39.14,0,0,1-4.92.66,14.44,14.44,0,0,1-4.84-.53,19,19,0,0,1-5.29-2.53,35,35,0,0,1-6.17-5.46l-14.58-15.58ZM283,351l45.14-8.86,2.12,10.79-55.83,11L260,290.65l51.52-10.12,2.12,10.79-40.82,8,4.37,22.25a18.22,18.22,0,0,1,6.3-3.71,57,57,0,0,1,7-1.83l16-3.14,2.12,10.79-16,3.14a46.74,46.74,0,0,0-6.91,1.92,22.08,22.08,0,0,0-6.37,3.63ZM251.61,490.62l-12.66,2.49-44.6-67.27,11.58-2.27,37,56.32,13.2-66.18,11.78-2.31Zm44.45-8.73-14.37-73.2,10.5-2.06,14.37,73.2Zm11.33-78.25,13.84-2.72,58,46.7-11-55.93,10.7-2.1,14.37,73.2-10.58,2.08-51.8-42.11,9.88,50.34-10.5,2.06L318,412.27Z"
                fill="none"
                stroke="#677077"
                strokeWidth="9"
                transform="translate(0 4.44)"
              />
            </g>
            <polygon
              id="bande-noire-middle"
              points="987.54 740.05 815.62 771.02 677 6.43 849.92 7.69 987.54 740.05"
            />
            <path
              id="bande-grise-large"
              d="M1140.7,654.35l-126.29,22.2L900.08,26.18,1026.37,4Z"
              fill="#677077"
              transform="translate(0 4.44)"
            />
            <g id="navigation">
              <path
                id="portfolio"
                d="M475.3,681.44c-1.9.35-3.21.07-3.38-.83-.24-1.31,2.92-3.92,3.53-4a.09.09,0,0,1,.08,0c-.67.58-2.94,2.64-2.74,3.71,0,.12.2.24.66.15a12.94,12.94,0,0,0,2.57-.8c3-7.12,8.06-15.71,9.91-16.05a2.28,2.28,0,0,1,2.34,1.48.83.83,0,0,0-.74-.21c-1.44.27-5.57,7.13-8.71,13.46,7-3.7,16.12-11,15.4-14.86-.43-2.31-3.81-3-8.12-2.22-8.59,1.6-18.17,10.94-17.58,14.1.19,1,1.47,1.39,2.11,1.32,0,0,0,0-.39.1-1.73.32-3.16.08-3.5-1.74-.62-3.31,6.8-12.17,19.39-14.52,2.63-.49,8.66-.55,9.41,3.44,1.19,6.4-11.47,14.3-17.89,16.78-1.7,3.61-2.85,6.73-2.67,7.73.09.46.13.83.58.82a1.27,1.27,0,0,1-.38.15c-.66.12-1.18-.41-1.35-1.31C473.6,686.8,474.22,684.31,475.3,681.44Zm23.86-11.7c-4.41.82-8,10-6.5,10.3s4.22-4.24,5.39-7a2.35,2.35,0,0,1-.49-1.14,2.4,2.4,0,0,1,.93-1.21.77.77,0,0,1,.61.14,2.14,2.14,0,0,0,2.25.87,8.3,8.3,0,0,0,2.6-1.59,4.46,4.46,0,0,1-2,2,4.88,4.88,0,0,1-1.4.49,2.17,2.17,0,0,1-.75,0c-.05,3.36-4.44,7.8-7.05,8.14a2,2,0,0,1-2.21-1.58c-.74-4,3.86-8.93,7.7-9.65a2.17,2.17,0,0,1,1.56.14c.14.05.06.06,0,.08C499.54,669.73,499.33,669.71,499.16,669.75Zm4.75-1.14a.59.59,0,0,1,.32-.18,2.05,2.05,0,0,1,1.8,1.28c0,.1-.08,0-.28,0-.37,0-1,1.15-1.59,2.26a32,32,0,0,0-1.48,3.3,31.34,31.34,0,0,1,4.84-6.32,5.62,5.62,0,0,1,2-1.55c.26-.07,1.46.79,1.32,1a15.61,15.61,0,0,0-2.57,4.86c1.15-.32,2.63-1.72,3.89-3.34,0,0,.16-.08.19,0-.33.67-2.74,3.94-4.42,4.25a1.85,1.85,0,0,1-1.38-.93,6.27,6.27,0,0,1,.89-3.09,18.88,18.88,0,0,0-4.27,5.05c-1,1.57-2.05,4-1.47,4.13-.67.3-1.4-.34-1.7-1a2.36,2.36,0,0,1,.13-1.31,29.26,29.26,0,0,1,1.85-5A16.72,16.72,0,0,1,503.91,668.61Zm13.68-10.78a1.86,1.86,0,0,1,.81-.65c1.35-.33,2.59.9,2.07.72-.85-.22-1.92,2-2.73,3.58a56.57,56.57,0,0,1,12.68-1.6c.2,0,.31,0,0,.07a58.4,58.4,0,0,0-13.3,2.7c-.69,1.29-1.27,2.65-2,4.27a53.78,53.78,0,0,0-3.06,8.71c1.07-.07,4.37-4.79,5.56-6.38a.11.11,0,0,1,.2.11c-.94,1.59-4.35,6.81-5.71,7.61a.87.87,0,0,1-.8,0,2.7,2.7,0,0,1-1.06-.81.6.6,0,0,1-.14-.35c-.14-.73.52-3.32,2.65-8.5.47-1.12,1-2.32,1.66-3.68-2.23.89-3.45,2.33-2.75,2.58a1.52,1.52,0,0,1-1.52-1c-.3-1.08,2.25-2.26,4.92-3.08A23.11,23.11,0,0,1,517.6,657.83Zm5.84-1.09a2.09,2.09,0,0,1,.81-.65c1.37-.33,2.61.9,2.1.72-.9-.24-2.08,2.35-2.86,3.86A110.46,110.46,0,0,0,518.91,671l0,0a28.28,28.28,0,0,0,5.87-4.59c0-.05,0-.08.08-.09a.13.13,0,0,1,.15.1v0a30.83,30.83,0,0,1-4.5,4.24,9.49,9.49,0,0,1-1.52,1,8.42,8.42,0,0,1,.79,2.37,8.86,8.86,0,0,1,.14,1.41c0,7.19-5.24,13.14-6.28,13.39h-.07c-.48.11-1.22-.6-1.32-1-.33-1.35,1.31-8.25,4-15.71-.76-.41,0-1.88.68-2,1.62-4.13,3.43-8.12,4.85-10.88A16.36,16.36,0,0,1,523.44,656.74Zm-9.36,30.51c2.47-2.68,5.49-7.19,5.36-12.46a4.58,4.58,0,0,0-.09-.87,4.05,4.05,0,0,0-.85-2,121,121,0,0,0-4.66,15.15c-.06.21,0,.34,0,.33S513.95,687.37,514.08,687.25ZM530,664c-4.41.82-8,10-6.5,10.3s4.22-4.24,5.39-7a2.37,2.37,0,0,1-.49-1.14,2.41,2.41,0,0,1,.93-1.21.77.77,0,0,1,.61.14,2.14,2.14,0,0,0,2.25.87,8.31,8.31,0,0,0,2.6-1.59,4.46,4.46,0,0,1-2,2,4.89,4.89,0,0,1-1.4.49,2.17,2.17,0,0,1-.75,0c-.06,3.36-4.44,7.8-7.05,8.14a2,2,0,0,1-2.21-1.58c-.74-4,3.86-8.93,7.7-9.65a2.16,2.16,0,0,1,1.56.14c.14.05.06.06,0,.08S530.17,664,530,664Zm6.92-7.48a13.65,13.65,0,0,1,1.61-2.59,1.87,1.87,0,0,1,.81-.66c1.35-.33,2.59.9,2.07.72-.92-.23-2.08,2.35-2.91,3.87S537,661,536.09,663a53.88,53.88,0,0,0-3.07,8.71c1.07-.07,4.37-4.8,5.57-6.38a.11.11,0,0,1,.2.11c-.94,1.59-4.35,6.81-5.71,7.61a.87.87,0,0,1-.8,0,2.7,2.7,0,0,1-1.06-.81.6.6,0,0,1-.14-.35c-.14-.73.54-3.3,2.65-8.5C534.8,660.82,536,658.41,536.92,656.52Zm.93,15.7a1.69,1.69,0,0,1-1.22-1c-.26-1.41,2.28-7.38,3.61-8.91a.51.51,0,0,1,.34-.21,2.15,2.15,0,0,1,1.83,1.3c0,.1-.13,0-.33,0-1,.09-3.32,6.26-3.43,7.31,1.41-.67,4.34-4.71,5.56-6.42.15-.15.31,0,.25.1-1.69,2.68-4.82,7.37-6.31,7.78A1.34,1.34,0,0,1,537.85,672.22Zm5.86-13.74c.26.2.48.54.38.56a.74.74,0,0,0-.51.12,7.52,7.52,0,0,0-1.53,1.92c-.26.5-.87.09-1-.35a3.64,3.64,0,0,1,1.07-2.77A1.85,1.85,0,0,1,543.71,658.48Zm7.3,1.61c-4.41.82-8,10-6.5,10.3s4.22-4.24,5.39-7a2.35,2.35,0,0,1-.49-1.14,2.39,2.39,0,0,1,.93-1.21.77.77,0,0,1,.61.14,2.14,2.14,0,0,0,2.25.87,8.3,8.3,0,0,0,2.6-1.59,4.46,4.46,0,0,1-2,2,4.89,4.89,0,0,1-1.4.49,2.16,2.16,0,0,1-.75,0c-.06,3.36-4.44,7.8-7.05,8.14a2,2,0,0,1-2.21-1.58c-.74-4,3.85-8.93,7.7-9.65a2.16,2.16,0,0,1,1.56.14c.14.05.06.06,0,.08S551.18,660.07,551,660.1Z"
                fill="#677077"
                transform="translate(0 4.44)"
              />
              <path
                id="skills"
                d="M592.68,665.23c5.87-1.09,16.66-9.16,16-12.84-.28-1.51-2.47-2-5-2.25-3.07-.26-6.46-.08-6.86-2.23-.76-4.09,6.5-8.81,10-9.59,2.2-.48,3.79-.22,4.11,1.66.49,2.91-3.16,6.83-5.75,7.31-.49.09-1.25,0-1.35-.5a3.37,3.37,0,0,1,1-2.6,2.06,2.06,0,0,0-.28,1.36c0,.15.17.12.32.09,1-.19,5.24-3.79,5.15-6.07,0-.8-.72-.9-1.65-.73-.27,0-.58.13-.89.22-3.05.92-9.47,6.27-9,8.77.26,1.41,2.71,1.59,5.3,1.81,2.89.24,5.91.62,6.41,3.32,1,5.33-10.17,12.79-16.82,14-1.61.3-4,.27-4.39-1.65-.67-3.6,9.26-11.47,12.41-12-6.13,3-11.31,9.48-11,11.28C590.63,665.58,591.9,665.37,592.68,665.23ZM613,651a83.47,83.47,0,0,1,3.6-8.3,21.61,21.61,0,0,1,2.42-4.05,1.79,1.79,0,0,1,.84-.61c1.41-.26,2.6,1,2.12.82-.72-.19-1.47.9-2.6,2.83-.21.37-1.12,2.12-1.12,2.12-1.12,2.12-2.43,5.24-3.33,7.55,1.54-2.4,4-5.21,5.24-5.43.53-.1,1.36.81,1.45,1.32.33,1.8-4.05,5.87-6.8,6.12,1.55,2.51,5.45,5.64,8.64,5a4.16,4.16,0,0,0,2.35-1.34c.06-.09.26-.1.16,0a4.8,4.8,0,0,1-3.08,2c-3.14.58-7-1.83-9.17-4.37-.38,1.2-1.37,3.33-.25,3.25a.87.87,0,0,1-.83,0,3,3,0,0,1-1-.82,4.83,4.83,0,0,1,.25-2.72c.13-.53.31-1.06.46-1.6a1.93,1.93,0,0,1-.26-1C612.11,651.47,612.54,651.19,613,651Zm1.46,1.62a1.68,1.68,0,0,0,.24.46c2.09-.69,4.3-4.35,4.76-5.95C617.84,647.86,614.62,652.24,614.44,652.63Zm7.16,3.71a1.69,1.69,0,0,1-1.22-1c-.26-1.41,2.28-7.38,3.61-8.91a.51.51,0,0,1,.34-.21,2.15,2.15,0,0,1,1.83,1.3c0,.1-.13,0-.33,0-1,.09-3.32,6.26-3.43,7.31,1.41-.67,4.34-4.71,5.56-6.42.15-.15.31,0,.25.1-1.69,2.68-4.83,7.37-6.32,7.77A1.34,1.34,0,0,1,621.6,656.34Zm5.86-13.73c.26.2.48.54.38.56a.74.74,0,0,0-.51.12,7.52,7.52,0,0,0-1.53,1.92c-.26.5-.87.09-1-.35a3.65,3.65,0,0,1,1.07-2.77A1.85,1.85,0,0,1,627.46,642.6Zm4.56-4.07a13.65,13.65,0,0,1,1.61-2.59,1.87,1.87,0,0,1,.81-.65c1.35-.33,2.59.91,2.07.72-.92-.23-2.08,2.35-2.91,3.86s-1.53,3.16-2.42,5.16a53.88,53.88,0,0,0-3.07,8.71c1.07-.07,4.38-4.79,5.57-6.37a.11.11,0,0,1,.2.11c-.94,1.59-4.35,6.8-5.72,7.61a.87.87,0,0,1-.8,0,2.7,2.7,0,0,1-1.06-.81.6.6,0,0,1-.14-.35c-.14-.73.55-3.3,2.65-8.5C629.9,642.83,631.06,640.42,632,638.53Zm5.87-1.09a13.65,13.65,0,0,1,1.61-2.59,1.87,1.87,0,0,1,.81-.65c1.35-.33,2.59.91,2.07.72-.92-.23-2.08,2.35-2.91,3.86s-1.53,3.16-2.42,5.16a53.88,53.88,0,0,0-3.07,8.71c1.07-.07,4.38-4.79,5.57-6.37a.11.11,0,0,1,.2.11c-.94,1.59-4.35,6.8-5.72,7.61a.87.87,0,0,1-.8,0,2.7,2.7,0,0,1-1.06-.81.6.6,0,0,1-.14-.35c-.14-.73.55-3.3,2.65-8.5C635.76,641.74,636.93,639.33,637.89,637.44Zm2.69,9.75c0,.43.64.71.92.89a21.94,21.94,0,0,1,6.82-4.09s.15,0,.17.1c.23,0-4.35,2.19-6.71,4.27.36.19,1.1.78,1.12,1.3,0,1.65-3,3.53-4.6,3.83-.54.1-.88-.29-1.11-.8-.12-1.06,3.08-3.77,3.87-4.27-.33-.29-1.93-.9-1.91-2,0-1.92,3.21-4.4,5.36-4.8.68-.13,1.21.93,1.26,1.65a4.27,4.27,0,0,1-1.88,2.21s-.09-.08-.07-.09a8.27,8.27,0,0,0,1.35-2.52C644,643,640.68,646,640.58,647.2Zm-2.81,5.11c.9-.44,3.63-2.56,3.46-3.49A23.7,23.7,0,0,0,637.77,652.3Z"
                fill="#677077"
                transform="translate(0 4.44)"
              />
              <path
                id="contact"
                d="M698.56,630.13c-.63.12-1.18-.6-1.32-1.36a2.89,2.89,0,0,1,1.06-1.92s-.51,1-.32,1.2c1.65-.32,5.07-3.23,4.69-5.2-.21-1.09-1.28-1.54-2.79-1.25-7.49,1.46-18.12,16.69-16.27,23.37.57,2,2.18,2.28,4.06,1.91,4.57-.89,11.21-6.44,16.06-12.23,0,0,.31,0,.22.11-3.47,5-11.43,13-16.78,13.88-2.61.46-5.09-.25-5.82-3.18-2.14-8.41,10-22.83,18.16-24.42,2.11-.41,3.77.2,4.14,2.07C704.12,625.54,700.94,629.67,698.56,630.13Zm11.14.11c-4.4.86-7.89,10-6.41,10.35s4.19-4.27,5.34-7.07a2.34,2.34,0,0,1-.5-1.14,2.39,2.39,0,0,1,.92-1.21.77.77,0,0,1,.61.13,2.14,2.14,0,0,0,2.26.85,8.3,8.3,0,0,0,2.59-1.61,4.47,4.47,0,0,1-2,2,4.89,4.89,0,0,1-1.39.5,2.16,2.16,0,0,1-.75,0c0,3.36-4.38,7.84-7,8.19a2,2,0,0,1-2.22-1.56c-.77-4,3.78-9,7.62-9.71a2.16,2.16,0,0,1,1.56.13c.14,0,.06.06,0,.08S709.87,630.2,709.7,630.23Zm9,6.59c1.45-.71,4.28-4.72,5.55-6.48.12-.15.28,0,.22.11-1.67,2.72-4.85,7.5-6.31,7.79a1.19,1.19,0,0,1-.85-.36,1.69,1.69,0,0,1-.62-.86c-.27-1.39,1.76-6,2.8-7.38a31.74,31.74,0,0,0-6.24,7.22,11.52,11.52,0,0,0-.68,1.19c-.51.91-.55,1.6-.15,1.69-.7.31-1.43-.35-1.76-1a4,4,0,0,1,.3-2.08,32.56,32.56,0,0,1,1.59-4.14,17.21,17.21,0,0,1,2-3.52.49.49,0,0,1,.29-.18,2,2,0,0,1,1.83,1.26c0,.1-.1,0-.3,0s-1,1.23-1.57,2.32a46.56,46.56,0,0,0-2,4.53,10,10,0,0,1,1-1.6c2.2-3.2,5.84-7.32,6.67-7.48.58-.11,1.62,1,1.35,1.38C721.34,629.81,718.57,635.67,718.75,636.82Zm10.75-18.94a1.87,1.87,0,0,1,.81-.66c1.35-.34,2.59.88,2.08.71-.85-.21-1.91,2-2.71,3.6a56.56,56.56,0,0,1,12.66-1.71c.2,0,.31,0,0,.07a58.4,58.4,0,0,0-13.28,2.81c-.68,1.29-1.25,2.66-1.94,4.29a53.88,53.88,0,0,0-3,8.73c1.07-.08,4.33-4.83,5.51-6.42a.11.11,0,0,1,.2.11c-.93,1.59-4.3,6.84-5.65,7.66a.87.87,0,0,1-.8.05,2.7,2.7,0,0,1-1.06-.8.6.6,0,0,1-.14-.35c-.14-.73.49-3.32,2.58-8.52.46-1.12,1-2.33,1.63-3.7-2.22.91-3.43,2.36-2.72,2.6a1.52,1.52,0,0,1-1.53-1c-.31-1.08,2.23-2.28,4.89-3.12A23.19,23.19,0,0,1,729.49,617.88Zm5,12.25c-.59.87-4.53,5.88-5.56,6.08a.81.81,0,0,1-.23,0,2.61,2.61,0,0,1-1.39-1.42c-.52-2.65,4-9.15,8.47-10,.92-.18,2.22,0,2.44,1.12a2,2,0,0,1-.24,1.23s-.1,0-.08,0a1.81,1.81,0,0,0,.1-.93,1,1,0,0,0-1.39-.81c-1.4.35-3,1.71-4.29,3.36-1.93,2.42-3.16,5.84-2.91,5.92a.21.21,0,0,0,.17,0,37.74,37.74,0,0,0,4.73-4.86,27.57,27.57,0,0,1,2.19-2.77c.44-.34,1.53.84,1.49,1.15-.17-.22-1.84,2.86-2.27,4.55a2.53,2.53,0,0,0-.08.87c1.45-.74,4.28-4.74,5.51-6.44.1-.14.26,0,.2.11-1.67,2.72-4.84,7.55-6.3,7.83a.86.86,0,0,1-.44-.07,1.66,1.66,0,0,1-1-1,4.08,4.08,0,0,1,0-.94A10.48,10.48,0,0,1,734.5,630.13Zm7.51,2.45c2.19-.68,5.64-4.75,7.62-7.13.06-.06.25,0,.19.09-1.71,2.38-5.54,7.69-8.56,8.27a1.79,1.79,0,0,1-2.16-1.9,9.41,9.41,0,0,1,1.86-4.83c1.61-2.36,3.82-4.1,5.55-4.43a1.88,1.88,0,0,1,1.62.92c.18.92-.84,2.05-1.52,2.82,0,.06-.17,0-.14,0,.31-.46.94-2.58.71-2.71-2.59.55-6.29,7-6,8.68C741.3,632.69,741.79,632.65,742,632.58Zm13-19.65a1.87,1.87,0,0,1,.81-.66c1.35-.34,2.59.88,2.08.71-.85-.21-1.9,2-2.71,3.6a56.56,56.56,0,0,1,12.66-1.71c.2,0,.31,0,0,.07a58.4,58.4,0,0,0-13.28,2.81c-.68,1.29-1.25,2.66-1.94,4.29a53.88,53.88,0,0,0-3,8.73c1.07-.08,4.33-4.83,5.51-6.42a.11.11,0,0,1,.2.11c-.93,1.59-4.3,6.84-5.65,7.66a.87.87,0,0,1-.8.05,2.7,2.7,0,0,1-1.06-.8.6.6,0,0,1-.14-.35c-.14-.73.49-3.32,2.58-8.52.46-1.12,1-2.33,1.63-3.7-2.22.91-3.43,2.36-2.72,2.6a1.52,1.52,0,0,1-1.53-1c-.31-1.08,2.23-2.28,4.89-3.12A23.12,23.12,0,0,1,755,612.93Z"
                fill="#677077"
                transform="translate(0 4.44)"
              />
            </g>
            <g id="front-end">
              <path
                d="M275.77,589.45l-3.86.7-4.82-26.42,18.59-3.39.71,3.9-14.73,2.69,1.47,8a6.57,6.57,0,0,1,2.29-1.31,20.6,20.6,0,0,1,2.52-.62l5.77-1.05.71,3.9-5.77,1.05a16.93,16.93,0,0,0-2.5.66,7.92,7.92,0,0,0-2.31,1.28Z"
                fill="#677077"
                transform="translate(0 4.44)"
              />
              <path
                d="M309,577.67a3.13,3.13,0,0,0,.87.76,2.93,2.93,0,0,0,.9.33,3.8,3.8,0,0,0,.87.06,5.74,5.74,0,0,0,.74-.08l1.27-.23.71,3.9-1.59.29a13.7,13.7,0,0,1-1.41.18,4.8,4.8,0,0,1-1.43-.1,4.67,4.67,0,0,1-1.47-.63,7.75,7.75,0,0,1-1.57-1.38l-3.67-4.09-.25,0q-1.06.19-1.78.38a7.41,7.41,0,0,0-1.24.43,8.12,8.12,0,0,0-1,.52q-.44.28-1,.67l1.18,6.45-3.72.68-3.35-18.35L304,565.34a6.42,6.42,0,0,1,2.39,0,5.6,5.6,0,0,1,2,.82,5.28,5.28,0,0,1,1.52,1.54,5.77,5.77,0,0,1,.83,2.14,5.28,5.28,0,0,1-.47,3.64,6.37,6.37,0,0,1-2.77,2.49Zm-3.72-5.14a2.44,2.44,0,0,0,1.35-.7,1.55,1.55,0,0,0,.38-1.44,1.67,1.67,0,0,0-.42-.91,1.62,1.62,0,0,0-.72-.42A2.74,2.74,0,0,0,305,569a9.11,9.11,0,0,0-1,.12l-7.47,1.36.84,4.6a7.49,7.49,0,0,1,2.2-1.26,16.19,16.19,0,0,1,2.74-.74Z"
                fill="#677077"
                transform="translate(0 4.44)"
              />
              <path
                d="M339.69,568.12a9.36,9.36,0,0,1-.16,4.35,9.91,9.91,0,0,1-1.86,3.56,10.82,10.82,0,0,1-3.12,2.58,12.68,12.68,0,0,1-3.94,1.41,12.84,12.84,0,0,1-4.16.08,10.8,10.8,0,0,1-3.81-1.28,9.54,9.54,0,0,1-3-2.64,9.4,9.4,0,0,1-1.66-4,9.14,9.14,0,0,1,.17-4.31,9.52,9.52,0,0,1,1.89-3.49,11,11,0,0,1,3.13-2.51,13,13,0,0,1,3.89-1.37,14,14,0,0,1,4.14-.13,10.55,10.55,0,0,1,3.81,1.17,9,9,0,0,1,4.66,6.58Zm-3.85.74a5.41,5.41,0,0,0-3-4.08,6.79,6.79,0,0,0-2.44-.65,10,10,0,0,0-2.62.13,9.69,9.69,0,0,0-2.53.83,6.66,6.66,0,0,0-2,1.5,6.13,6.13,0,0,0-.25,7.55,5.67,5.67,0,0,0,1.93,1.59,6.83,6.83,0,0,0,2.44.69,9.66,9.66,0,0,0,2.66-.12,8.2,8.2,0,0,0,2.47-.87,7.31,7.31,0,0,0,2-1.59,6,6,0,0,0,1.24-2.22A5.71,5.71,0,0,0,335.84,568.86Z"
                fill="#677077"
                transform="translate(0 4.44)"
              />
              <path
                d="M347,557.49l13.41,10.73-2.33-12.75,3.65-.67,3.35,18.35-3.65.67-12.38-10.07,2.18,11.93-3.65.67-2.85-15.62-2.3-2.4Z"
                fill="#677077"
                transform="translate(0 4.44)"
              />
              <path
                d="M377.35,555.72l2.68,14.7-3.65.67-2.68-14.7L367,557.6l-.67-3.65,17.21-3.14.67,3.65Z"
                fill="#677077"
                transform="translate(0 4.44)"
              />
              <path
                d="M388.41,557.15l-.6-3.29,16.82-3.07.6,3.29Z"
                fill="#677077"
                transform="translate(0 4.44)"
              />
              <path
                d="M416.47,559.75l16.29-3,.71,3.9-20.15,3.68-4.82-26.42,18.59-3.39.71,3.9-14.73,2.69,1.47,8a6.56,6.56,0,0,1,2.29-1.31,20.6,20.6,0,0,1,2.52-.62l5.77-1.05.71,3.9-5.77,1.05a16.8,16.8,0,0,0-2.5.66,8,8,0,0,0-2.31,1.28Z"
                fill="#677077"
                transform="translate(0 4.44)"
              />
              <path
                d="M438.95,540.72l13.41,10.73L450,538.69l3.65-.67L457,556.37l-3.65.67L441,547l2.18,11.93-3.65.67-2.85-15.62-2.3-2.4Z"
                fill="#677077"
                transform="translate(0 4.44)"
              />
              <path
                d="M459.88,536.9l11.37-2.07a11.83,11.83,0,0,1,3.88-.1,8.1,8.1,0,0,1,3.26,1.2,8,8,0,0,1,2.41,2.49,10.58,10.58,0,0,1,1.38,3.76,11,11,0,0,1,0,4,8.2,8.2,0,0,1-1.34,3.28,8.52,8.52,0,0,1-2.6,2.4,10.78,10.78,0,0,1-3.69,1.35l-7.47,1.36-2.68-14.7-2.27.41Zm8.42,2.23,2,11,3.63-.66a5.13,5.13,0,0,0,4.52-6.57,5.47,5.47,0,0,0-2.19-3.81,5.79,5.79,0,0,0-4.34-.63Z"
                fill="#677077"
                transform="translate(0 4.44)"
              />
              <path
                d="M492.72,522.56l13.44-2.45a12,12,0,0,1,5.16.14,12.53,12.53,0,0,1,4.46,2.11,13.36,13.36,0,0,1,3.36,3.69,13.89,13.89,0,0,1,1.86,4.89,14.32,14.32,0,0,1-.07,5.47,14.62,14.62,0,0,1-2,5.05,10.93,10.93,0,0,1-3.33,3.43,12.74,12.74,0,0,1-4.46,1.62l-9.78,1.78-4.11-22.52-2.09.38Zm11.69,21.14,6-1.09a8.18,8.18,0,0,0,5.66-3.86,9.25,9.25,0,0,0,1.17-3.23,10.38,10.38,0,0,0,0-3.61,11.67,11.67,0,0,0-1.23-3.52,9.25,9.25,0,0,0-2.22-2.72,8.11,8.11,0,0,0-3.05-1.58,8.39,8.39,0,0,0-3.77-.1L501,525.07Z"
                fill="#677077"
                transform="translate(0 4.44)"
              />
              <path
                d="M532.78,538.74l11.51-2.1.67,3.68-15.12,2.76-3.35-18.35,14.45-2.64.67,3.65-10.84,2,.81,4.46a6.94,6.94,0,0,1,2.51-1.37,26,26,0,0,1,3-.74l2.69-.49.67,3.65-2.69.49q-1.28.23-2.1.44a13.45,13.45,0,0,0-1.41.42,5,5,0,0,0-1,.52q-.46.3-1,.73Z"
                fill="#677077"
                transform="translate(0 4.44)"
              />
              <path
                d="M561.71,537.27l-4.71.86-11.32-16.89,4.11-.75,8.87,13.5,3.67-15.78,4.14-.76Z"
                fill="#677077"
                transform="translate(0 4.44)"
              />
              <path
                d="M578.43,530.41l11.51-2.1.67,3.68-15.12,2.76-3.35-18.35,14.45-2.64.67,3.65-10.84,2,.81,4.46a6.94,6.94,0,0,1,2.51-1.37,26,26,0,0,1,3-.74l2.69-.49.67,3.65-2.69.49q-1.28.23-2.1.44a13.45,13.45,0,0,0-1.41.42,5,5,0,0,0-1,.52q-.46.3-1,.73Z"
                fill="#677077"
                transform="translate(0 4.44)"
              />
              <path
                d="M597.52,530.74l-3.35-18.35,3.79-.69,2.68,14.66,9.74-1.78.67,3.68Z"
                fill="#677077"
                transform="translate(0 4.44)"
              />
              <path
                d="M634.59,514.31a9.36,9.36,0,0,1-.16,4.35,9.9,9.9,0,0,1-1.86,3.56,10.81,10.81,0,0,1-3.12,2.58,12.68,12.68,0,0,1-3.94,1.41,12.84,12.84,0,0,1-4.16.08,10.8,10.8,0,0,1-3.81-1.28,9.54,9.54,0,0,1-3-2.64,9.39,9.39,0,0,1-1.66-4,9.14,9.14,0,0,1,.17-4.31,9.51,9.51,0,0,1,1.89-3.49,10.94,10.94,0,0,1,3.13-2.51,13,13,0,0,1,3.89-1.37,13.94,13.94,0,0,1,4.14-.13,10.54,10.54,0,0,1,3.81,1.17,9,9,0,0,1,4.66,6.58Zm-3.85.74a5.41,5.41,0,0,0-3-4.08,6.79,6.79,0,0,0-2.44-.65,10,10,0,0,0-2.62.13,9.68,9.68,0,0,0-2.53.83,6.66,6.66,0,0,0-2,1.5,6.13,6.13,0,0,0-.25,7.55,5.68,5.68,0,0,0,1.93,1.59,6.84,6.84,0,0,0,2.44.69,9.65,9.65,0,0,0,2.66-.12,8.2,8.2,0,0,0,2.47-.87,7.3,7.3,0,0,0,2-1.59,6,6,0,0,0,1.24-2.22A5.71,5.71,0,0,0,630.74,515.05Z"
                fill="#677077"
                transform="translate(0 4.44)"
              />
              <path
                d="M643,522.44l-3.35-18.35L651.29,502a7.15,7.15,0,0,1,2.5,0,5.34,5.34,0,0,1,2.11.82,5.49,5.49,0,0,1,1.56,1.62,6.36,6.36,0,0,1,.88,2.31,5.63,5.63,0,0,1-1,4.66,7.14,7.14,0,0,1-4.58,2.46l-1.63.3q-1.28.23-2.1.44a14.18,14.18,0,0,0-1.42.42,5,5,0,0,0-1.06.52q-.46.3-1,.73l1,5.56Zm1.93-9.87a7,7,0,0,1,2.53-1.38,26.48,26.48,0,0,1,3-.74l1.63-.3a4.74,4.74,0,0,0,2-.79q.72-.55.45-2a2.2,2.2,0,0,0-.45-1.05,1.78,1.78,0,0,0-.77-.53,2.62,2.62,0,0,0-1-.13,8.08,8.08,0,0,0-1.09.13l-7.4,1.35Z"
                fill="#677077"
                transform="translate(0 4.44)"
              />
              <path
                d="M669.27,513.84l11.51-2.1.67,3.68-15.12,2.76L663,499.83l14.45-2.64.67,3.65-10.84,2,.81,4.46a6.94,6.94,0,0,1,2.51-1.37,26,26,0,0,1,3-.74l2.69-.49.67,3.65-2.69.49q-1.28.23-2.1.44a13.45,13.45,0,0,0-1.41.42,5,5,0,0,0-1,.52q-.46.3-1,.73Z"
                fill="#677077"
                transform="translate(0 4.44)"
              />
              <path
                d="M701.87,506a3.12,3.12,0,0,0,.87.76,2.93,2.93,0,0,0,.9.33,3.81,3.81,0,0,0,.87.06,5.75,5.75,0,0,0,.74-.08l1.27-.23.71,3.9-1.59.29a13.68,13.68,0,0,1-1.41.18,4.8,4.8,0,0,1-1.43-.1,4.66,4.66,0,0,1-1.47-.63,7.77,7.77,0,0,1-1.57-1.38L696.09,505l-.25,0q-1.06.19-1.78.38a7.42,7.42,0,0,0-1.24.43,8.18,8.18,0,0,0-1,.52q-.44.28-1,.67l1.18,6.45-3.72.68L685,495.82l11.83-2.16a6.42,6.42,0,0,1,2.39,0,5.61,5.61,0,0,1,2,.82,5.28,5.28,0,0,1,1.53,1.54,5.76,5.76,0,0,1,.83,2.14,5.27,5.27,0,0,1-.47,3.64,6.37,6.37,0,0,1-2.77,2.49Zm-3.72-5.14a2.44,2.44,0,0,0,1.35-.7,1.55,1.55,0,0,0,.38-1.44,1.67,1.67,0,0,0-.42-.91,1.62,1.62,0,0,0-.72-.42,2.74,2.74,0,0,0-.91-.07,9.1,9.1,0,0,0-1,.12l-7.47,1.36.84,4.6a7.5,7.5,0,0,1,2.2-1.26,16.19,16.19,0,0,1,2.74-.74Z"
                fill="#677077"
                transform="translate(0 4.44)"
              />
            </g>
          </g>
          <g id="Visage">
            <path
              d="M881.55,453.05v1.5c1.49,21.86,18.68,49.24,18.68,49.24l43.33,61.48c19.43,23.23,50.8,38.26,50.8,38.26,12,10.93,47.82,8.2,47.82,8.2,28.39,1.37,61.26-19.13,61.26-19.13,25.4-16.4,59.77-72.41,59.77-72.41,23.91-35.52,23.91-56,23.91-56l19.43-97-1.5-1.47-4.49-33.2s-3-31.45,4.49-53.92c0,0,4.49-38.94-1.5-59.91,0,0-10.48-44.93-25.46-61.41,0,0-4.49,16.47-13.48,30,0,0-13.76-21.79-22.22-29.24a12.23,12.23,0,0,0-3.24-2.21c-7.49-3-3-6-10.48-15,0,0-35.94,12-53.92,10.48,0,0,34.45-15,40.44-21,0,0-25.46,7.49-43.43,7.49,0,0,31.45-13.48,30-18,0,0-16.47,4.49-27,6,0,0-6-1.5-16.47-7.49,0,0-37.44-19.47-74.88-6,0,0,9,7.49,18,7.49a411.59,411.59,0,0,1-44.93,9s-41.94,18-56.91,38.94c0,0,1.5,19.47-10.48,43.43,0,0-3,24-6,32.95,0,0-.94,31.14-2.08,49.23-.3,4.7-.6,8.51-.91,10.68-1.5,10.48-1.5,16.47-6,38.94l-6,17.22v13.48s3,27,7.49,44.93a255.3,255.3,0,0,0,6,34.45"
              fill="none"
              transform="translate(0 4.44)"
            />
          </g>
          <g id="Nez">
            <g id="NarineDroiteSide">
              <path
                d="M994.5,401.5s-12,16-7,23c0,0,1,6,15,9,0,0,3,0,1-2a14.09,14.09,0,0,0-5-3s-5-1-9-9C989.5,419.5,986.5,416.5,994.5,401.5Z"
                fill="none"
                stroke="#f2b632"
                strokeWidth="0.25"
                transform="translate(0 4.44)"
              />
            </g>
            <g id="NarineDroite">
              <path
                d="M1000,427s-4-5,2-6,8,0,12,3,7,5,12,13,15,3,15,3a13.37,13.37,0,0,0,5.19-5.06,22.18,22.18,0,0,1,1.53-2.8"
                fill="none"
                stroke="#f2b632"
                strokeWidth="0.25"
                transform="translate(0 4.44)"
              />
            </g>
            <path
              d="M1043,439.62a69.62,69.62,0,0,1,6.45-8.31,34.89,34.89,0,0,1,6.09-5.43c6.5-4.33,10.48-3.9,13.25-1.59s-4.62,5.54-7.71,6.21S1050.29,428.33,1043,439.62Z"
              opacity="0.36"
              stroke="#000"
              transform="translate(0 4.44)"
            />
            <g id="NarineGaucheSide">
              <path
                d="M1075.1,402.5s12,16,7,23c0,0-1,6-15,9,0,0-3,0-1-2a14.09,14.09,0,0,1,5-3s5-1,9-9C1080.1,420.5,1083.1,417.5,1075.1,402.5Z"
                fill="none"
                stroke="#f2b632"
                strokeWidth="0.25"
                transform="translate(0 4.44)"
              />
            </g>
            <g id="NarineGauche">
              <path
                d="M1069.6,428s4-5-2-6-8,0-12,3a37.89,37.89,0,0,0-7.93,7.2"
                fill="none"
                stroke="#f2b632"
                strokeWidth="0.25"
                transform="translate(0 4.44)"
              />
            </g>
            <path
              id="TrouNezDroite"
              d="M1025.72,437.15a69.62,69.62,0,0,0-6.74-8.08,34.89,34.89,0,0,0-6.28-5.21c-6.65-4.1-10.61-3.53-13.29-1.13s4.81,5.37,7.92,5.94S1018.08,426.12,1025.72,437.15Z"
              opacity="0.36"
              stroke="#000"
              transform="translate(0 4.44)"
            />
          </g>
          <g id="Yeux">
            <path
              id="OmbreOeilGauche"
              d="M1075.88,302.26l-11.77,2a3.25,3.25,0,0,0-2.7,3.1c-.18,6,1.4,17.86,10.34,30.32.17.23,2.78,2.81,3,3,2.27,1.91,31.45,18,38.94,16.47,2.34-.47,37.15-16.39,38.94-18,7.76-6.86-15.25-8.64,0-19.47,0,0-27,24-70.39,0-2.07-1.14-5.15,1-7.49,0-7.41-2.3-4.68-6.4,3.43-11.53A3.26,3.26,0,0,0,1075.88,302.26Z"
              opacity="0.05"
              transform="translate(0 4.44)"
            />
            <path
              id="PaupiereDroite"
              d="M990.13,295s-44.93-28.46-77.88,12"
              fill="none"
              stroke="#d5d5d5"
              transform="translate(0 4.44)"
            />
            <path
              id="PaupiereGauche"
              d="M1074.75,298.79s59.16-23.21,84.62,17.22"
              fill="none"
              stroke="#d5d5d5"
              transform="translate(0 4.44)"
            />
            <path
              id="OmbreOeilGauche-2"
              d="M991.79,302.25l11.77,2a3.25,3.25,0,0,1,2.7,3.1c.18,6-1.4,17.86-10.34,30.32-.17.23-2.78,2.81-3,3-2.27,1.91-31.45,18-38.94,16.47-2.34-.47-37.15-16.39-38.94-18-7.76-6.86,15.25-8.64,0-19.47,0,0,27,24,70.39,0,2.07-1.14,5.15,1,7.49,0,7.41-2.3,4.68-6.4-3.43-11.53A3.26,3.26,0,0,1,991.79,302.25Z"
              opacity="0.05"
              stroke="#236187"
              transform="translate(0 4.44)"
            />
            <path
              id="FondOeilGauche"
              d="M1147.45,314.5s-4.49-12-15-15-22.47-1.5-31.45,0c0,0-10.48,4.49-16.47,9,0,0-5.79,3.47-7.19,7.36a1.21,1.21,0,0,0,1.14,1.62h4.55s1.5,0,7.49,3c0,0,34.45,18,55.41-3Z"
              fill="none"
              stroke="#f2b632"
              transform="translate(0 4.44)"
            />
            <path
              id="FondOeilDroite"
              d="M920.29,314.5s4.49-12,15-15,22.47-1.5,31.45,0c0,0,10.48,4.49,16.47,9,0,0,5.79,3.47,7.19,7.36a1.21,1.21,0,0,1-1.14,1.62h-4.55s-1.5,0-7.49,3c0,0-34.45,18-55.41-3Z"
              fill="none"
              stroke="#f2b632"
              transform="translate(0 4.44)"
            />
            <path
              id="SourcilGauche"
              d="M1170.5,285.8h0s-4.9-24.44-39.11-24.44-48.88,3.26-48.88,3.26-14.66,3.26-13,11.41,24.44,1.63,24.44,1.63,29.05-6.12,59,5.35a23.18,23.18,0,0,1,4.51,2.43A11.74,11.74,0,0,0,1170.5,285.8Z"
              fill="none"
              stroke="#f2b632"
              transform="translate(0 4.44)"
            />
            <path
              id="SourcilDroite"
              d="M895,285.8h0s4.9-24.44,39.11-24.44S983,264.62,983,264.62s14.66,3.26,13,11.41-24.44,1.63-24.44,1.63-29.05-6.12-59,5.35a23.18,23.18,0,0,0-4.51,2.43A11.74,11.74,0,0,1,895,285.8Z"
              fill="none"
              stroke="#f2b632"
              transform="translate(0 4.44)"
            />
          </g>
          <g id="Reflet">
            <path
              id="RefletLumiere"
              d="M1196.81,299.54s-1.5-9-1.5-12,1.5-12-6-13.48-4.49,19.47-9,27c0,0,3,16.47,10.48,28.46l4.49,13.48s4.49,10.48-1.5,32.95l-10.48,46.43s-6,19.47-10.48,24c0,0-13.48,24-10.48,44.93a94.61,94.61,0,0,1-6,19.47S1135.61,551,1134,557.8c0,0,32.84-44.09,31.35-48.58,0,0,5.69-1.93,11.08-18.19,0,0,7-14.28,10-38.48l16.39-88.6Z"
              fill="none"
              stroke="#f2b632"
              strokeWidth="2"
              transform="translate(0 4.44)"
            />
          </g>
          <g id="Oreilles">
            <path
              id="OreilleGauche"
              d="M1204.37,449.83a3,3,0,0,0,.7-.08c6.52-1.57,9.46-5.55,10.2-6.73a3,3,0,0,0,.36-.82l9.22-34.26,0-.13c2.92-13.1,5.33-26.52,5.6-28,0-.1,0-.2,0-.29,1.35-17.4,3.88-27.57,4.38-29.43a3,3,0,0,0,.1-.8c-.13-12.77-6.36-14.68-10.06-14.68-.33,0-.65,0-1,0a3,3,0,0,0-2.74,2.73c-1,11.35-7.46,27.81-8.7,30.31a3.86,3.86,0,0,1-3.45,2,3,3,0,0,0-2.75,2.66c-.54,4.75-2.74,13.8-7.49,32.3-3.42,13.34-8.11,31.59-8.72,38.25a3,3,0,0,0,3,3.28h.21a15.48,15.48,0,0,1,9.25,3.11A3,3,0,0,0,1204.37,449.83Z"
              fill="none"
              stroke="#f2b632"
              strokeWidth="3"
              transform="translate(0 4.44)"
            />
            <path
              id="OreilleDroite"
              d="M879.3,446.31s-1.5-3-9,0c0,0-1.5,1.5-4.49,0l-4.49-1.5s-7.49-3-6-10.48c0,0-9-50.92-15-61.41s1.5-12,0-16.47,6-16.47,4.49-22.47c0,0,4.49-6,12-4.49,0,0,10.48,25.46,10.48,32.95,0,0,1.5,31.45,6,49.42A255.3,255.3,0,0,0,879.3,446.31Z"
              fill="none"
              stroke="#f2b632"
              strokeWidth="3"
              transform="translate(0 4.44)"
            />
          </g>
          <g id="Cheveux">
            <path
              id="Cheveux-2"
              d="M858.33,329.49l-3-15s-1.5-13.48-3-34.45c0,0,4.49-3,0-16.47l-3-18s-4.49-16.47,4.49-25.46-9,0-9,0l-7.49,9s10.48-28.46,18-30-1.5-4.49-1.5-4.49l-16.47,16.47,6-19.47,4.49-12,10.48-9s4.49-7.49,4.49-15,6-1.5,6-3-7.49-22.47-40.44-12v-7.49s22.47-6,35.94,0,1.5-3-6-4.49c0,0-1.4-4.21,18.92,1l2.05.53c22.47,6-13.48-18-21-18,0,0,7.49-1.5,28.46,7.49,0,0-6-16.47-13.48-22.47,0,0,19.47,3,25.46,7.49s-4.49-7.49-4.49-7.49a75,75,0,0,0-15-21,61.54,61.54,0,0,1,12-22.47s-1.5,10.48,9,30,12,19.47,12,19.47-22.47-28.46-3-73.39c0,0-7.49,27-3,41.94,0,0,4.49,12,6-1.5,0,0,0-21-1.5-24,0,0,4.49,1.5,7.49,7.49,0,0,21-38.94,47.93-53.92,0,0-13.48,19.47-10.48,28.46,0,0,27-13.48,43.43-18,0,0-4.49,3-12,7.49,0,0,21-1.5,34.45,1.5,0,0,24-15,46.43-13.48,0,0-12,0-13.48,3,0,0-10.48,7.49,1.5,6s3,0,3,0S1081.49,4.49,1101,7.49c0,0,21,9,34.45,22.47,0,0,9,7.49-9,4.49,0,0,4.49,7.49,4.49,15,0,0,9-9,35.94,12,0,0,16.47,1.5,27,10.48,0,0-7.49-1.5-16.47-3,0,0-9-1.5-3,6,0,0,13.48,30,22.47,32.95,0,0-7.49,6-7.49,18v1.5c0-1.5,13.48-13.48,22.47,0,0,0,6,21,10.48,30,0,0,12,38.94,10.48,73.39,0,0-1.5,89.86-9,95.85,0,0-3,9-6,25.46l-6,13.48s-7.49,6.49-7.49-2.75l-4.49-33.2s-3-31.45,4.49-53.92c0,0,4.49-38.94-1.5-59.91,0,0-10.48-44.93-25.46-61.41,0,0-4.49,16.47-13.48,30,0,0-13.76-21.79-22.22-29.24a12.23,12.23,0,0,0-3.24-2.21c-7.49-3-3-6-10.48-15,0,0-35.94,12-53.92,10.48,0,0,34.45-15,40.44-21,0,0-25.46,7.49-43.43,7.49,0,0,31.45-13.48,30-18,0,0-16.47,4.49-27,6,0,0-6-1.5-16.47-7.49,0,0-37.44-19.47-74.88-6,0,0,9,7.49,18,7.49a411.59,411.59,0,0,1-44.93,9s-41.94,18-56.91,38.94c0,0,1.5,19.47-10.48,43.43,0,0-3,24-6,32.95,0,0-.94,31.14-2.08,49.23-.3,4.7-.6,8.51-.91,10.68-1.5,10.48-1.5,16.47-6,38.94l-6.22,20.14Z"
              fill="none"
              stroke="#f2b632"
              strokeWidth="3"
              transform="translate(0 4.44)"
            />
          </g>
          <g id="Bouche">
            <path
              id="LevreHaut"
              d="M1100.5,495.5c-18-3-32.49-6.88-32.49-6.88-16.47-1-25.46,2-25.46,2s-7.49,1-12,0c-1.42-.32-9-3-27-2,0,0-32.13,1.87-44.11,2.88"
              fill="none"
              stroke="#f2b632"
              transform="translate(0 4.44)"
            />
            <path
              id="LevreBas"
              d="M960.17,491.24c-4.58-1.21,30,3,30,3h24l12,1.5a110.2,110.2,0,0,0,24,0s13.48-3,25.46-3,25.46,3,25.46,3-25.46,4.49-37.44,6c0,0-25.46,4.49-52.42,0A463.42,463.42,0,0,1,960.17,491.24Z"
              fill="none"
              stroke="#f2b632"
              transform="translate(0 4.44)"
            />
          </g>
          <g id="Cou">
            <path
              id="CouGauche"
              d="M1180.33,648.5s-37.44-28.46-13.48-127.3"
              fill="none"
              stroke="#f2b632"
              strokeWidth="3"
              transform="translate(0 4.44)"
            />
            <path
              id="CouDroit"
              d="M895.77,623s13.74-39.72,9.12-101.48"
              fill="none"
              stroke="#f2b632"
              strokeWidth="3"
              transform="translate(0 4.44)"
            />
          </g>
        </svg>
      </div>
    );
  }
}
