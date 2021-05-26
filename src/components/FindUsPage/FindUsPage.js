import React, { Component } from "react";
import ElegantSlideshow from "../ElegantSlideshow/ElegantSlideshow";
import "./FindUsPage.css";
import "./FindUsPageMobile.css";
import classnames from "classnames";
import OpeningHoursBox from "../OpeningHoursBox/OpeningHoursBox";
import ServicesBox from "../ServicesBox/ServicesBox";
import ReactVisibilitySensor from "react-visibility-sensor";
import path from "path";
import { v4 as generateUniqueID } from "uuid";

class FindUsPage extends Component {
  constructor(props) {
    super(props);

    const slideshowImagesPath = path.resolve("FindUsPage/ElegantSlideshow");
    const veilImagesPath = path.resolve(slideshowImagesPath, "veilImages");

    this.state = {
      openingHours: [
        {
          id: generateUniqueID(),
          day: "Monday",
          hours: "11:00am - 9:45pm",
        },
        {
          id: generateUniqueID(),
          day: "Tuesday",
          hours: "11:00am - 9:45pm",
        },
        {
          id: generateUniqueID(),
          day: "Wednesday",
          hours: "11:00am - 9:45pm",
        },
        {
          id: generateUniqueID(),
          day: "Thursday",
          hours: "11:00am - 9:45pm",
        },
        {
          id: generateUniqueID(),
          day: "Friday",
          hours: "11:00am - 9:45pm",
        },
        {
          id: generateUniqueID(),
          day: "Saturday",
          hours: "11:00am - 9:45pm",
        },
        {
          id: generateUniqueID(),
          day: "Sunday",
          hours: "11:30am - 9:45pm",
        },
      ],

      slideshowImages: [
        { src: path.resolve(slideshowImagesPath, "1.jpg"), name: "awning" },
        { src: path.resolve(slideshowImagesPath, "2.jpg") },
      ],
      veilImages: [
        { src: path.resolve(veilImagesPath, "3.png") },
        { src: path.resolve(veilImagesPath, "2.jpg") },
        { src: path.resolve(veilImagesPath, "1.jpg") },
      ],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        // revealComponents: true,
        showNeonLine: true,
      });
    }, 200);
  }

  render() {
    const { openingHours, showNeonLine, revealComponents, slideshowImages, veilImages } = this.state;

    return (
      <ReactVisibilitySensor
        offset={{ bottom: 300 }}
        partialVisibility={true}
        onChange={(isVisible) => {
          if (isVisible) this.setState({ revealComponents: true });
        }}
      >
        <div className="findUsPageDiv">
          <div className="leftSide">
            <div
              className={classnames("mapDivWrapper", {
                mapDivWrapperShowLoaded: true,
              })}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <iframe
                className="mapDiv"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.440991238172!2d-73.8659837850949!3d40.73032094443235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e3096883627%3A0x80b2c7e836eabc66!2sGreen+Zenphony!5e0!3m2!1sen!2sus!4v1557250844429!5m2!1sen!2sus"
                width="600"
                height="450"
                frameborder="0"
                allowfullscreen
              ></iframe>
              <span
                className={classnames("whiteScreen", {
                  whiteScreenActivate: true,
                })}
              ></span>
            </div>
          </div>

          <div className="rightSide">
            <div className="topDiv">
              <ElegantSlideshow showSlideshow={revealComponents} slideshowImages={slideshowImages} veilImages={veilImages} />
            </div>
            <div className="bottomDiv">
              <OpeningHoursBox openingHours={openingHours} showNeonLine={showNeonLine} showBox={revealComponents} />
              <ServicesBox showBox={revealComponents} />
            </div>
          </div>
        </div>
      </ReactVisibilitySensor>
    );
  }
}

export default FindUsPage;
