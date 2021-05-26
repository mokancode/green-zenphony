import React, { Component } from "react";
import classnames from "classnames";
import "./MainCurtain.css";
import { connect } from "react-redux";
import { setMainCurtainOpened } from "../../actions/styleActions";

class MainCurtain extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // refs
    this.leftPanelRef = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showText: true });
    }, 10);
    this.setState({});
  }

  render() {
    const { bgLoaded } = this.props;
    const { showText } = this.state;

    return (
      <div
        className={classnames("mainCurtainDiv", {
          showText: showText,
          openUpCurtain: bgLoaded,
          // , "eliminateCurtain": eliminateCurtain
        })}
      >
        <div
          className="panel left"
          ref={this.leftPanelRef}
          onTransitionEnd={(e) => {
            if (e.target === this.leftPanelRef.current) this.props.setMainCurtainOpened(true);
          }}
        >
          <p>{"Just a "}</p>
        </div>
        <div className="panel right">
          <p>
            moment
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </p>
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

export default connect(mapStateToProps, { setMainCurtainOpened })(MainCurtain);
