import React, { Component } from "react";
import "./AboutTopBoxes.css";
import classnames from "classnames";
import AboutBox from "../AboutBox";
import aboutPageImages from "../aboutPageImages";
import ReactVisibilitySensor from "react-visibility-sensor";

class AboutTopBoxes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { showBoxes, showImages, hideShadow } = this.state;

    return (
      <div
        className={classnames("aboutTopBoxes", {
          showShadow: showImages,
          hideShadow: hideShadow,
        })}
      >
        <ReactVisibilitySensor
          offset={{ bottom: 300 }}
          partialVisibility={true}
          onChange={(isVisible) => {
            if (isVisible) this.setState({ showBoxes: true });
          }}
        >
          <div className="topRow">
            <AboutBox
              imgObj={aboutPageImages[0]}
              showBox={showBoxes}
              showImages={showImages}
              incrementImageLoaded={this.incrementImageLoaded}
            />
            <AboutBox
              imgObj={aboutPageImages[1]}
              showBox={showBoxes}
              showImages={showImages}
              incrementImageLoaded={this.incrementImageLoaded}
            />
          </div>
        </ReactVisibilitySensor>
        <div className="bottomRow">
          <AboutBox
            imgObj={aboutPageImages[2]}
            showBox={showBoxes}
            showImages={showImages}
            incrementImageLoaded={this.incrementImageLoaded}
          />
          <AboutBox
            imgObj={aboutPageImages[3]}
            showBox={showBoxes}
            showImages={showImages}
            incrementImageLoaded={this.incrementImageLoaded}
          />
        </div>
      </div>
    );
  }
}

export default AboutTopBoxes;
