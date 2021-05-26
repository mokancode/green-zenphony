import React, { Component } from "react";
import "./FindUsSlideshow.css";
import classnames from "classnames";
import path from "path";
import ElegantSlideshowCustomCursor from "./ElegantSlideshowCustomCursor/ElegantSlideshowCustomCursor";
import ElegantSlideshowBanner from "./ElegantSlideshowBanner/ElegantSlideshowBanner";
import isEmpty from "../../../is-empty";
import { connect } from "react-redux";

class FindUsSlideshow extends Component {
  constructor(props) {
    super(props);

    const slideshowImagesPath = path.resolve("HomePage/ElegantSlideshow");
    const veilImagesPath = path.resolve(slideshowImagesPath, "veilImages");

    this.state = {
      slideshowImages: [{ src: path.resolve(slideshowImagesPath, "1.jpg") }, { src: path.resolve(slideshowImagesPath, "2.jpg") }],
      veilImages: [{ src: path.resolve(veilImagesPath, "1.png") }, { src: path.resolve(veilImagesPath, "2.png") }],
      currentVeilImageIndex: 0,
      currentImageIndex: 0,
    };

    // refs
    this.slideshowVeil = React.createRef();
    this.customCursorRef = React.createRef();
    this.slideshowImgWrapper = React.createRef();
  }

  componentDidMount() {
    // console.log("path: ", this.state.veilImages);

    // window.addEventListener("mousemove", (e) => {
    //     console.log("window mouse Y", e.clientY);
    // })

    // window.addEventListener("scroll", (e) => {
    //     console.log("scrollY", window.scrollY);
    // })

    // if (this.props.navbar.visitedPages.indexOf("home") === -1) setTimeout( () =>{
    //     this.setState({ sessionFirstVisit: true });
    // }, 10);

    setTimeout(() => {
      this.setState({ showSlideshow: true });
    }, 10);
  }

  render() {
    const { showSlideshow, showVeil, hideVeil, slideshowImages, veilImages, showCustomCursor } = this.state;
    var { currentVeilImageIndex, currentImageIndex } = this.state;

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
        ref={this.slideshowImgWrapper}
      >
        <div className="imagesContainer">
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
                <img id="veilImg" src={veilImages[currentVeilImageIndex].src} alt="" />
              </div>
            </div>
          </div>

          <div
            className="slideshowImgWrapper"
            // ref={this.slideshowImgWrapper}
            onMouseMove={(e) => {
              // console.log("parent offsetTop: ", this.slideshowImgWrapper.current.offsetTop);
              var parent = this.slideshowImgWrapper.current.parentNode;
              var totalOffsetTop = this.slideshowImgWrapper.current.offsetTop + parent.offsetTop;
              var totalOffsetLeft = this.slideshowImgWrapper.current.offsetLeft + parent.offsetLeft;
              // var totalOffsetLeft = 0;
              while (!isEmpty(parent.parentNode)) {
                parent = parent.parentNode;
                totalOffsetTop += parent.offsetTop;
                totalOffsetLeft += parent.offsetLeft;
              }
              // console.log("parentNode total offset: ", totalOffsetTop, totalOffsetLeft);

              // console.log(e.clientX, e.clientX + window.scrollX);
              // console.log(e.clientY, e.clientY + window.scrollY);
              this.customCursorRef.current.style.transform = `translateX(${
                e.clientX + window.scrollX - totalOffsetLeft + 65
              }px) translateY(${e.clientY + window.scrollY - totalOffsetTop - 30}px)`;

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
                className="slideshowImg"
                src={slideshowImages[currentImageIndex].src}
                alt=""
                onLoadCapture={() => {
                  if (showVeil && !hideVeil) {
                    this.setState({ hideVeil: true, showVeil: false });
                  }
                  // console.log("img loaded", currentImageIndex);
                }}
              />
            </div>

            <ElegantSlideshowBanner />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    navbar: state.navbar,
  };
};

export default connect(mapStateToProps, {})(FindUsSlideshow);
// export default FindUsSlideshow;
