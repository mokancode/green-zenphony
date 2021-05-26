import React, { Component } from "react";
import "./OrderOnline.css";
import OrderOnlineLetter from "./OrderOnlineLetter";
import classnames from "classnames";
import { connect } from "react-redux";
import { v4 as generateUniqueID } from "uuid";
import isEmpty from "../../../is-empty";

export class OrderOnline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textLeft: "Order",
      textRight: "Online",
    };
  }

  componentDidMount() {
    const { textLeft, textRight } = this.state;
    var uniqueIDsLeft = [],
      uniqueIDsRight = [];

    for (var i = 0; i < String(textLeft).split("").length; i++) {
      uniqueIDsLeft.push(generateUniqueID());
    }
    for (var i = 0; i < String(textLeft).split("").length; i++) {
      uniqueIDsRight.push(generateUniqueID());
    }
    this.setState({ uniqueIDsLeft, uniqueIDsRight });

    setTimeout(() => {
      this.setState({ showBox: true });
    }, 10);
  }

  render() {
    const { textLeft, textRight, showBox, showNeon, showLetters, showDots, uniqueIDsLeft, uniqueIDsRight } = this.state;

    return (
      <div
        className={classnames("orderOnlineDiv", {
          showBox: showBox,
          showLetters: showLetters,
          showDots: showDots,
          showNeon: showNeon,
          pullDownByStickyNavbar: this.props.navbar.stickyNavbar,
        })}
        onTransitionEnd={() => {
          if (showBox !== showLetters) this.setState({ showLetters: true, showNeon: true, showDots: true });
        }}
      >
        <div className="neonContainer">
          <div className="neonLine top horizontal"></div>
          <div className="neonLine bottom horizontal"></div>
          <div className="neonLine left vertical"></div>
          <div className="neonLine right vertical"></div>
        </div>

        {/* <a target="_blank" href={"https://www.beyondmenu.com/38373/rego-park/green-zenphony-rego-park-11374.aspx?utm_source=satellite&utm_medium=home_order&pk_vid=90c4c5c0272033311558469672b5ded3"}><OrderOnline /></a> */}

        <ul className="orderOnlineLetters orderOnlineLettersLeft">
          {!isEmpty(uniqueIDsLeft) &&
            String(textLeft)
              .split("")
              .map((letter, index) => {
                return (
                  <li key={uniqueIDsLeft[index]}>
                    <OrderOnlineLetter readyToLoad={true} type={"left"} letter={letter} index={index} wordLength={textLeft.length} />
                  </li>
                );
              })}
        </ul>
        <ul className="orderOnlineLetters orderOnlineLettersRight">
          {!isEmpty(uniqueIDsRight) &&
            String(textRight)
              .split("")
              .map((letter, index) => {
                return (
                  <li key={uniqueIDsRight[index]}>
                    <OrderOnlineLetter readyToLoad={true} type={"right"} letter={letter} index={index} wordLength={textRight.length} />
                  </li>
                );
              })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    navbar: state.navbar,
  };
};

export default connect(mapStateToProps, {})(OrderOnline);
// export default OrderOnline;
