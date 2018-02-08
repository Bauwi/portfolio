import React, { Component } from "react";
import { Icon } from "antd";

import StyledWrapper from "../StyledWrapper";
const WrapperHeader = (
  <header className="styled-wrapper__header">
    <p>college().lycée().then(() => {"{"} </p>
  </header>
);

const WrapperFooter = (
  <footer>
    <p>{`};`}</p>
    <p />
  </footer>
);

const academics = [
  {
    title: "Master 1 History",
    graduated: false,
    year: "2015 - 2016",
    subtitle: {
      description: "Master 1 Recherche Histoire",
      location: "Paris I Panthéon-Sorbonne"
    },
    infos: {
      majors: "",
      minors: "",
      speciality: "Histoire des Sociétés Contemporaines (1800 - 1940)"
    }
  },
  {
    title: "Licence History",
    graduated: true,
    year: "2012 - 2015",
    subtitle: {
      description: "Licence Histoire",
      location: "Paris I Panthéon-Sorbonne"
    },
    infos: {
      majors:
        "Histoire Contemporaine, Histoire Moderne, Histoire Médiévale, Histoire Ancienne.",
      minors: "Sociologie, Anglais, Russe, Histoire des Media.",
      speciality: ""
    }
  },
  {
    title: "DUT Mesures Physiques",
    graduated: true,
    year: "2009 - 2011",
    subtitle: {
      description: "Diplome Universitaire de Technologie Mesures Physiques",
      location: "IUT Paris-Jussieu"
    },
    infos: {
      majors: "Sciences Physiques, Chimie, Sciences de l'Ingénieur.",
      minors: "Mathématiques, Informatique, Anglais.",
      speciality: ""
    }
  },
  {
    title: "Classes Préparatoires Commerce",
    graduated: false,
    year: "2008 - 2009",
    subtitle: {
      description: "Classes Préparatoires aux Grandes Ecoloes de commerce",
      location: "Lycée A. Kastler"
    },
    infos: {
      majors: "Mathématiques, Histoire.",
      minors: "Economie, Français, Philosophie.",
      speciality: ""
    }
  },
  {
    title: "Baccalauréat Scientifique",
    graduated: true,
    year: "2008",
    subtitle: {
      description: "Baccalauréat Scientifique - option SVT",
      location: "Lycée A. Kastler"
    },
    infos: {
      majors: "",
      minors: "",
      speciality: ""
    }
  }
];

export default class ResumeAcademics extends Component {
  renderAcademics = () => {
    return academics.map(academic => {
      return (
        <li key={academic.title} className="resume__section__item">
          <header>
            <div>
              <h3>{academic.title}</h3>
              {academic.graduated && <i className="fa fa-graduation-cap" />}
              <p>{academic.year}</p>
            </div>
          </header>
          <div className="resume__section__item__subtitle">
            <p>
              <Icon type="environment" /> {academic.subtitle.location}
            </p>
          </div>
          {academic.infos.speciality && (
            <p>Speciality: {academic.infos.speciality}</p>
          )}
          {academic.infos.majors && <p>Majeures: {academic.infos.majors}</p>}
          {academic.infos.minors && <p>Mineures: {academic.infos.minors}</p>}
        </li>
      );
    });
  };

  render() {
    return (
      <div className="resume__wrapper">
        <StyledWrapper header={WrapperHeader} footer={WrapperFooter}>
          <div>
            <h2>Academics</h2>
          </div>
          <ul className="resume__section border-top-green">
            {this.renderAcademics()}
          </ul>
        </StyledWrapper>
      </div>
    );
  }
}
