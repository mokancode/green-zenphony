import React, { Component } from "react";
import classnames from "classnames";
import ThreeHorizontalDotsSpinner from "../../Spinners/ThreeHorizontalDotsSpinner.js/ThreeHorizontalDotsSpinner";

class MenuTopGalleryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // refs
    this.imgRef = React.createRef();
  }

  componentDidMount() {
    // console.log("img w", this.imgRef.current.naturalWidth);
    // console.log("img h", this.imgRef.current.naturalHeight);

    if (this.imgRef.current.naturalWidth > this.imgRef.current.naturalHeight) this.setState({ landscape: true });
    else if (this.imgRef.current.naturalWidth < this.imgRef.current.naturalHeight) this.setState({ portrait: true });
  }

  componentDidUpdate() {
    if (this.imgRef.current.naturalWidth > this.imgRef.current.naturalHeight && !this.state.landscape) this.setState({ landscape: true });
    else if (this.imgRef.current.naturalWidth < this.imgRef.current.naturalHeight && !this.state.portrait)
      this.setState({ portrait: true });
  }

  render() {
    const { images, showBox, index } = this.props;
    const { portrait, landscape, showImage } = this.state;

    return (
      <div className="menuTopGalleryItemWrapper">
        <div
          className={classnames("menuTopGalleryItem", {
            show: showBox,
          })}
        >
          <img
            ref={this.imgRef}
            src={images[index].gallery[0].src}
            className={classnames("", {
              portraitImg: portrait,
              landscapeImg: landscape,
            })}
            onLoad={() => {
              this.setState({ showImage: true });
            }}
          ></img>
          {!showImage ? <ThreeHorizontalDotsSpinner /> : null}
        </div>
      </div>
    );
  }
}

export default MenuTopGalleryItem;
