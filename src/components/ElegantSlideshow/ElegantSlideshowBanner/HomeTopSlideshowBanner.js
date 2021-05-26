import React, { Component } from "react";
import classnames from "classnames";
import "./HomeTopSlideshowBanner.css";
import "./HomeTopSlideshowBannerMobile.css";
import ReactVisibilitySensor from "react-visibility-sensor";

class HomeTopSlideshowBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { bannerVisible } = this.state;

    return (
      <ReactVisibilitySensor
        offset={{ bottom: 300 }}
        partialVisibility={true}
        onChange={(isVisible) => {
          if (isVisible) this.setState({ bannerVisible: true });
        }}
      >
        <div className="firstSliderParagraphOuterWrapper">
          <div
            className={classnames("firstSliderParagraphWrapper", {
              show: bannerVisible,
            })}
            onClick={(e) => {
              e.stopPropagation(0);
            }}
          >
            <div className="firstSliderParagraphDiv">
              <p className="firstSliderWelcomeParagraph">
                Welcome to <span>Green Zenphony</span>
              </p>
              <div className="utensilsIconWrapper">
                <img className="utensilsIcon" src={"misc/utensils.svg"} alt=""></img>
              </div>
              <p className="firstSliderDiscoverParagraph">Discover the best of vegan cuisine</p>
              <div className="firstSliderButtonsDiv">
                <button
                  className={classnames("", {
                    glowUpButton: true,
                  })}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {" "}
                  Learn more
                </button>
                <button
                  className={classnames("", {
                    glowUpButton: true,
                  })}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Our Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </ReactVisibilitySensor>
    );
  }
}

export default HomeTopSlideshowBanner;
