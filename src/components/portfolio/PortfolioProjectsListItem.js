import React, { Component } from "react";
import { Modal, Icon, Button } from "antd";

import ItemCharts from "./ItemCharts";
import renderLogos from "../../selectors/logos";

export default class PortfolioProjectsListItem extends Component {
  state = { modalVisible: false };
  showModal = () => {
    this.setState({
      modalVisible: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      modalVisible: false
    });
  };
  handleCancel = e => {
    console.log("cancel");
    this.setState({
      modalVisible: false
    });
  };

  render() {
    const {
      imgSrc,
      title,
      type,
      description,
      options,
      stats
    } = this.props.project;
    console.log(this.props);
    return (
      <div
        onMouseEnter={() => this.props.onMouseEnterProject(description)}
        onMouseLeave={() => this.props.resetProjectName()}
      >
        <div className="grid-item" onClick={this.showModal}>
          <div className="cube-wrap">
            <div className="cube">
              <div className="cube__front">
                <img src={imgSrc} alt="project cover" />
              </div>
              <div className="cube__bottom" />
              <div className="cube__right" />
              <div className="cube__shadow" />
            </div>
          </div>
        </div>
        <div className="grid-modal">
          <Modal
            title={`${title} - ${type}`}
            visible={this.state.modalVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={null}
          >
            <div className="modal-content--portfolio">
              <section className="modal-content--portfolio--left">
                <img src={imgSrc} alt={`${title}'s cover`} />
              </section>

              <section className="modal-content--portfolio--right">
                <header className="modal-content--portfolio--right__header">
                  <p>"{description}"</p>
                </header>
                <section className="modal-content--portfolio--right__middle">
                  <div className="modal-content--portfolio--right__chart">
                    <h4>Stats (lines)</h4>
                    <ItemCharts stats={stats} />
                  </div>
                  <div>
                    <h4>Technologies</h4>
                    <div className="modal-content--portfolio--right__techno">
                      {renderLogos(options)}
                    </div>
                  </div>
                </section>
                <footer className="modal-content--portfolio--right__footer">
                  <Button>
                    <Icon type="code" /> Code
                  </Button>
                  <Button type="primary">
                    <Icon type="global" /> Live version
                  </Button>
                </footer>
              </section>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}
