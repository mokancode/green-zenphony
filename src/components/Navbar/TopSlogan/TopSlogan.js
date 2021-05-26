import React, { Component } from "react";
import "./TopSlogan.css";
import SloganLetter from "./SloganLetter";
import classnames from "classnames";
import { v4 as generateUniqueID } from "uuid";
import isEmpty from "../../../is-empty";

export class TopSlogan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sloganLeft: "Kosher Vega",
      sloganRight: "n Restaurant",
      topSloganDivDots: false,
    };
  }

  componentDidMount() {
    const { sloganLeft, sloganRight } = this.state;
    var uniqueIDsLeft = [],
      uniqueIDsRight = [];

    for (var i = 0; i < String(sloganLeft).split("").length; i++) {
      uniqueIDsLeft.push(generateUniqueID());
    }
    for (var i = 0; i < String(sloganLeft).split("").length; i++) {
      uniqueIDsRight.push(generateUniqueID());
    }
    this.setState({ uniqueIDsLeft, uniqueIDsRight });

    setTimeout(() => {
      this.setState({ readyToLoad: true });
    }, 800);

    setTimeout(() => {
      this.setState({ topSloganDivDots: true });
    }, 2500);
  }

  render() {
    const { sloganLeft, sloganRight, readyToLoad, topSloganDivDots, uniqueIDsLeft, uniqueIDsRight } = this.state;

    return (
      <div
        className={classnames("topSloganDiv", {
          topSloganDivDots: topSloganDivDots,
        })}
      >
        <ul className="sloganList sloganListLeft">
          {!isEmpty(uniqueIDsLeft) &&
            String(sloganLeft)
              .split("")
              .map((letter, index) => {
                if (letter === " ")
                  return (
                    <li key={uniqueIDsLeft[index]}>
                      <span className="sloganSpace"></span>
                    </li>
                  );
                else
                  return (
                    <li key={uniqueIDsLeft[index]}>
                      <SloganLetter readyToLoad={readyToLoad} type={"sloganLetterLeft"} letter={letter} letterIndex={index} />
                    </li>
                  );
              })}
        </ul>
        <ul className="sloganList sloganListRight">
          {!isEmpty(uniqueIDsRight) &&
            String(sloganRight)
              .split("")
              .map((letter, index) => {
                if (letter === " ")
                  return (
                    <li key={uniqueIDsRight[index]}>
                      <span className="sloganSpace"></span>
                    </li>
                  );
                else
                  return (
                    <li key={uniqueIDsRight[index]}>
                      <SloganLetter readyToLoad={readyToLoad} type={"sloganLetterRight"} letter={letter} letterIndex={index} />
                    </li>
                  );
              })}
        </ul>
      </div>
    );
  }
}

export default TopSlogan;
