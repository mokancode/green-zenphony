import React, { Component } from "react";
import "./OpeningHoursBox.css";
import classnames from "classnames";

class OpeningHoursBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // console.log("showBox: ", this.props.showBox, this.props.findUs);
  }

  render() {
    const { showNeonLine, openingHours, showBox } = this.props;
    const { inPosition } = this.state;

    return (
      <div
        className={classnames("openingHoursWrapper", {
          show: showBox,
        })}
        onTransitionEnd={(e) => {
          if (!inPosition) this.setState({ inPosition: true });
        }}
      >
        <div className="lowerRightBox openingHours">
          <p>Restaurant</p>
          <p
            className={classnames("openingHoursText", {
              openingHoursUnderline: showNeonLine && inPosition,
            })}
          >
            Opening Hours
          </p>
          <ul className="openingHoursList">
            {openingHours.map((item) => {
              if (item.day === "Sunday") {
                return (
                  <li key={item.id} className="openingHoursInnerDiv">
                    <p>{item.day}</p>
                    <p>
                      11:<span>30</span>am - 9:45pm
                    </p>
                  </li>
                );
              } else {
                return (
                  <li key={item.id} className="openingHoursInnerDiv">
                    <p>{item.day}</p>
                    <p>{item.hours}</p>
                  </li>
                );
              }
            })}
          </ul>
        </div>

        <span
          className={classnames("neonLine", {
            showNeonLine: showNeonLine && inPosition,
          })}
          id="neonLine1"
        ></span>
        <span
          className={classnames("neonLine", {
            showNeonLine: showNeonLine && inPosition,
          })}
          id="neonLine2"
        ></span>
        <span
          className={classnames("neonLine", {
            showNeonLine: showNeonLine && inPosition,
          })}
          id="neonLine3"
        ></span>
        <span
          className={classnames("neonLine", {
            showNeonLine: showNeonLine && inPosition,
          })}
          id="neonLine4"
        ></span>
        <span
          className={classnames("", {
            showNeonBall: showNeonLine && inPosition,
          })}
          id="neonBall"
        ></span>
      </div>
    );
  }
}

export default OpeningHoursBox;
