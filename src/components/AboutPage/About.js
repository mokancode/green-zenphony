import React, { Component } from "react";
// import PropTypes from 'prop-types';
import classnames from "classnames";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {} from "../../actions/navbarActions";
import "./About.css";
import "./AboutMobile.css";
import AboutWelcome from "./AboutWelcome/AboutWelcome";
import AboutTopBoxes from "./AboutTopBoxes/AboutTopBoxes";
import AboutBox from "./AboutBox";
import aboutPageImages from "./aboutPageImages";
import ReactVisibilitySensor from "react-visibility-sensor";
import { v4 as generateUniqueID } from "uuid";
import isEmpty from "../../is-empty";

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfLoadedImages: 0,
    };

    this.setSelectedImageDescription = this.setSelectedImageDescription.bind(this);
    this.incrementImageLoaded = this.incrementImageLoaded.bind(this);
  }

  componentDidMount() {
    var uniqueIDs = [];
    for (var i = 0; i < 4; i++) {
      uniqueIDs.push(generateUniqueID());
    }
    this.setState({ uniqueIDs });

    // console.log("props about", this.props);

    const { enterNew } = this.props;
    if (enterNew) {
      setTimeout(() => {
        this.props.setNavbarEnterNew(false);
      }, 521);
    }

    setTimeout(() => {
      this.setState({ leftTopDivWrapperVisible: true });
    }, 600);

    document.addEventListener("keyup", (e) => {
      if (e.key === "Escape" && this.state.showDescription) {
        this.setState({ showDescription: false });
      }
    });
  }

  componentDidUpdate(nextProps, prevState) {
    const { showImages, removeTransitionDelay } = this.state;

    // console.log("navbar: ", this.props.selection);

    if (this.props.selection != "About" && !removeTransitionDelay) {
      this.setState({ removeTransitionDelay: true });
    }

    const { numberOfLoadedImages } = this.state;

    if (numberOfLoadedImages >= 8 && !this.state.imagesLoadedWasSet) {
      this.setState(
        { imagesLoadedWasSet: true },
        function () {
          this.props.setImgsLoaded();
        }.bind(this)
      );
    }
  }

  getDirectionsLink() {
    this.props.isPageTransitioning(true);

    setTimeout(() => {
      this.props.history.push("FindUs");
      this.props.setNavbarElement("FindUs");
    }, 500);

    setTimeout(() => {
      this.props.isPageTransitioning(false);
    }, 1000);
  }

  setSelectedImageDescription(imgObj) {
    this.setState({
      showDescription: true,
      selectedImg: imgObj.src,
      selectedImgDesc: imgObj.description,
    });
  }

  incrementImageLoaded() {
    var { numberOfLoadedImages } = this.state;
    numberOfLoadedImages++;
    this.setState({ numberOfLoadedImages }, () => {
      // console.log(this.state.numberOfLoadedImages);
    });
  }

  render() {
    const {} = this.props;

    const { selectedImg, selectedImgDesc, showDescription, showBoxes, showImages, uniqueIDs } = this.state;

    return (
      <div className="aboutDiv">
        <div className="aboutTopHalf">
          <AboutWelcome />
          <AboutTopBoxes />
        </div>

        <ReactVisibilitySensor
          offset={{ bottom: 100 }}
          partialVisibility={true}
          onChange={(isVisible) => {
            if (isVisible) this.setState({ showBoxes: true });
          }}
        >
          <div className="aboutBottomHalf">
            {!isEmpty(uniqueIDs) &&
              new Array(4).fill(undefined).map((box, index) => {
                return (
                  <div key={uniqueIDs[index]} className="aboutBoxBottomHalfWrapper">
                    <AboutBox
                      showBox={showBoxes}
                      imgObj={aboutPageImages[index + 4]}
                      showImages={showImages}
                      // setSelectedImageDescription={this.setSelectedImageDescription}
                      // incrementImageLoaded={this.incrementImageLoaded}
                    />
                  </div>
                );
              })}
          </div>
        </ReactVisibilitySensor>

        {/* <div className={classnames("descBox", {
                    "descBoxShow": showDescription
                })}>
                    <div className="descBoxInner">
                        <p className="closeDesc" onClick={function (e) { this.setState({ showDescription: false }) }.bind(this)}>X</p>
                        <img src={selectedImg} alt="img"></img>
                        <div className="descTextDiv">
                            <p>{selectedImgDesc}</p>
                        </div>
                    </div>
                </div> */}
      </div>
    );
  }
}

// About.propTypes = {
//     navbar: PropTypes.object.isRequired
// }

const mapStateToProps = (state) => {
  return {
    navbar: state.navbar,
  };
};

export default withRouter(connect(mapStateToProps, {})(About));
