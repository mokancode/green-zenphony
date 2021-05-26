import React, { Component } from "react";
import "./MenuTopGallery.css";
import MenuTopGalleryItem from "./MenuTopGalleryItem";
import menuTopGalleryImagesList from "./menuTopGalleryImagesList.js";
import { v4 as generateUniqueID } from "uuid";
import isEmpty from "../../../is-empty";

class MenuTopGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var uniqueIDs = [];
    for (var i = 0; i < 4; i++) {
      uniqueIDs.push(generateUniqueID());
    }
    this.setState({ uniqueIDs });

    setTimeout(() => {
      this.setState({ showBoxes: true });
    }, 10);
  }

  render() {
    const { showBoxes, uniqueIDs } = this.state;

    return (
      <div className="menuTopGallery">
        {!isEmpty(uniqueIDs) &&
          new Array(4).fill(undefined).map((box, index) => {
            return <MenuTopGalleryItem key={uniqueIDs[index]} index={index} showBox={showBoxes} images={menuTopGalleryImagesList} />;
          })}
      </div>
    );
  }
}

export default MenuTopGallery;
