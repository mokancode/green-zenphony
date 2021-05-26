import React, { Component } from "react";
import classnames from "classnames";
import "./HomeLowerLeftSlideshow.css";
import { connect } from "react-redux";
import { setHomeLowerLeftInPosition } from "../../../actions/styleActions";

export class HomeLowerLeftSlideshow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lowerLeftSlideshowDivVisible: false,
      lowerLeftSlideshowDivDisabled: true,
    };

    // refs
    this.slideshowRef = React.createRef();
  }

  componentDidUpdate() {}

  componentDidMount() {
    // setTimeout(() => {
    //     this.setState({ showImage: true });
    // }, 1000);
  }

  componentWillUnmount() {
    this.props.setHomeLowerLeftInPosition(false);
  }

  render() {
    const { showText } = this.state;
    const { showImage } = this.props;

    return (
      // <Waypoint
      //     onEnter={ (e) { this.setState({ showImage: true }) }=>}
      //     scrollableAncestor={window}
      //     bottomOffset='250px'
      //     topOffset='250px'
      // >
      <div
        className={classnames("lowerLeftSlideshowDiv", {
          showImage: showImage,
          showText: showText,
        })}
        ref={this.slideshowRef}
        onTransitionEnd={(e) => {
          if (showImage && e.target === this.slideshowRef.current) {
            this.setState({ showText: true });
            this.props.setHomeLowerLeftInPosition(true);
          }
        }}
      >
        <img
          src="HomePage/HomeLowerLeftImage.jpg"
          alt="img"
          onLoad={(e) => {
            // this.props.incrementImageLoaded();
          }}
        ></img>
        <div className="lowerLeftSlideshowInnerDiv">
          <p>
            Bringing <span>taste</span> and <span>elegance</span> in the same place
          </p>
          <div className="restaurantAddress">
            <p>
              <span>Green Zenphony</span>, 95-26 Queens Blvd
            </p>
            <p>Rego Park, NY 11374</p>
          </div>
        </div>
      </div>
      // </Waypoint>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    styles: state.styles,
  };
};

export default connect(mapStateToProps, { setHomeLowerLeftInPosition })(HomeLowerLeftSlideshow);
// export default HomeLowerLeftSlideshow;
