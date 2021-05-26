import React, { Component } from "react";
import classnames from "classnames";
import "./AboutWelcome.css";
import GreenZenphonyHeader from "../GreenZenphonyHeader/GreenZenphonyHeader";

class AboutWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showBox: true, showParagraph: true });
    }, 10);
  }

  render() {
    const { showBox, showChefIcon, showWelcomeText, showParagraph, showVeganCuisineText, showDirectionsText } = this.state;

    return (
      <div
        className={classnames("aboutWelcome", {
          show: showBox,
        })}
        onTransitionEnd={() => {
          if (showBox && !showChefIcon) this.setState({ showChefIcon: true, showWelcomeText: true });
        }}
      >
        <img
          className={classnames("chefIcon", {
            showChefIcon: showChefIcon,
          })}
          src={"misc/chef.svg"}
          alt=""
        />

        <div className={classnames("aboutWelcomeTextDiv", { show: showWelcomeText })}>
          <div
            className="veil"
            onTransitionEnd={() => {
              if (showWelcomeText && !showVeganCuisineText) this.setState({ showVeganCuisineText: true });
            }}
          ></div>
          <p>Welcome to</p> <GreenZenphonyHeader />
        </div>

        <div className={classnames("experienceVeganCuisineText", { show: showParagraph })}>
          <div
            className="veil"
            onTransitionEnd={() => {
              if (showWelcomeText && !showDirectionsText) this.setState({ showDirectionsText: true });
            }}
          ></div>
          <p>
            Experience the best of<span className="veganCuisine">vegan cuisine.</span>
          </p>
          <p>Come visit us and discover! We are located at the heart of Rego Park, at 95-26 Queens Blvd</p>
        </div>

        <div className="getDirectionsBtnWrapper">
          <button
            className={classnames("getDirectionsBtn", {
              getDirectionsBtnShow: showDirectionsText,
            })}
            onClick={(e) => {
              this.getDirectionsLink();
            }}
          >
            Get directions
          </button>
        </div>
      </div>
    );
  }
}

export default AboutWelcome;
