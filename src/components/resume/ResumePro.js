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

const pros = [
  {
    title: "Stage de fin de cycle - DUT",
    year: "Avril 2011 - Août 2011",
    subtitle: {
      location: "Rutherford Appleton Laboratory, Oxfordshire (UK)"
    },
    infos: {
      description:
        "Chargé, au sein d'une équiipe de chercheurs, de la mise en place d'un protocole d'étude du plasma formé par une source d'ions.",
      list: [
        "Etude par spectrophotométrie",
        "Mise en place d'une interface LabView",
        "Soutenance et rapport de stage en anglais"
      ]
    }
  },
  {
    title: "Télévendeur",
    year: "Août 2010",
    subtitle: {
      location: "ETC - Colombes(92)"
    },
    infos: {
      description:
        "Appels entrants, rensignements téléphonique, prise de commandes.",
      list: []
    }
  },
  {
    title: "Télévendeur",
    year: "Juillet 2009",
    subtitle: {
      location: "ETC - Colombes(92)"
    },
    infos: {
      description:
        "Appels entrants, rensignements téléphonique, prise de commandes.",
      list: []
    }
  },
  {
    title: "Télévendeur",
    year: "Août 2008",
    subtitle: {
      location: "ETC - Colombes(92)"
    },
    infos: {
      description:
        "Appels entrants, rensignements téléphonique, prise de commandes.",
      list: []
    }
  }
];

export default class ResumePro extends Component {
  renderPros = () => {
    return pros.map(pro => {
      return (
        <li key={pro.year} className="resume__section__item">
          <header>
            <div>
              <h3>{pro.title}</h3>

              <p>{pro.year}</p>
            </div>
          </header>
          <div className="resume__section__item__subtitle">
            <p>
              <Icon type="pushpin" /> {pro.subtitle.location}
            </p>
          </div>
          <p>{pro.infos.description}</p>
          <ul>{pro.infos.list.map(item => <li key={item}>{item}</li>)}</ul>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="resume__wrapper">
        <StyledWrapper header={WrapperHeader} footer={WrapperFooter}>
          <ul className="resume__section">{this.renderPros()}</ul>
        </StyledWrapper>
      </div>
    );
  }
}
