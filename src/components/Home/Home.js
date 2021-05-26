import React, { Component } from "react";
import "./Home.css";
import HomeLowerLeftSlideshow from "./HomeLowerLeftSlider/HomeLowerLeftSlideshow";
import HomeLowerRightDiv from "./HomeLowerRightDiv/HomeLowerRightDiv";
import classnames from "classnames";

import ReactVisibilitySensor from "react-visibility-sensor";
import { connect } from "react-redux";
import ElegantSlideshow from "../ElegantSlideshow/ElegantSlideshow";
// import { setPageVisited } from '../../actions/navbarActions';
import path from "path";

class Home extends Component {
  constructor(props) {
    super(props);

    const slideshowImagesPath = path.resolve("HomePage/ElegantSlideshow");
    const veilImagesPath = path.resolve(slideshowImagesPath, "veilImages");

    this.state = {
      slideshowImages: [{ src: path.resolve(slideshowImagesPath, "1.jpg") }, { src: path.resolve(slideshowImagesPath, "2.jpg") }],
      veilImages: [
        { src: path.resolve(veilImagesPath, "4.png"), alt: "Food vector created by inka1" },
        { src: path.resolve(veilImagesPath, "5.png"), alt: "Food vector created by rawpixel.com" },
        { src: path.resolve(veilImagesPath, "3.png") },
      ],
    };
  }

  // componentWillUnmount() {
  //     var { visitedPages } = this.props.navbar;
  //     if (visitedPages.indexOf("home") === -1) {
  //         visitedPages.push("home");
  //         this.props.setPageVisited(visitedPages);
  //     }
  // }

  render() {
    const { showUpperPart, showLowerPart, slideshowImages, veilImages } = this.state;

    return (
      <div className="homeDiv">
        <ReactVisibilitySensor
          offset={{ bottom: 200 }}
          partialVisibility={true}
          onChange={(isVisible) => {
            if (isVisible) this.setState({ showUpperPart: true });
          }}
        >
          <div className="upperPart">
            <ElegantSlideshow slideshowImages={slideshowImages} veilImages={veilImages} showSlideshow={showUpperPart} />
          </div>
        </ReactVisibilitySensor>

        <ReactVisibilitySensor
          offset={{ bottom: 200 }}
          partialVisibility={true}
          onChange={(isVisible) => {
            if (isVisible) this.setState({ showLowerPart: true });
          }}
        >
          <div className="lowerPart">
            <HomeLowerLeftSlideshow
              showImage={showLowerPart}
              // incrementImageLoaded={this.incrementImageLoaded}
            />

            <HomeLowerRightDiv
              revealComponents={showLowerPart}
              // incrementImageLoaded={this.incrementImageLoaded}
            />
          </div>
        </ReactVisibilitySensor>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    navbar: state.navbar,
  };
};

export default connect(mapStateToProps, {
  // setPageVisited
})(Home);
// export default Home;
