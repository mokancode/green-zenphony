import React, { Component } from "react";
import classnames from "classnames";
import "./AboutBox.css";
import ThreeHorizontalDotsSpinner from "../Spinners/ThreeHorizontalDotsSpinner.js/ThreeHorizontalDotsSpinner";
import isEmpty from "../../is-empty";

export class AboutBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // refs
    this.imgRef = React.createRef();
  }

  componentDidMount() {
    if (this.imgRef.current.naturalWidth > this.imgRef.current.naturalHeight) this.setState({ landscape: true });
    else if (this.imgRef.current.naturalWidth < this.imgRef.current.naturalHeight) this.setState({ portrait: true });
  }

  componentDidUpdate() {
    if (this.imgRef.current.naturalWidth > this.imgRef.current.naturalHeight && !this.state.landscape) this.setState({ landscape: true });
    else if (this.imgRef.current.naturalWidth < this.imgRef.current.naturalHeight && !this.state.portrait)
      this.setState({ portrait: true });
  }

  render() {
    const { imgObj, showBox } = this.props;
    const { showImage, portrait, landscape } = this.state;

    return (
      <div
        className={classnames("aboutBox", {
          showBox: showBox,
          removeBg: showImage,
          // "boxInvisible": (pageTransitioning),
          // "boxHide": leaveOld,
          // "showImage": showImages && isLoaded,
        })}
      >
        {!showImage ? <ThreeHorizontalDotsSpinner /> : null}
        <div
          className={classnames("aboutBoxImgWrapper", {
            show: showImage,
          })}
        >
          <img
            ref={this.imgRef}
            src={imgObj.src}
            alt="img"
            onLoad={() => {
              this.setState({ showImage: true });
            }}
            className={classnames("", {
              portraitImg: portrait,
              landscapeImg: landscape,
            })}
          ></img>
        </div>

        {!isEmpty(imgObj.description) ? (
          <div className="aboutBoxOverlay">
            <div className="textWrapper">
              <div className="wrapperBorder">
                <div className="textInnerWrapper">
                  <p>{imgObj.description}</p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default AboutBox;
