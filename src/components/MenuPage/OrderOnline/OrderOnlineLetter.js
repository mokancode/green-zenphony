import React, { Component } from "react";
import classnames from "classnames";

export class OrderOnlineLetter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };

    // refs
    this.letterRef = React.createRef();
  }

  componentDidMount() {
    const { index, type, wordLength } = this.props;
    var delay;
    if (type === "left") delay = index * 100;
    else if (type === "right") {
      var rightIndex = wordLength - index;
      delay = rightIndex * 100;
    }

    // console.log(`${type} ${index} ${delay}`);

    this.letterRef.current.style.transitionDelay = `${delay}ms, 0ms`;
    this.letterRef.current.style.transitionProperty = `all, color`;
  }

  render() {
    const { letter, type } = this.props;
    const { show } = this.state;

    return (
      <p
        className={classnames("orderOnlineLetter", {
          type: type,
          show: show,
        })}
        ref={this.letterRef}
      >
        {letter}
      </p>
    );
  }
}

export default OrderOnlineLetter;
