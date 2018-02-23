import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div className="face">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 504 667.5"
        >
          <defs>
            <filter
              id="luminosity-noclip"
              x="288"
              y="243"
              width="118"
              height="41"
              filterunits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feflood floodColor="#fff" result="bg">
                <feblend in="SourceGraphic" in2="bg" />
              </feflood>
            </filter>
            <mask
              id="mask"
              x="289"
              y="247.5"
              width="118"
              height="41"
              maskunits="userSpaceOnUse"
            >
              <image
                width="118"
                height="41"
                transform="translate(289 247.5)"
                xlinkHref="ai1519142204331.png"
                filter="url(#luminosity-noclip)"
              />
            </mask>
            <filter
              id="luminosity-noclip-2"
              x="100"
              y="251"
              width="128"
              height="44"
              filterunits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feflood floodColor="#fff" result="bg">
                <feblend in="SourceGraphic" in2="bg" />
              </feflood>
            </filter>
            <mask
              id="mask-2"
              x="101"
              y="255.5"
              width="128"
              height="44"
              maskunits="userSpaceOnUse"
            >
              <image
                width="128"
                height="44"
                transform="translate(101 255.5)"
                xlinkHref="ai1519142204332.png"
                filter="url(#luminosity-noclip-2)"
              />
            </mask>
            <lineargradient
              id="linear-gradient"
              x1="111.25"
              y1="584.49"
              x2="133.42"
              y2="586.43"
              gradientunits="userSpaceOnUse"
            >
              <stop offset=".02" stopColor="#3fa9f5" stopOpacity="0" />
              <stop offset=".13" stopColor="#3fa8f4" stopOpacity=".08" />
              <stop offset=".88" stopColor="#3fa9f5" />
            </lineargradient>
            <filter id="blur-1">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
            <filter id="blur-2">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
            </filter>
            <filter id="blur-3">
              <feGaussianBlur in="SourceGraphic" stdDeviation=".50" />
            </filter>
          </defs>

          <path
            d="M407.45,453.05v1.5c-1.49,21.86-18.68,49.24-18.68,49.24l-43.33,61.48c-19.43,23.23-50.8,38.26-50.8,38.26-12,10.93-47.82,8.2-47.82,8.2-28.39,1.37-61.26-19.13-61.26-19.13-25.4-16.4-59.77-72.41-59.77-72.41-23.91-35.52-23.91-56-23.91-56l-19.43-97,1.5-1.47,4.49-33.2s3-31.45-4.49-53.92c0,0-4.49-38.94,1.5-59.91,0,0,10.48-44.93,25.46-61.41,0,0,4.49,16.47,13.48,30,0,0,13.76-21.79,22.22-29.24a12.23,12.23,0,0,1,3.24-2.21c7.49-3,3-6,10.48-15,0,0,35.94,12,53.92,10.48,0,0-34.45-15-40.44-21,0,0,25.46,7.49,43.43,7.49,0,0-31.45-13.48-30-18,0,0,16.47,4.49,27,6,0,0,6-1.5,16.47-7.49,0,0,37.44-19.47,74.88-6,0,0-9,7.49-18,7.49a411.59,411.59,0,0,0,44.93,9s41.94,18,56.91,38.94c0,0-1.5,19.47,10.48,43.43,0,0,3,24,6,32.95,0,0,.94,31.14,2.08,49.23.3,4.7.6,8.51.91,10.68,1.5,10.48,1.5,16.47,6,38.94l6,17.22v13.48s-3,27-7.49,44.93a255.3,255.3,0,0,1-6,34.45"
            transform="translate(1 4.5)"
            fill="none"
            id="Visage"
          />
          <g id="Nez">
            <g id="NarineDroiteSide">
              <path
                d="M286.5,434c-.29,0-1.74,0-2.11-.94s.48-1.65.75-1.92a14.49,14.49,0,0,1,5.2-3.12c.11,0,4.89-1.1,8.71-8.75a.51.51,0,0,1,.09-.13s2.5-3.18-5.09-17.41a.5.5,0,0,1,.84-.54c.5.66,12.07,16.25,7.07,23.5-.23.92-2.12,6.45-15.36,9.28Z"
                transform="translate(0 4.5)"
                fill="none"
                filter="url(#blur-1)"
                stroke="#333333"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <path
                d="M294.5,401.5s12,16,7,23c0,0-1,6-15,9,0,0-3,0-1-2a14.09,14.09,0,0,1,5-3s5-1,9-9C299.5,419.5,302.5,416.5,294.5,401.5Z"
                transform="translate(0 4.5)"
                fill="none"
                filter="url(#blur-3)"
                stroke="#808080"
                stroke-miterlimit="10"
                stroke-width="0.5"
              />
              <path
                d="M286.45,433c-.51,0-1.07-.17-1.13-.32s0-.32.54-.83a13.72,13.72,0,0,1,4.8-2.88c.15,0,5.2-1.12,9.26-9.19.4-.49,1.79-2.93-1.41-11,2.73,5.07,5.25,11.67,2.59,15.4a.51.51,0,0,0-.09.21C301,424.47,299.81,430.12,286.45,433Z"
                transform="translate(0 4.5)"
                fill="none"
                filter="url(#blur-1)"
                stroke="#333333"
                stroke-miterlimit="10"
                stroke-width="2"
              />
            </g>
            <g id="NarineDroite">
              <path
                d="M288.57,427.25a.5.5,0,0,1,0-.56s1.65-2.1,1.08-3.6c-.31-.8-1.24-1.34-2.77-1.59a23.2,23.2,0,0,0-3.76-.37c-3.15,0-4.89,1-7.86,3.28l-.63.47c-3.67,2.74-6.56,4.9-11.24,12.39a9.83,9.83,0,0,1-8.74,4.78,17.09,17.09,0,0,1-6.91-1.6c-.06,0-4.62-2.37-6.12-7l-.11-.21"
                transform="translate(0 4.5)"
                fill="none"
                filter="url(#blur-1)"
                stroke="#333333"
                stroke-width="2"
              />
              <path
                d="M289,427s4-5-2-6-8,0-12,3-7,5-12,13-15,3-15,3a13.37,13.37,0,0,1-5.19-5.06,22.18,22.18,0,0,0-1.53-2.8"
                transform="translate(0 4.5)"
                fill="none"
                filter="url(#blur-3)"
                stroke="#808080"
                stroke-width="0.5"
              />
              <path
                d="M290.2,426.24l-.14,0a4.42,4.42,0,0,0,.56-3.54c-.44-1.16-1.63-1.91-3.54-2.22a24.2,24.2,0,0,0-3.93-.38c-3.57,0-5.57,1.31-8.46,3.47l-.63.47c-3.75,2.8-6.71,5-11.49,12.66a8.77,8.77,0,0,1-7.89,4.31,16.38,16.38,0,0,1-6.46-1.49,12.77,12.77,0,0,1-4.79-4.49"
                transform="translate(0 4.5)"
                fill="none"
                filter="url(#blur-1)"
                stroke="#333333"
                stroke-width="2"
              />
            </g>
            <path
              d="M246,439.62a69.62,69.62,0,0,0-6.45-8.31,34.89,34.89,0,0,0-6.09-5.43c-6.5-4.33-10.48-3.9-13.25-1.59s4.62,5.54,7.71,6.21S238.71,428.33,246,439.62Z"
              transform="translate(0 4.5)"
              fill="#333"
              stroke-miterlimit="10"
              opacity="1"
            />
            <path id="TrouNezDroite" d="M263.28,437.15a69.62,69.62,0,0,1,6.74-8.08,34.89,34.89,0,0,1,6.28-5.21c6.65-4.1,10.61-3.53,13.29-1.13s-4.81,5.37-7.92,5.94S270.92,426.12,263.28,437.15Z" transform="translate(0 4.5)" fill="#333" stroke-miterlimit="10" opacity="1"/>

            <g id="NarineGaucheSide">
              <path
                d="M221.9,435c.29,0,1.74,0,2.11-.94s-.48-1.65-.75-1.92a14.49,14.49,0,0,0-5.2-3.12c-.11,0-4.89-1.1-8.71-8.75a.51.51,0,0,0-.09-.13s-2.5-3.18,5.09-17.41a.5.5,0,0,0-.84-.54c-.5.66-12.07,16.25-7.07,23.5.23.92,2.12,6.45,15.36,9.28Z"
                transform="translate(0 4.5)"
                filter="url(#blur-1)"
                fill="#333333"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <path
                d="M213.9,402.5s-12,16-7,23c0,0,1,6,15,9,0,0,3,0,1-2a14.09,14.09,0,0,0-5-3s-5-1-9-9C208.9,420.5,205.9,417.5,213.9,402.5Z"
                transform="translate(0 4.5)"
                fill="none"
                filter="url(#blur-3)"
                stroke="#808080"
                stroke-miterlimit="10"
                stroke-width="0.5"
              />
              <path
                d="M221.95,434c.51,0,1.07-.17,1.13-.32s0-.32-.54-.83a13.72,13.72,0,0,0-4.8-2.88c-.15,0-5.2-1.12-9.26-9.19-.4-.49-1.79-2.93,1.41-11-2.73,5.07-5.25,11.67-2.59,15.4a.51.51,0,0,1,.09.21C207.4,425.47,208.59,431.12,221.95,434Z"
                transform="translate(0 4.5)"
                fill="none"
                filter="url(#blur-1)"
                stroke="#333333"
                stroke-miterlimit="10"
                stroke-width="2"
              />
            </g>
            <g id="NarineGauche">
              <path
                d="M219.83,428.25a.5.5,0,0,0,0-.56s-1.65-2.1-1.08-3.6c.31-.8,1.24-1.34,2.77-1.59a23.2,23.2,0,0,1,3.76-.37c3.15,0,4.89,1,7.86,3.28l.63.47a34.64,34.64,0,0,1,7.85,7.45"
                transform="translate(0 4.5)"
                fill="none"
                filter="url(#blur-1)"
                stroke="#333333"
                stroke-width="2"
              />
              <path
                d="M219.4,428s-4-5,2-6,8,0,12,3a37.89,37.89,0,0,1,7.93,7.2"
                transform="translate(0 4.5)"
                fill="none"
                filter="url(#blur-3)"
                stroke="#808080"
                stroke-width="0.5"
              />
              <path
                d="M243.5,435.18a16.48,16.48,0,0,0-2.32-3.95,51.93,51.93,0,0,0-6.85-6.16l-.63-.47c-2.88-2.16-4.89-3.47-8.46-3.47a24.2,24.2,0,0,0-3.93.38c-1.9.32-3.09,1.07-3.54,2.22a4.42,4.42,0,0,0,.56,3.54"
                transform="translate(0 4.5)"
                fill="none"
                filter="url(#blur-1)"
                stroke="#333333"
                stroke-width="2"
              />
            </g>
          </g>
          <g id="Yeux">
            <path
              id="OmbreOeilGauche"
              d="M213.12,302.26l11.77,2a3.25,3.25,0,0,1,2.7,3.1c.18,6-1.4,17.86-10.34,30.32-.17.23-2.78,2.81-3,3-2.27,1.91-31.45,18-38.94,16.47-2.34-.47-37.15-16.39-38.94-18-7.76-6.86,15.25-8.64,0-19.47,0,0,27,24,70.39,0,2.07-1.14,5.15,1,7.49,0,7.41-2.3,4.68-6.4-3.43-11.53A3.26,3.26,0,0,1,213.12,302.26Z"
              transform="translate(1 4.5)"
              opacity=".05"
            />
            <path
              id="PaupiereDroite"
              d="M298.87,295s44.93-28.46,77.88,12"
              transform="translate(1 4.5)"
              fill="none"
              stroke="#d5d5d5"
              strokeMiterlimit="10"
              filter="url(#blur-3)"
            />
            <path
              id="PaupiereDroiteNeon"
              d="M376.75,308a1,1,0,0,1-.78-.37c-13.41-16.46-30.35-23.46-50.32-20.8a72.45,72.45,0,0,0-26.25,9,1,1,0,0,1-1.07-1.69,73.09,73.09,0,0,1,27-9.32c14.26-1.91,34.89.27,52.2,21.51a1,1,0,0,1-.77,1.63Z"
              transform="translate(1 4.5)"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              filter="url(#blur-1)"
            />

            <path
              id="PaupiereGauche"
              d="M214.25,298.79S155.09,275.58,129.63,316"
              transform="translate(1 4.5)"
              fill="none"
              stroke="#d5d5d5"
              strokeMiterlimit="10"
              filter="url(#blur-3)"
            />
            <path
              id="PaupiereGaucheNeon"
              d="M129.63,317a1,1,0,0,1-.85-1.53c10.61-16.86,28.84-25.25,52.75-24.24a115,115,0,0,1,33.09,6.62,1,1,0,0,1-.73,1.86c-.58-.23-58.69-22.44-83.41,16.83A1,1,0,0,1,129.63,317Z"
              transform="translate(1 4.5)"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              filter="url(#blur-1)"
            />
            <path
              id="OmbreOeilGauche-2"
              dataName="OmbreOeilGauche"
              d="M297.21,302.25l-11.77,2a3.25,3.25,0,0,0-2.7,3.1c-.18,6,1.4,17.86,10.34,30.32.17.23,2.78,2.81,3,3,2.27,1.91,31.45,18,38.94,16.47,2.34-.47,37.15-16.39,38.94-18,7.76-6.86-15.25-8.64,0-19.47,0,0-27,24-70.39,0-2.07-1.14-5.15,1-7.49,0-7.41-2.3-4.68-6.4,3.43-11.53A3.26,3.26,0,0,0,297.21,302.25Z"
              transform="translate(1 4.5)"
              stroke="#236187"
              strokeMiterlimit="10"
              opacity=".05"
            />

            <path
              id="FondOeilGauche"
              d="M141.55,314.5s4.49-12,15-15,22.47-1.5,31.45,0c0,0,10.48,4.49,16.47,9,0,0,5.79,3.47,7.19,7.36a1.21,1.21,0,0,1-1.14,1.62h-4.55s-1.5,0-7.49,3c0,0-34.45,18-55.41-3Z"
              transform="translate(1 4.5)"
              fill="none"
              stroke="#d9eefd"
              filter="url(#blur-3)"
              strokeMiterlimit="10"
            />
            <path
              id="FondOeilDroite"
              d="M368.71,314.5s-4.49-12-15-15-22.47-1.5-31.45,0c0,0-10.48,4.49-16.47,9,0,0-5.79,3.47-7.19,7.36a1.21,1.21,0,0,0,1.14,1.62h4.55s1.5,0,7.49,3c0,0,34.45,18,55.41-3Z"
              transform="translate(1 4.5)"
              fill="none"
              filter="url(#blur-3)"
              stroke="#d9eefd"
              strokeMiterlimit="10"
            />
            <g
              id="FondOeilDroiteNeon"
              fill="none"
              stroke="#3fa9f5"
              strokeMiterlimit="10"
              filter="url(#blur-1)"
              strokeWidth="2"
            >
              <path
                id="FondOeilDroiteNeonExterieur"
                d="M340.94,329.66c-15.71,0-29.49-7.09-30.07-7.4-4.7-2.35-6.38-2.72-6.67-2.77h-4.45a3.21,3.21,0,0,1-3-4.3c1.54-4.28,7-7.75,7.95-8.35,6.12-4.56,16.37-9,16.81-9.16a2,2,0,0,1,.46-.13,111,111,0,0,1,18-1.76,52.35,52.35,0,0,1,14.31,1.81c11.32,3.23,16.1,15.67,16.3,16.2a2,2,0,0,1-.08,1.6l-1.5,3a2,2,0,0,1-.37.52c-7.13,7.13-16.45,10.75-27.68,10.75Z"
                transform="translate(1 4.5)"
              />
              <path
                id="FondOeilDroiteNeonInterieur"
                d="M340.94,325.66c-14.71,0-28.09-6.87-28.22-6.94-5.82-2.91-7.82-3.22-8.41-3.22H301a20.38,20.38,0,0,1,5.81-5.27l.17-.11c5.26-3.95,14.33-8,15.85-8.65A106.44,106.44,0,0,1,340,299.8a48.39,48.39,0,0,1,13.21,1.65c7.94,2.27,12.17,10.42,13.33,13l-.94,1.88c-6.33,6.21-14.61,9.35-24.62,9.35Z"
                transform="translate(1 4.5)"
              />
            </g>
            <g
              id="FondOeilGaucheNeon"
              fill="none"
              stroke="#3fa9f5"
              strokeMiterlimit="10"
              filter="url(#blur-1)"
              strokeWidth="2"
            >
              <path
                id="FondOeilGaucheNeonExterieur"
                d="M169.31,329.66c15.71,0,29.49-7.09,30.07-7.4,4.7-2.35,6.38-2.72,6.67-2.77h4.45a3.21,3.21,0,0,0,3-4.3c-1.54-4.28-7-7.75-7.95-8.35-6.12-4.56-16.37-9-16.81-9.16a2,2,0,0,0-.46-.13,111,111,0,0,0-18-1.76A52.35,52.35,0,0,0,156,297.6c-11.32,3.23-16.1,15.67-16.3,16.2a2,2,0,0,0,.08,1.6l1.5,3a2,2,0,0,0,.38.52c7.13,7.13,16.45,10.75,27.68,10.75Z"
                transform="translate(1 4.5)"
              />
              <path
                id="FondOeilGaucheNeonInterieur"
                d="M169.31,325.66c14.71,0,28.09-6.87,28.22-6.94,5.82-2.91,7.82-3.22,8.41-3.22h3.28a20.38,20.38,0,0,0-5.81-5.27l-.17-.11c-5.26-3.95-14.33-8-15.85-8.65a106.44,106.44,0,0,0-17.12-1.66,48.39,48.39,0,0,0-13.21,1.65c-7.94,2.27-12.17,10.42-13.33,13l.94,1.88c6.33,6.21,14.61,9.35,24.62,9.35Z"
                transform="translate(1 4.5)"
              />
            </g>
          </g>
          <g
            id="SourcilGaucheNeon"
            fill="none"
            stroke="#b3b3b3"
            strokeWidth="2"
          >
            <path
              d="M124.7,288.62a13,13,0,0,1-6.72-2,1,1,0,0,1-.47-1.05c.05-.25,5.45-25.25,40.09-25.25,33.94,0,49,3.25,49.1,3.28.64.14,15.6,3.57,13.8,12.58-.65,3.25-3.93,4.9-9.76,4.9-7.08,0-15.58-2.4-15.94-2.51h0A104.43,104.43,0,0,0,175.73,277a109.56,109.56,0,0,0-39.31,6.92,22.07,22.07,0,0,0-4.31,2.32A13.52,13.52,0,0,1,124.7,288.62Z"
              transform="translate(0 4.5)"
              filter="url(#blur-1)"
            />
            <path
              d="M124.7,286.62a10.74,10.74,0,0,1-5.05-1.32c1.08-4,7.83-22.94,38-22.94,33.72,0,48.52,3.2,48.67,3.23s13.69,3.14,12.27,10.23c-.44,2.19-3.06,3.29-7.8,3.29-6.8,0-15.3-2.41-15.39-2.43A103,103,0,0,0,175.73,275a111.56,111.56,0,0,0-40,7,24,24,0,0,0-4.7,2.53A11.53,11.53,0,0,1,124.7,286.62Z"
              transform="translate(0 4.5)"
              filter="url(#blur-1)"
            />
          </g>
          <path
            id="SourcilGauche"
            d="M118.5,285.8h0s4.9-24.44,39.11-24.44,48.88,3.26,48.88,3.26,14.66,3.26,13,11.41-24.44,1.63-24.44,1.63-29.05-6.12-59,5.35a23.18,23.18,0,0,0-4.51,2.43A11.74,11.74,0,0,1,118.5,285.8Z"
            transform="translate(0 4.5)"
            fill="none"
            stroke="#b3b3b3"
            filter="url(#blur-3)"
          />
          <g
            id="SourcilDroiteNeon"
            fill="none"
            stroke="#b3b3b3"
            strokeWidth="2"
          >
            <path
              d="M387.8,288.62a13.53,13.53,0,0,1-7.41-2.35,21.78,21.78,0,0,0-4.31-2.32A109.56,109.56,0,0,0,336.77,277a103.48,103.48,0,0,0-19.14,1.61c-.29.09-8.79,2.49-15.87,2.49-5.82,0-9.11-1.65-9.76-4.9-1.8-9,13.16-12.44,13.8-12.58.15,0,15.17-3.28,49.1-3.28,35.09,0,40.05,25,40.09,25.28a1,1,0,0,1-.47,1A13,13,0,0,1,387.8,288.62Z"
              transform="translate(0 4.5)"
              filter="url(#blur-1)"
            />
            <path
              d="M387.8,286.62a11.53,11.53,0,0,1-6.3-2,24,24,0,0,0-4.7-2.53,111.55,111.55,0,0,0-40-7,103.58,103.58,0,0,0-19.55,1.65c-.15,0-8.66,2.45-15.46,2.45-4.74,0-7.36-1.11-7.8-3.29-1.42-7.1,12.13-10.2,12.27-10.23s15-3.23,48.67-3.23c13.63,0,24.54,4.07,31.54,11.78a29.09,29.09,0,0,1,6.41,11.17A10.74,10.74,0,0,1,387.8,286.62Z"
              transform="translate(0 4.5)"
              filter="url(#blur-1)"
            />
          </g>
          <path
            id="SourcilDroite"
            d="M394,285.8h0s-4.9-24.44-39.11-24.44S306,264.62,306,264.62s-14.66,3.26-13,11.41,24.44,1.63,24.44,1.63,29.05-6.12,59,5.35a23.18,23.18,0,0,1,4.51,2.43A11.74,11.74,0,0,0,394,285.8Z"
            transform="translate(0 4.5)"
            fill="none"
            stroke="#b3b3b3"
            filter="url(#blur-3)"
          />

          <g id="Reflet">
            <path
              id="RefletLumiere"
              d="M92.19,299.54s1.5-9,1.5-12-1.5-12,6-13.48,4.49,19.47,9,27c0,0-3,16.47-10.48,28.46L93.69,343s-4.49,10.48,1.5,32.95l10.48,46.43s6,19.47,10.48,24c0,0,13.48,24,10.48,44.93a94.61,94.61,0,0,0,6,19.47S153.39,551,155,557.8c0,0-32.84-44.09-31.35-48.58,0,0-5.69-1.93-11.08-18.19,0,0-7-14.28-10-38.48L86.2,363.94Z"
              transform="translate(0 4.5)"
              fill="none"
              stroke="#f1f1f1"
              stroke-miterlimit="10"
              stroke-width="2"
              filter="url(#blur-2)"
            />
            <g id="RefletLumiereNeon">
              <path
                d="M155,559.8a2,2,0,0,1-1.6-.81c-.08-.11-8.32-11.18-16.27-22.66-12-17.4-14.95-23.42-15.45-25.95-2.23-1.52-6.75-6-11-18.6-.76-1.58-7.27-15.64-10.09-38.94L84.23,364.3a2,2,0,0,1,0-.55l6-64.4s0-.1,0-.14c.41-2.45,1.47-9.33,1.47-11.65,0-.34,0-.76,0-1.25-.18-3.75-.62-12.54,7.64-14.19a5.74,5.74,0,0,1,1.13-.12c5.57,0,6.39,7.44,7.26,15.32.54,4.92,1.1,10,2.71,12.69a2,2,0,0,1,.25,1.39c-.12.68-3.12,16.81-10.63,29L95.59,343.6l-.06.16c0,.09-4.1,10.3,1.59,31.65l10.49,46.43c1.65,5.34,6.58,19.68,10,23.06a2,2,0,0,1,.33.43c.56,1,13.65,24.56,10.77,45.87a95,95,0,0,0,5.78,18.66c1.24,2.4,20.87,40.56,22.5,47.48A2,2,0,0,1,155,559.8Z"
                transform="translate(0 4.5)"
                fill="none"
                stroke="white"
                stroke-miterlimit="10"
                filter="url(#blur-1)"
                stroke-width="2"
              />
              <path
                d="M146.06,542.14c-11-15.51-20.23-29.62-20.47-32.5a2,2,0,0,0-1.31-2.32h0s-5-2.27-9.83-16.93a2.12,2.12,0,0,0-.1-.25c-.07-.14-6.94-14.31-9.77-37.84l0-.12L88.22,363.85l6-64.05a122.31,122.31,0,0,0,1.51-12.24c0-.39,0-.88-.05-1.44-.23-4.6-.07-9.17,4.43-10.07a1.8,1.8,0,0,1,.34,0c2,0,2.76,7.07,3.28,11.75.55,5,1.11,10.15,2.87,13.61-.66,3.2-3.73,16.92-10.08,27.07a2,2,0,0,0-.2.43l-4.47,13.42c-.47,1.18-4.43,12.13,1.44,34.16l10.47,46.35,0,.15c.62,2,6.1,19.54,10.77,24.57,1.3,2.4,12.85,24.44,10.13,43.45a2,2,0,0,0,0,.61,95.8,95.8,0,0,0,6.13,19.93l.06.13C134.24,518.19,140.9,531.35,146.06,542.14Z"
                transform="translate(0 4.5)"
                fill="none"
                stroke="white"
                stroke-miterlimit="10"
                filter="url(#blur-1)"
                stroke-width="2"
              />
            </g>
          </g>
          <g id="Oreilles" fill="none" strokeMiterlimit="10" strokeWidth="3">
            <g id="OreilleGaucheNeon" stroke="#3fa8f4" filter="url(#blur-1)">
              <path
                id="OreilleGaucheNeonExterieur"
                d="M84.63,452.83a6,6,0,0,1-1.4-.17,19.46,19.46,0,0,1-12-8,6,6,0,0,1-.71-1.63l-9.22-34.26-.07-.27c-2.93-13.13-5.35-26.62-5.62-28.11,0-.2-.06-.39-.07-.58-1.33-17.14-3.8-27.08-4.29-28.9a6,6,0,0,1-.2-1.6c.16-15.93,9.19-17.65,13.06-17.65.42,0,.82,0,1.2,0a6,6,0,0,1,5.48,5.46c.94,10.89,7.35,27.12,8.4,29.22.08.17.56.28,1,.31a6,6,0,0,1,5.5,5.31c.52,4.57,2.71,13.53,7.42,31.89,3.45,13.43,8.17,31.82,8.8,38.72a6,6,0,0,1-6,6.55h-.22a12.45,12.45,0,0,0-7.43,2.5A6,6,0,0,1,84.63,452.83Z"
                transform="translate(1 4.5)"
              />
              <path
                id="OreilleGaucheNeonInterieur"
                d="M84.63,446.83c-5.48-1.32-7.84-4.58-8.36-5.41L67,407.16c-2.91-13-5.3-26.36-5.57-27.88-1.36-17.51-3.89-27.78-4.47-30,.08-7.77,2.45-11.71,7.06-11.71.25,0,.49,0,.71,0,1,11.71,7.6,28.57,9,31.39a6.73,6.73,0,0,0,5.9,3.61c.57,5.07,2.91,14.55,7.57,32.71,3.28,12.78,8,31.35,8.64,37.78h-.21A18.45,18.45,0,0,0,84.63,446.83Z"
                transform="translate(1 4.5)"
              />
            </g>
            <path
              id="OreilleGauche"
              d="M84.63,449.83a3,3,0,0,1-.7-.08c-6.52-1.57-9.46-5.55-10.2-6.73a3,3,0,0,1-.36-.82l-9.22-34.26,0-.13c-2.92-13.1-5.33-26.52-5.6-28,0-.1,0-.2,0-.29-1.35-17.4-3.88-27.57-4.38-29.43a3,3,0,0,1-.1-.8c.13-12.77,6.36-14.68,10.06-14.68.33,0,.65,0,1,0a3,3,0,0,1,2.74,2.73c1,11.35,7.46,27.81,8.7,30.31a3.86,3.86,0,0,0,3.45,2,3,3,0,0,1,2.75,2.66c.54,4.75,2.74,13.8,7.49,32.3,3.42,13.34,8.11,31.59,8.72,38.25a3,3,0,0,1-3,3.28h-.21a15.48,15.48,0,0,0-9.25,3.11A3,3,0,0,1,84.63,449.83Z"
              transform="translate(1 4.5)"
              filter="url(#blur-2)"
              stroke="#d9eefd"
            />
            <g id="OreilleDroiteNeon" stroke="#3fa8f4" filter="url(#blur-1)">
              <path
                id="OreilleDroiteNeonExterieur"
                d="M420.68,450a6.24,6.24,0,0,1-3.48-1,12.12,12.12,0,0,0-4.17-1,2.6,2.6,0,0,0-.93.13,3,3,0,0,1-5.31-2.52,254.84,254.84,0,0,0,5.91-34,2.88,2.88,0,0,1,.08-.46c4.27-17.1,5.82-47.2,5.9-48.78.06-7.93,9.62-31.36,10.71-34a3,3,0,0,1,2.19-1.8,15.21,15.21,0,0,1,3-.3,15.92,15.92,0,0,1,12,5.93,3,3,0,0,1,.51,2.53c-.56,2.24,1.05,6.87,2.35,10.59,1.68,4.81,3.13,9,2.08,12.1-.12.37,0,.66.68,2,1.87,3.53,3.34,7.59-.92,15-4.65,8.13-12,45.5-14.54,59.92,1.17,7.5-4.62,11.95-7.92,13.27l-.17.06-4.31,1.44A8.47,8.47,0,0,1,420.68,450Z"
                transform="translate(1 4.5)"
              />
              <path
                id="OreilleDroiteNeonInterieur"
                d="M420.68,444h-.12a3,3,0,0,0-.76-.44,20.13,20.13,0,0,0-6-1.52,257.74,257.74,0,0,0,4.85-29.64c4.47-18.08,6-48.5,6-49.79,0,0,0-.09,0-.14,0-4.79,5.51-20.08,9.6-30.19h.27A9.56,9.56,0,0,1,441,335c-.25,3.68,1.28,8.05,2.76,12.31,1,2.8,2.45,7,2.06,8.23-1,2.87.21,5.07,1.07,6.68,1.15,2.17,2.15,4.05-.83,9.25-6.18,10.81-15,60.27-15.33,62.37a3,3,0,0,0,0,1.11c.93,4.64-3.33,6.74-4.11,7.09l-4.38,1.46a3,3,0,0,0-.39.16A2.7,2.7,0,0,1,420.68,444Z"
                transform="translate(1 4.5)"
              />
            </g>
            <path
              id="OreilleDroite"
              d="M409.7,446.31s1.5-3,9,0c0,0,1.5,1.5,4.49,0l4.49-1.5s7.49-3,6-10.48c0,0,9-50.92,15-61.41s-1.5-12,0-16.47-6-16.47-4.49-22.47c0,0-4.49-6-12-4.49,0,0-10.48,25.46-10.48,32.95,0,0-1.5,31.45-6,49.42A255.3,255.3,0,0,1,409.7,446.31Z"
              transform="translate(1 4.5)"
              filter="url(#blur-2)"
              stroke="#d9eefd"
            />
          </g>
          <g id="Cheveux" fill="none" strokeMiterlimit="10" strokeWidth="3">
            <g id="CheveuxNeon" stroke="#3fa9f5" filter="url(#blur-1)">
              <path
                id="CheveuxNeonExterieur"
                d="M81.9,370.65c-3.09,0-6.08-2.46-6.65-2.95a3,3,0,0,1-.78-1l-6-13.48a3,3,0,0,1-.21-.68,219.29,219.29,0,0,0-5.66-24.33c-2-2.19-5.3-9.6-7.68-51.67-1.3-23-1.69-45.57-1.69-45.8-1.5-34.49,10.12-72.71,10.62-74.32a3,3,0,0,1,.18-.46c4.32-8.63,10.22-29.23,10.28-29.44a3,3,0,0,1,.39-.84C78.95,119.3,84.06,118,87.6,118A17.84,17.84,0,0,1,96,120.27a19.43,19.43,0,0,0-5.73-10.1,3,3,0,0,1,.93-5.19c5.33-1.78,15.3-19.39,20.68-31.33a3,3,0,0,1,.39-.64,13.56,13.56,0,0,0,.89-1.24,8.22,8.22,0,0,0-1.06.08c-8.82,1.47-16.29,3-16.37,3a3,3,0,0,1-.59.06,3,3,0,0,1-2-5.28C103,61.24,117.25,59,121,58.52c12.1-9.3,22.35-14,30.49-14a17.24,17.24,0,0,1,4,.45,36.4,36.4,0,0,1,2-6.87c-.66,0-1.27.06-1.84.06-1.45,0-5.85,0-7.07-3.36-1.14-3.15,1.84-6.09,3-7,13.73-13.68,34.42-22.64,35.3-23a3,3,0,0,1,.73-.21A51.89,51.89,0,0,1,195.43,4a84.09,84.09,0,0,1,23,3.66A3,3,0,0,1,220.79,3c1.11-.07,2.26-.11,3.42-.11,19.63,0,39,10.64,43.75,13.41A115.21,115.21,0,0,1,289.7,14.6h1c-1.55-1-2.41-1.57-2.49-1.62a3,3,0,0,1,2.45-5.39c12.93,3.53,31.8,12.29,40,16.23-.85-6.43-6.3-16.34-10.29-22.11A3,3,0,0,1,320.61-2a3,3,0,0,1,2.22-1,3,3,0,0,1,1.46.38c11.56,6.42,23.34,17.66,35,33.41,5.27,7.1,9.26,13.46,11.63,17.43a15.54,15.54,0,0,1,6.35-4.64,3,3,0,0,1,2.35.19c-1.23-7.33-2.76-12.9-2.79-13a3,3,0,0,1,5.64-2c7.6,17.54,9.06,32.63,7.9,44.66,5.09-12.36,4.36-19,4.35-19.1a3,3,0,0,1,3-3.39A3,3,0,0,1,400,52a64.15,64.15,0,0,1,12.61,23.69,3,3,0,0,1-.79,2.85,73.27,73.27,0,0,0-14.26,19.85,136.48,136.48,0,0,1,17.67-4,3,3,0,0,1,.46,0,3,3,0,0,1,1.87,5.34c-3.72,3-7.32,9.39-9.79,14.64,11.63-4.37,18.26-5.1,21.39-5.1a11.13,11.13,0,0,1,2.08.15,3,3,0,0,1-.59,5.94c-3.28,0-15.78,7.22-22,12.13l.23-.06,2.08-.54c7-1.77,12.27-2.67,15.78-2.67,2,0,4.74.23,6.17,2.21a3.9,3.9,0,0,1,.68,1.58,56.77,56.77,0,0,1,6.36-.34,93.14,93.14,0,0,1,21.41,2.76,3,3,0,0,1,2.23,2.9v7.49a3,3,0,0,1-3.91,2.86,53,53,0,0,0-15.85-2.78c-10.58,0-16,4.64-18.57,8.21,1.63.42,3.88,1.88,3.88,6.69,0,5.64,3,11.49,3.84,13l10.08,8.64a3,3,0,0,1,.86,1.22l4.49,12,.06.17,6,19.47a3,3,0,0,1-5,3l-2.77-2.77a154.24,154.24,0,0,1,7.71,17.59,3,3,0,0,1-5.12,3l-7.08-8.5c-.72-.35-1.46-.7-2.18-1,6.09,9.75,3,23,2.53,24.71l-3,17.84a2.92,2.92,0,0,1-.11.46c-3.32,10-1.21,12.9-1,13.18a3,3,0,0,1,1.13,2.56c-1.48,20.79-3,34.43-3,34.56s0,.17,0,.26l-3,15c0,.08,0,.16-.06.24l-8.76,30.62a3,3,0,0,1-2.85,2.17h0A3,3,0,0,1,419,361l-6.22-20.14a2.83,2.83,0,0,1-.08-.3c-3.28-16.41-4.2-24.22-5-31.11-.31-2.65-.6-5.15-1-8-.3-2.11-.61-5.68-.94-10.91-1.06-16.78-2-45.08-2.07-48.9-2.79-8.78-5.46-29-5.92-32.59-10.48-21.2-10.75-38.79-10.62-43.4-14.06-18.68-50.61-35.15-54.68-36.94a419.46,419.46,0,0,1-44.89-9,3,3,0,0,1,.77-5.9c4,0,8.07-1.76,11.13-3.5a82.16,82.16,0,0,0-21.4-2.75c-24.31,0-44.13,9.84-45.21,10.38-10.68,6.1-16.91,7.69-17.17,7.76a3,3,0,0,1-1.15.06c-4.29-.61-9.49-1.7-14.2-2.78,5.41,2.94,12.35,6.27,18.8,9a3,3,0,0,1-1.18,5.76,134.55,134.55,0,0,1-24.63-2.88c7.54,3.76,16.16,7.71,22.83,10.61a3,3,0,0,1-.95,5.74c-1.11.09-2.32.14-3.6.14-16.47,0-42.11-7.76-49.5-10.11a20.36,20.36,0,0,0-3.26,6.55c-1.09,3.36-2.18,5.71-7.18,7.71a9.13,9.13,0,0,0-2.37,1.68c-8,7.09-21.53,28.38-21.66,28.59a3,3,0,0,1-2.5,1.4h0a3,3,0,0,1-2.5-1.34,114.66,114.66,0,0,1-12.13-25.3C98,178.78,89.22,215.94,89.12,216.35l0,.14c-5.49,19.2-1.83,54.8-1.44,58.44,7.48,22.78,4.66,53.54,4.53,54.84,0,0-4.48,33.13-4.48,33.13C87.62,370.09,83.25,370.65,81.9,370.65ZM379.75,70.22c0,.29.07.56.1.82l0-.12c1.72-5.84,1.49-13.75.63-21C380.05,54,379.76,62.71,379.75,70.22ZM229.64,11.55l3.71.45.16,0c-.26-.21-.52-.41-.78-.59a3,3,0,0,1-.8-.86c-1-.71-4.92-1.36-9-1.53C225.91,10,228.21,11,229.64,11.55Z"
                transform="translate(1 4.5)"
              />
              <path
                id="CheveuxNeonInterieur"
                d="M81.51,364.57a8,8,0,0,1-1.86-1l-5.55-12.48c-3-16.27-5.91-25.15-6-25.52a3,3,0,0,0-1-1.39c-4-4.4-7.15-51-7.86-93.56-1.4-32.25,9.32-69,10.28-72.23C73.75,149.78,79,131.81,80,128.6c2.18-3.12,4.69-4.63,7.64-4.63,4.21,0,8.31,3.17,9.26,4.36a3,3,0,0,0,5.82-1v-1.5a27.73,27.73,0,0,0-5.79-17.34c8.68-7.08,18-26.86,20.35-32,1.11-1.41,3.47-4.72,2-7.73-.56-1.17-1.82-2.54-4.61-2.88a57.34,57.34,0,0,1,7.78-1.45,3,3,0,0,0,1.57-.62c14.09-11,22.72-13.26,27.48-13.26A7.7,7.7,0,0,1,156,51.59a2.74,2.74,0,0,0,2.09.94,3.22,3.22,0,0,0,1.11-.2,3,3,0,0,0,1.88-2.91c0-6.58,4-13.37,4.07-13.43a3,3,0,0,0-2.57-4.54,3,3,0,0,0-.49,0,41.27,41.27,0,0,1-6.41.67h0l.08-.08c12-12,30.43-20.46,33.17-21.68a46.23,46.23,0,0,1,6.55-.45c14.13,0,28.26,5.58,32.25,7.29a3,3,0,0,0,.85.22c.95.1,2.26.26,4.06.48a25.2,25.2,0,0,0,3.11.22c3.2,0,5.16-1,5.82-3.11a4.55,4.55,0,0,0-.5-3.69A106,106,0,0,1,265.83,22a3,3,0,0,0,2.24.38c5.3-1.18,12.78-1.8,21.63-1.8,6.73,0,11.9.36,12,.37h.21a3,3,0,0,0,2.86-2.1v0C318.28,24.31,331.79,31,332,31.14a3,3,0,0,0,4.19-1.73c1.75-5.25-.85-12.87-4-19.28,20.59,17,35.74,44.88,35.92,45.21a3,3,0,0,0,2.64,1.58h0a3,3,0,0,0,2.64-1.66c.24-.47.48-.91.74-1.32-.35,5.35-.43,11.86-.43,16.45a2.9,2.9,0,0,0,0,.33c.33,2.95,1,9.07,5.41,9.07h0c1.76,0,3.34-1.13,4.72-3.38q-.45,3-1.19,6c-3,12.06-8.27,19-8.32,19a3,3,0,0,0,2.36,4.85c1.77,0,3.29,0,14.62-21,5.35-9.94,7.71-17.71,8.71-23.08a61.49,61.49,0,0,1,6.24,13.33,78.48,78.48,0,0,0-14.15,20.17c-7.32,8.4-7.28,9.61-6.51,11.31a3.13,3.13,0,0,0,2.85,1.83c1.15,0,2.12-.57,3.51-1.61,2.83-2.12,9.79-4,15.8-5.35a89.54,89.54,0,0,0-8.44,16.9,3,3,0,0,0,4,3.78q2.19-.94,4.17-1.72c-3.54,2.59-6.36,5.12-7.43,7a4.18,4.18,0,0,0-.23,4.36c.55.94,1.74,2.07,4.35,2.07a25.7,25.7,0,0,0,6.22-1.06l2-.53c2.17-.55,4.06-1,5.7-1.33-1.65,1.28-2.74,2.69-2.6,4.12a3.22,3.22,0,0,0,3.33,2.87c.94,0,2.44-.28,7-2.3,3.59-1.59,8.33-2.4,14.09-2.4a87.43,87.43,0,0,1,17.63,2v1.12a54.88,54.88,0,0,0-13.76-1.93c-19.71,0-26.68,14.26-26.68,17.91a3.21,3.21,0,0,0,3.24,3.25,5.63,5.63,0,0,0,2.33-.65l.4-.17c0,.16,0,.35,0,.56,0,8.22,4.72,16.19,4.92,16.52a3,3,0,0,0,.62.73l9.9,8.48,4.19,11.17,2.41,7.84-7.93-7.93a3,3,0,0,0-3.07-.73c-4.48,1.49-6.68,3.5-6.52,6,.2,3.27,4.1,4.05,5.38,4.31,2,.41,5.88,6.15,9.78,14.08-3-1.39-7.1-3-9.35-3a3.67,3.67,0,0,0-3.59,2.19c-1,2.48,1,4.78,3.13,6.92,7.67,7.67,3.76,22.4,3.72,22.55s0,.2-.06.3l-3,17.74c-3.56,10.83-1.78,16-.16,18.26-1.37,18.9-2.73,31.53-2.88,32.93l-2.95,14.73-6,20.81-3.2-10.35c-3.21-16.07-4.11-23.73-4.9-30.49-.32-2.68-.61-5.22-1-8.14-.27-1.92-.57-5.44-.89-10.44-1.12-17.83-2.07-48.82-2.08-49.13a3,3,0,0,0-.15-.86c-2.87-8.6-5.83-32.14-5.86-32.37a3,3,0,0,0-.29-1c-11.48-23-10.19-41.67-10.18-41.86a3,3,0,0,0-.55-2c-15.29-21.4-56.43-39.21-58.17-40a3,3,0,0,0-.79-.22c-12.32-1.64-24.75-4.22-33.33-6.18a43.32,43.32,0,0,0,7.9-5,3,3,0,0,0-.9-5.13,86.14,86.14,0,0,0-29.26-4.93,113.87,113.87,0,0,0-48,11.08l-.1.06a79.5,79.5,0,0,1-15.19,7c-10.21-1.54-25.8-5.78-26-5.82a3,3,0,0,0-3.64,1.95c-1.11,3.33,1.14,6.73,15.89,14.29l.1.05a240.56,240.56,0,0,1-25.78-5.79,3,3,0,0,0-3,5c3.64,3.64,16,9.9,26.31,14.77-17.05-2.74-36.47-9.17-36.72-9.25a3,3,0,0,0-3.25.93A27,27,0,0,0,153.19,146c-.75,2.33-.93,2.89-3.7,4a14.81,14.81,0,0,0-4.11,2.75c-6.5,5.73-15.73,19.15-20.18,25.9a120.12,120.12,0,0,1-10.64-25.15,3,3,0,0,0-5.11-1.23c-15.17,16.68-25.51,60-26.15,62.67-6.06,21.31-1.76,59.39-1.57,61a3,3,0,0,0,.13.6c7.05,21.16,4.49,51.15,4.36,52.63l-4.48,33.13a3,3,0,0,0,0,.4A7.37,7.37,0,0,1,81.51,364.57Z"
                transform="translate(1 4.5)"
              />
            </g>
            <path
              id="Cheveux-2"
              dataName="Cheveux"
              d="M430.67,329.49l3-15s1.5-13.48,3-34.45c0,0-4.49-3,0-16.47l3-18s4.49-16.47-4.49-25.46,9,0,9,0l7.49,9s-10.48-28.46-18-30,1.5-4.49,1.5-4.49l16.47,16.47-6-19.47-4.49-12-10.48-9s-4.49-7.49-4.49-15-6-1.5-6-3,7.49-22.47,40.44-12v-7.49s-22.47-6-35.94,0-1.5-3,6-4.49c0,0,1.4-4.21-18.92,1l-2.05.53c-22.47,6,13.48-18,21-18,0,0-7.49-1.5-28.46,7.49,0,0,6-16.47,13.48-22.47,0,0-19.47,3-25.46,7.49s4.49-7.49,4.49-7.49a75,75,0,0,1,15-21,61.54,61.54,0,0,0-12-22.47s1.5,10.48-9,30-12,19.47-12,19.47,22.47-28.46,3-73.39c0,0,7.49,27,3,41.94,0,0-4.49,12-6-1.5,0,0,0-21,1.5-24,0,0-4.49,1.5-7.49,7.49,0,0-21-38.94-47.93-53.92,0,0,13.48,19.47,10.48,28.46,0,0-27-13.48-43.43-18,0,0,4.49,3,12,7.49,0,0-21-1.5-34.45,1.5,0,0-24-15-46.43-13.48,0,0,12,0,13.48,3,0,0,10.48,7.49-1.5,6s-3,0-3,0S207.51,4.49,188,7.49c0,0-21,9-34.45,22.47,0,0-9,7.49,9,4.49,0,0-4.49,7.49-4.49,15,0,0-9-9-35.94,12,0,0-16.47,1.5-27,10.48,0,0,7.49-1.5,16.47-3,0,0,9-1.5,3,6,0,0-13.48,30-22.47,32.95,0,0,7.49,6,7.49,18v1.5c0-1.5-13.48-13.48-22.47,0,0,0-6,21-10.48,30,0,0-12,38.94-10.48,73.39,0,0,1.5,89.86,9,95.85,0,0,3,9,6,25.46l6,13.48s7.49,6.49,7.49-2.75l4.49-33.2s3-31.45-4.49-53.92c0,0-4.49-38.94,1.5-59.91,0,0,10.48-44.93,25.46-61.41,0,0,4.49,16.47,13.48,30,0,0,13.76-21.79,22.22-29.24a12.23,12.23,0,0,1,3.24-2.21c7.49-3,3-6,10.48-15,0,0,35.94,12,53.92,10.48,0,0-34.45-15-40.44-21,0,0,25.46,7.49,43.43,7.49,0,0-31.45-13.48-30-18,0,0,16.47,4.49,27,6,0,0,6-1.5,16.47-7.49,0,0,37.44-19.47,74.88-6,0,0-9,7.49-18,7.49a411.59,411.59,0,0,0,44.93,9s41.94,18,56.91,38.94c0,0-1.5,19.47,10.48,43.43,0,0,3,24,6,32.95,0,0,.94,31.14,2.08,49.23.3,4.7.6,8.51.91,10.68,1.5,10.48,1.5,16.47,6,38.94l6.22,20.14Z"
              transform="translate(1 4.5)"
              filter="url(#blur-2)"
              stroke="#d8edfc"
            />
          </g>
          <g id="Bouche" fill="none" strokeMiterlimit="10">
            <path
              id="LevreHautNeon"
              d="M188.5,496.5a1,1,0,0,1-.17-2c17.72-3,32.26-6.82,32.4-6.86l.2,0c15.76-1,24.67,1.69,25.74,2,.84.11,7.53.9,11.54,0l.55-.14c2.55-.7,10.3-2.82,26.68-1.9.32,0,32.28,1.88,44.13,2.88a1,1,0,0,1-.17,2c-11.83-1-43.76-2.86-44.08-2.88-16.06-.9-23.57,1.15-26,1.83l-.64.17c-4.62,1-12,.06-12.33,0l-.18,0c-.09,0-9-2.94-25-2-1.31.34-15.44,4-32.49,6.88Z"
              transform="translate(0 4.5)"
              stroke="#b3b3b3"
              strokeWidth="2"
              filter="url(#blur-1)"
            />
            <path
              id="LevreHaut"
              d="M188.5,495.5c18-3,32.49-6.88,32.49-6.88,16.47-1,25.46,2,25.46,2s7.49,1,12,0c1.42-.32,9-3,27-2,0,0,32.13,1.87,44.11,2.88"
              transform="translate(0 4.5)"
              stroke="#fff"
              strokeWidth=".5"
            />
            <g
              id="LevreBasNeon"
              dataName="LevreBasNeon"
              stroke="#b3b3b3"
              strokeWidth="2"
              filter="url(#blur-1)"
            >
              <path
                d="M252.33,504.72a173.73,173.73,0,0,1-27-2c-11.82-1.48-37.19-5.95-37.44-6a1,1,0,0,1,0-2c.14,0,13.72-3,25.68-3s25.54,3,25.68,3h0a113.79,113.79,0,0,0,12.21.64,92.71,92.71,0,0,0,11.41-.66l12-1.5h24c1.73-.21,26.51-3.21,30-3.21.84,0,1.31.31,1.39.92.12.93-.84,1.18-1.16,1.26a469.12,469.12,0,0,1-51,10.51,157.17,157.17,0,0,1-25.7,2Z"
                transform="translate(0 4.5)"
              />
              <path
                d="M252.33,502.72a171.84,171.84,0,0,1-26.67-2c-8.5-1.06-23.89-3.65-32-5.05a124.64,124.64,0,0,1,19.89-1.95c11.74,0,25.11,2.94,25.24,3a111.21,111.21,0,0,0,12.64.69,94.62,94.62,0,0,0,11.66-.67L275,495.24h24c.16,0,9.85-1.2,18.22-2.12-22.55,5.34-39.25,7.6-39.44,7.62a155.39,155.39,0,0,1-25.44,2Z"
                transform="translate(0 4.5)"
              />
            </g>
            <path
              id="LevreBas"
              d="M328.83,491.24c4.58-1.21-30,3-30,3h-24l-12,1.5a110.2,110.2,0,0,1-24,0s-13.48-3-25.46-3-25.46,3-25.46,3,25.46,4.49,37.44,6c0,0,25.46,4.49,52.42,0A463.42,463.42,0,0,0,328.83,491.24Z"
              transform="translate(0 4.5)"
              stroke="#fff"
              strokeWidth=".5"
            />
          </g>
          <g id="Cou" strokeMiterlimit="10" strokeWidth="3">
            <path
              d="M108.67,651.5a3,3,0,0,1-1.83-5.38c.15-.12,9-7.18,14.9-25.75,5.54-17.35,9.6-48.52-2.51-98.47a3,3,0,1,1,5.83-1.41c24.15,99.61-13,129.19-14.58,130.4A3,3,0,0,1,108.67,651.5Z"
              transform="translate(1 4.5)"
              stroke="#3fa9f5"
              filter="url(#blur-1)"
            />
            <path
              id="CouGauche"
              d="M108.67,648.5S146.11,620,122.14,521.2"
              transform="translate(1 4.5)"
              fill="none"
              stroke="#d9eefd"
            />
            <path
              d="M393.23,626a3,3,0,0,1-2.83-2c-.57-1.65-13.89-41-9.27-102.69a3,3,0,1,1,6,.45c-4.53,60.45,8.83,99.89,9,100.28a3,3,0,0,1-2.83,4Z"
              transform="translate(1 4.5)"
              fill="none"
              stroke="#3fa9f5"
              filter="url(#blur-1)"
            />
            <path
              id="CouDroit"
              d="M393.23,623s-13.74-39.72-9.12-101.48"
              transform="translate(1 4.5)"
              fill="none"
              stroke="#d9eefd"
            />
          </g>
        </svg>
      </div>
    );
  }
}
