import React, { Component } from "react";
import "./HomeLowerRightDiv.css";
import "./HomeLowerRightDivMobile.css";
import classnames from "classnames";
import { connect } from "react-redux";
import OpeningHoursBox from "../../OpeningHoursBox/OpeningHoursBox";
import ServicesBox from "../../ServicesBox/ServicesBox";

export class HomeLowerRightDiv extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openingHours: [
        {
          day: "Monday",
          hours: "11:00am - 9:45pm",
        },
        {
          day: "Tuesday",
          hours: "11:00am - 9:45pm",
        },
        {
          day: "Wednesday",
          hours: "11:00am - 9:45pm",
        },
        {
          day: "Thursday",
          hours: "11:00am - 9:45pm",
        },
        {
          day: "Friday",
          hours: "11:00am - 9:45pm",
        },
        {
          day: "Saturday",
          hours: "11:00am - 9:45pm",
        },
        {
          day: "Sunday",
          hours: "11:30am - 9:45pm",
        },
      ],
      showUpperRow: false,
      showLowerRow: false,
    };
  }

  componentDidMount() {
    // setTimeout(() => {
    //     this.setState({ showUpperRow: true, showLowerRow: true });
    // }, 1000);
  }

  componentDidUpdate() {
    const { revealComponents } = this.props;
    const { showNeonLine, showLowerRow } = this.state;

    if (revealComponents && !this.state.revealComponents) {
      // setTimeout(() => {
      this.setState({ revealComponents: true });
      // }, 3000);
    }

    if (this.props.styles.homeLowerLeftInPosition && !this.state.showNeonLine) this.setState({ showNeonLine: true });
  }

  render() {
    const { revealComponents, openingHours, showNeonLine, showUpperRow, showLowerRow } = this.state;
    const { enterNew, leaveOld, isLoaded } = this.props;
    const { homeLowerLeftInPosition } = this.props.styles;

    return (
      <div
        className={classnames("lowerRightDiv", {
          show: revealComponents,
        })}
      >
        <div className="upperRow">
          <OpeningHoursBox openingHours={openingHours} showNeonLine={showNeonLine} showBox={revealComponents} />

          <div className="lowerRightBox upperRowSlider">
            <div className="sliderImgWrapper">
              <img
                src="HomePage/HomeBottomRightImages/pineapple.jpg"
                alt="img"
                onLoad={(e) => {
                  // this.props.incrementImageLoaded();
                }}
              ></img>
            </div>

            <div
              className={classnames("foodDescriptionDiv", {
                hide: homeLowerLeftInPosition,
              })}
            >
              <div className="nameAndPrice">
                <p className="foodName">Pineapple Veggie Duck</p>
                <p className="foodPrice">$15.50</p>
              </div>
              <p className="foodDescription"></p>
              <p className="foodIngredients">
                {"Fresh pineapple chunks, veggie duck, green & red bell peppers, zucchini, fresh soy beans served in chef's special sauce."}
              </p>
            </div>
          </div>
        </div>

        <div className="lowerRow">
          <div className="lowerRightBox lowerRowSlider">
            <div className="sliderImgWrapper">
              <img
                src="HomePage/HomeBottomRightImages/steak.jpg"
                alt="img"
                onLoad={(e) => {
                  // this.props.incrementImageLoaded();
                }}
              ></img>
            </div>
            <div
              className={classnames("foodDescriptionDiv", {
                hide: homeLowerLeftInPosition,
              })}
            >
              <div className="nameAndPrice">
                <p className="foodName">Sizzling Delight</p>
                <p className="foodPrice">$15.50</p>
              </div>
              <p className="foodDescription"></p>
              <p className="foodIngredients">
                {"Portobello mushrooms, jicama, asparagus, soy chicken & pineapple stir fried in a basil brown sauce."}
              </p>
            </div>
          </div>

          <ServicesBox showBox={revealComponents} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    styles: state.styles,
  };
};

export default connect(mapStateToProps, {})(HomeLowerRightDiv);
// export default HomeLowerRightDiv;
