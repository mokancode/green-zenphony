import React, { Component } from "react";
import "./ElegantSlideshow.css";
import "./ElegantSlideshowMobile.css";
import classnames from "classnames";
import { connect } from "react-redux";
import ElegantSlideshowBanner from "./ElegantSlideshowBanner/HomeTopSlideshowBanner";
import isEmpty from "../../is-empty";
import ElegantSlideshowCustomCursor from "./ElegantSlideshowCustomCursor/ElegantSlideshowCustomCursor";
import ThreeHorizontalDotsSpinner from "../Spinners/ThreeHorizontalDotsSpinner.js/ThreeHorizontalDotsSpinner";
import { withRouter } from "react-router-dom";

class ElegantSlideshow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVeilImageIndex: 0,
      currentImageIndex: 0,
    };

    // refs
    this.slideshowVeil = React.createRef();
    this.customCursorRef = React.createRef();
    this.slideshowImgWrapper = React.createRef();
  }

  componentDidMount() {
    if (this.props.location.pathname === "/") {
      this.setState({ showBanner: true });
    }
  }

  componentDidUpdate() {
    const { showSlideshow } = this.props;
    if (showSlideshow && !this.state.showSlideshow) this.setState({ showSlideshow: true });
  }

  render() {
    const { showSlideshow, showImagesContainer, showVeil, hideVeil, showCustomCursor } = this.state;
    var { currentVeilImageIndex, currentImageIndex, showBanner } = this.state;
    const { slideshowImages, veilImages } = this.props;

    return (
      <div
        className={classnames("elegantSlideshow", {
          show: showSlideshow,
          showVeil: showVeil,
          hideVeil: hideVeil,
        })}
        onClick={() => {
          if (showVeil || hideVeil) return;
          this.setState({ showVeil: true });
        }}
        // ref={this.slideshowImgWrapper}
      >
        <div
          className={classnames("imagesContainer", {
            show: showSlideshow && showImagesContainer,
          })}
        >
          {!isEmpty(slideshowImages) ? (
            <div className="imagesContainerInnerWrapper">
              <div className="slideshowVeilWrapper">
                <div
                  className="slideshowVeil"
                  ref={this.slideshowVeil}
                  onAnimationEnd={(e) => {
                    if (this.slideshowVeil.current !== e.target) return;

                    if (showVeil && !hideVeil) {
                      if (++currentImageIndex < slideshowImages.length) this.setState({ currentImageIndex });
                      else this.setState({ currentImageIndex: 0 });
                      // this.setState({ hideVeil: true, showVeil: false });
                    } else if (hideVeil && !showVeil) {
                      if (++currentVeilImageIndex < veilImages.length) this.setState({ currentVeilImageIndex });
                      else this.setState({ currentVeilImageIndex: 0 });
                      this.setState({ hideVeil: false });
                    }
                  }}
                >
                  <div className="veilImgWrapper">
                    <img id="veilImg" src={veilImages[currentVeilImageIndex].src} alt={veilImages[currentVeilImageIndex].alt} />
                  </div>
                </div>
              </div>

              <div
                className="slideshowImgWrapper"
                ref={this.slideshowImgWrapper}
                onMouseMove={(e) => {
                  // console.log(this.slideshowImgWrapper.current.getBoundingClientRect());
                  var { x, y } = this.slideshowImgWrapper.current.getBoundingClientRect();
                  // console.log("parent offsetTop: ", this.slideshowImgWrapper.current.offsetTop);
                  var parent = this.slideshowImgWrapper.current.parentNode;
                  var totalOffsetTop = this.slideshowImgWrapper.current.offsetTop + parent.offsetTop;
                  var totalOffsetLeft = this.slideshowImgWrapper.current.offsetLeft;
                  // var totalOffsetLeft = 0;
                  while (!isEmpty(parent.parentNode)) {
                    parent = parent.parentNode;
                    totalOffsetTop += parent.offsetTop;
                    totalOffsetLeft += parent.offsetLeft;
                  }
                  // console.log("parentNode total offset: ", totalOffsetTop, totalOffsetLeft);

                  // console.log(window.scrollX, window.scrollY);
                  // console.log(e.clientX + window.scrollX, e.clientY + window.scrollY);
                  // console.log(`$clientX ${e.clientX}, clientY ${e.clientY}`);

                  this.customCursorRef.current.style.transform = `translateX(${e.clientX + window.scrollX - x}px) 
                                         translateY(${e.clientY + window.scrollY - totalOffsetTop}px)`;

                  // this.customCursorRef.current.style.transform =
                  //     `translateX(${e.clientX + window.scrollX - totalOffsetLeft}px)
                  //      translateY(${e.clientY + window.scrollY - totalOffsetTop}px)`;

                  if (!showCustomCursor) this.setState({ showCustomCursor: true });
                }}
                onMouseLeave={() => {
                  if (showCustomCursor) this.setState({ showCustomCursor: false });
                }}
              >
                <div
                  className={classnames("customCursorWrapper", {
                    show: showCustomCursor,
                  })}
                  ref={this.customCursorRef}
                >
                  <ElegantSlideshowCustomCursor />
                </div>

                <div className="slideshowImgInnerWrapper">
                  <img
                    className={`slideshowImg ${slideshowImages[currentImageIndex].name}`}
                    src={slideshowImages[currentImageIndex].src}
                    alt=""
                    onLoad={() => {
                      this.setState({ showImagesContainer: true });
                    }}
                    onLoadCapture={() => {
                      if (showVeil && !hideVeil) {
                        this.setState({ hideVeil: true, showVeil: false });
                      }
                      // console.log("img loaded", currentImageIndex);
                    }}
                  />
                </div>

                {showBanner ? <ElegantSlideshowBanner /> : null}
              </div>
            </div>
          ) : null}
        </div>

        {!showImagesContainer && !isEmpty(slideshowImages) ? <ThreeHorizontalDotsSpinner /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    navbar: state.navbar,
  };
};

export default withRouter(connect(mapStateToProps, {})(ElegantSlideshow));
// export default ElegantSlideshow;
