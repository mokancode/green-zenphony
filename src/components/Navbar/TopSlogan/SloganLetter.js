import React, { Component } from "react";
import classnames from "classnames";

export class SloganLetter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sloganLetterShow: false,
    };
  }

  componentDidMount() {}

  componentDidUpdate() {
    if (this.props.readyToLoad && !this.state.sloganLettershow) {
      const { letterIndex, type } = this.props;
      var delay = letterIndex * 100;

      var rightIndex = 10 - letterIndex;

      if (type === "sloganLetterRight") {
        // console.log("right: ", 10-letterIndex);
        delay = rightIndex * 100;
      }

      setTimeout(() => {
        this.setState({ sloganLetterShow: true });
      }, delay);
      // console.log("delay: ", delay);
    }
  }

  render() {
    const { letter, type } = this.props;
    const { sloganLetterShow } = this.state;

    return (
      <p
        className={classnames([type], {
          sloganLetterShow: sloganLetterShow,
          sloganLetter: true,
        })}
      >
        {" "}
        {letter}
      </p>
    );
  }
}

export default SloganLetter;
